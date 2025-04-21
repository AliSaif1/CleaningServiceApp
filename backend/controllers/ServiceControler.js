import { db } from '../firebase.js'; 

class ServiceController {
    static async addService(req, res) {
        try {
            const {
                serviceType,
                description,
                price_per_hour,
                duration,
                status = 'active'
            } = req.body;

            // Basic validation
            if (!serviceType || !description || !price_per_hour || !duration) {
                return res.status(400).json({ message: 'All required fields must be provided.' });
            }

            const allowedTypes = ['backyard', 'house', 'commercial', 'moving', 'electrical', 'plumbing'];
            if (!allowedTypes.includes(serviceType)) {
                return res.status(400).json({ message: 'Invalid service type.' });
            }

            // Add to Firestore
            const serviceRef = await db.collection('services').add({
                serviceType,
                description,
                price_per_hour,
                status,
                duration,
                createdAt: new Date()
            });

            return res.status(201).json({ message: 'Service added successfully.', id: serviceRef.id });
        } catch (error) {
            console.error("Error adding service:", error);
            return res.status(500).json({ message: 'Internal server error.', error: error.message });
        }
    }
}

export default ServiceController;
