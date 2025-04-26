import { db } from '../../firebase.js';

class bookingController {
    // Book a Cleaning Service
    static async bookService(req, res) {
        try {
            const {
                userId,
                serviceIds,
                bookingDate,
                estimatedDuration,
                address,
                contactNumber,
                totalPrice,
                specialInstructions
            } = req.body;

            if (!userId || !serviceIds || !bookingDate || !estimatedDuration || !address || !contactNumber || !totalPrice) {
                return res.status(400).json({ message: "All required fields must be provided." });
            }

            const bookingData = {
                userId,
                serviceIds,
                bookingDate: new Date(bookingDate),
                estimatedDuration,
                status: 'pending',  // Default status
                address,
                contactNumber,
                totalPrice,
                specialInstructions: specialInstructions || '',
                createdAt: new Date()
            };

            const bookingRef = await db.collection('bookings').add(bookingData);

            res.status(201).json({
                message: "Service booked successfully.",
                bookingId: bookingRef.id
            });
        } catch (error) {
            console.error("Booking Error:", error);
            res.status(500).json({ message: "Server error while booking service.", error: error.message });
        }
    }

    // View Booked Services (for a specific user)
    static async viewBookedServices(req, res) {
        try {
            const { userId } = req.params;

            if (!userId) {
                return res.status(400).json({ message: "User ID is required." });
            }

            const bookingsSnapshot = await db.collection('bookings')
                .where('userId', '==', userId)
                .orderBy('createdAt', 'desc')
                .get();

            const bookings = [];
            bookingsSnapshot.forEach(doc => {
                bookings.push({ id: doc.id, ...doc.data() });
            });

            res.status(200).json({ bookings });
        } catch (error) {
            console.error("View Bookings Error:", error);
            res.status(500).json({ message: "Server error while fetching booked services.", error: error.message });
        }
    }

    // Update Booking (modify or cancel)
    static async updateBooking(req, res) {
        try {
            const { bookingId } = req.params;
            const { status, bookingDate, estimatedDuration, address, contactNumber, specialInstructions } = req.body;

            if (!bookingId) {
                return res.status(400).json({ message: "Booking ID is required." });
            }

            const bookingRef = db.collection('bookings').doc(bookingId);
            const bookingDoc = await bookingRef.get();

            if (!bookingDoc.exists) {
                return res.status(404).json({ message: "Booking not found." });
            }

            const updates = {};
            if (status) {
                // Validate status
                const allowedStatuses = ['pending', 'confirmed', 'completed', 'cancelled'];
                if (!allowedStatuses.includes(status)) {
                    return res.status(400).json({ message: "Invalid booking status." });
                }
                updates.status = status;
            }
            if (bookingDate) updates.bookingDate = new Date(bookingDate);
            if (estimatedDuration) updates.estimatedDuration = estimatedDuration;
            if (address) updates.address = address;
            if (contactNumber) updates.contactNumber = contactNumber;
            if (specialInstructions) updates.specialInstructions = specialInstructions;

            if (Object.keys(updates).length === 0) {
                return res.status(400).json({ message: "At least one field must be provided to update." });
            }

            await bookingRef.update(updates);

            res.status(200).json({ message: "Booking updated successfully." });
        } catch (error) {
            console.error("Update Booking Error:", error);
            res.status(500).json({ message: "Server error while updating booking.", error: error.message });
        }
    }
}

export default bookingController;
