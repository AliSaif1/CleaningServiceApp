import { db, auth } from '../firebase.js';

class userProfileController {
    // Get user profile by UID
    static async getProfile(req, res) {
        try {
            const { uid } = req.params;

            if (!uid) {
                return res.status(400).json({ message: "User ID (uid) is required." });
            }

            const userDoc = await db.collection('users').doc(uid).get();

            if (!userDoc.exists) {
                return res.status(404).json({ message: "User not found." });
            }

            res.status(200).json({ profile: userDoc.data() });
        } catch (error) {
            console.error("Get Profile Error:", error);
            res.status(500).json({ message: "Server error while fetching profile.", error: error.message });
        }
    }

    static async updateProfile(req, res) {
        try {
            const { uid } = req.params;
            const { name, address } = req.body;

            if (!uid) {
                return res.status(400).json({ message: "User ID (uid) is required." });
            }

            if (!name && !address) {
                return res.status(400).json({ message: "At least one field (name or address) must be provided." });
            }

            const userRef = db.collection('users').doc(uid);
            const userDoc = await userRef.get();

            if (!userDoc.exists) {
                return res.status(404).json({ message: "User not found." });
            }

            const updates = {};
            if (name) updates.name = name;
            if (address) updates.address = address;

            // Update Firestore
            await userRef.update(updates);

            // Optionally, update display name in Firebase Auth
            if (name) {
                await auth.updateUser(uid, { displayName: name });
            }

            res.status(200).json({ message: "User profile updated successfully.", updates });
        } catch (error) {
            console.error("Update Profile Error:", error);
            res.status(500).json({ message: "Server error while updating profile.", error: error.message });
        }
    }

    // Delete user profile by UID
    static async deleteProfile(req, res) {
        try {
            const { uid } = req.params;

            if (!uid) {
                return res.status(400).json({ message: "User ID (uid) is required." });
            }

            // Delete from Firebase Auth
            await auth.deleteUser(uid);

            // Delete from Firestore
            await db.collection('users').doc(uid).delete();

            res.status(200).json({ message: "User profile deleted successfully." });
        } catch (error) {
            console.error("Delete Profile Error:", error);
            res.status(500).json({ message: "Server error while deleting profile.", error: error.message });
        }
    }
}

export default userProfileController;
