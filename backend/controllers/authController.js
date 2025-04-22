import { db, auth } from '../firebase.js';
import axios from 'axios';

class AdminAuthController {
    static async registerAdmin(req, res) {
        try {
            if (!req.body || Object.keys(req.body).length === 0) {
                return res.status(400).json({ message: "Request body is missing." });
            }

            const { name, email, password, role } = req.body;

            if (!name || !email || !password || !role) {
                return res.status(400).json({ message: "Name, email, role and password are required." });
            }

            // Create a new user using Firebase Authentication
            const userRecord = await auth.createUser({
                email,
                password,
                displayName: name,
            });

            // Optionally, you can add additional user information to Firestore (if needed)
            await db.collection('users').doc(userRecord.uid).set({
                name,
                email,
                role,
                createdAt: new Date(),
            });

            // Send success response
            res.status(201).json({ message: "Admin registered successfully.", user: userRecord });
        } catch (error) {
            res.status(500).json({ message: "Server error.", error: error.message });
        }
    }

    static async loginAdmin(req, res) {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({ message: "Email and password are required." });
            }

            // Call Firebase REST API to sign in
            const response = await axios.post(
                `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FIREBASE_WEB_API_KEY}`,
                {
                    email,
                    password,
                    returnSecureToken: true
                }
            );

            const { idToken, refreshToken, localId } = response.data;

            res.status(200).json({
                message: "Admin logged in successfully.",
                token: idToken,
                refreshToken,
                uid: localId
            });
        } catch (error) {
            const errorMsg = error.response?.data?.error?.message || error.message;
            return res.status(401).json({ message: "Login failed.", error: errorMsg });
        }
    }

    // Google Sign-Up or Login (Backend)
    static async googleSignUp(req, res) {
        try {
            const { idToken } = req.body;  // The ID token sent from the client

            if (!idToken) {
                return res.status(400).json({ message: "Google ID token is required." });
            }

            // Verify the ID token using Firebase Admin SDK
            const decodedToken = await auth.verifyIdToken(idToken);
            const { uid, email, name } = decodedToken;

            // Check if the user already exists in Firestore
            const userRef = db.collection('users').doc(uid);
            const userDoc = await userRef.get();

            if (!userDoc.exists) {
                // If user doesn't exist, create a new user record
                await userRef.set({
                    name,
                    email,
                    role: 'admin',  // Set default role or use a value passed from client
                    createdAt: new Date(),
                });
            }

            res.status(200).json({
                message: "Google login successful.",
                uid,
                email,
                name,
                token: idToken  // Send the ID token back to the client
            });
        } catch (error) {
            console.error('Google login error:', error);
            res.status(500).json({ message: "Server error during Google sign-in.", error: error.message });
        }
    }

    static async logoutAdmin(req, res) {
        try {
            const { uid } = req.params;

            if (!uid) {
                return res.status(400).json({ message: "User ID (uid) is required to logout." });
            }

            // Revoke refresh tokens for the user
            await auth.revokeRefreshTokens(uid);

            return res.status(200).json({
                message: "Logout successful. All future sessions will require re-login.",
                uid
            });
        } catch (error) {
            console.error("Logout Error:", error);
            return res.status(500).json({ message: "Server error during logout.", error: error.message });
        }
    }
}

export default AdminAuthController;
