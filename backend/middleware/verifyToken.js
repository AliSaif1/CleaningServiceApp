import { auth } from '../firebase.js';

const verifyToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "No token provided." });
    }

    const idToken = authHeader.split(" ")[1];

    try {
        const decodedToken = await auth.verifyIdToken(idToken);
        req.user = decodedToken;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token." });
    }
};

export default verifyToken;
