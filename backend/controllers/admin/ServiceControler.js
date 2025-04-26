import { db } from '../../firebase.js';

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

            if (!serviceType || !description || !price_per_hour || !duration) {
                return res.status(400).json({ message: 'All required fields must be provided.' });
            }

            const allowedTypes = ['backyard', 'house', 'commercial', 'moving', 'electrical', 'plumbing'];
            if (!allowedTypes.includes(serviceType)) {
                return res.status(400).json({ message: 'Invalid service type.' });
            }

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

    static async updateService(req, res) {
        try {
            const { id } = req.params;
            const updatedData = req.body;

            const serviceRef = db.collection('services').doc(id);
            const doc = await serviceRef.get();

            if (!doc.exists) {
                return res.status(404).json({ message: 'Service not found.' });
            }

            await serviceRef.update(updatedData);
            return res.status(200).json({ message: 'Service updated successfully.' });
        } catch (error) {
            console.error("Error updating service:", error);
            return res.status(500).json({ message: 'Internal server error.', error: error.message });
        }
    }

    static async deleteService(req, res) {
        try {
            const { id } = req.params;

            const serviceRef = db.collection('services').doc(id);
            const doc = await serviceRef.get();

            if (!doc.exists) {
                return res.status(404).json({ message: 'Service not found.' });
            }

            await serviceRef.delete();
            return res.status(200).json({ message: 'Service deleted successfully.' });
        } catch (error) {
            console.error("Error deleting service:", error);
            return res.status(500).json({ message: 'Internal server error.', error: error.message });
        }
    }

    static async getAllServices(req, res) {
        try {
            const snapshot = await db.collection('services').orderBy('createdAt', 'desc').get();
            
            if (snapshot.empty) {
                return res.status(200).json({ message: 'No services found.', services: [] });
            }
    
            const services = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
    
            return res.status(200).json({ services });
        } catch (error) {
            console.error("Error fetching services:", error);
            return res.status(500).json({ message: 'Internal server error.', error: error.message });
        }
    }    
}

export default ServiceController;
