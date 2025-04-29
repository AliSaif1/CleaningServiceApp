import { db } from "../firebase";
import { Timestamp } from "firebase-admin/firestore";

class NotificationsController {
  // Individual notification
  static async createNotification({ userId, title, message, link, type }) {
    try {
      const validTypes = ['alert', 'reminder', 'info', 'warning'];
      if (!validTypes.includes(type)) {
        throw new Error('Invalid notification type');
      }

      const newNotification = {
        userId,
        title,
        message,
        link,
        type,
        status: 'unread',
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
        isGlobal: false
      };

      const docRef = await db.collection('notifications').add(newNotification);
      return { id: docRef.id, ...newNotification };
    } catch (error) {
      console.error("Error creating user notification:", error);
      throw error;
    }
  }

  // Broadcast notification to all users
  static async createGlobalNotification({ title, message, link, type }) {
    try {
      const validTypes = ['alert', 'reminder', 'info', 'warning'];
      if (!validTypes.includes(type)) {
        throw new Error('Invalid notification type');
      }

      const globalNotification = {
        title,
        message,
        link,
        type,
        createdAt: Timestamp.now(),
        isGlobal: true
      };

      const docRef = await db.collection('global_notifications').add(globalNotification);
      return { id: docRef.id, ...globalNotification };
    } catch (error) {
      console.error("Error creating global notification:", error);
      throw error;
    }
  }

  // Get both personal and global notifications for a user
  static async getUserNotifications(userId) {
    try {
      const userNotifsSnap = await db.collection('notifications')
        .where('userId', '==', userId)
        .orderBy('createdAt', 'desc')
        .get();

      const globalSnap = await db.collection('global_notifications')
        .orderBy('createdAt', 'desc')
        .get();

      const personal = userNotifsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      const global = globalSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      return [...personal, ...global]; // Combine both
    } catch (error) {
      console.error("Error fetching notifications:", error);
      throw error;
    }
  }

  // Mark user-specific notification as read
  static async markAsRead(notificationId) {
    try {
      const ref = db.collection('notifications').doc(notificationId);
      await ref.update({
        status: 'read',
        updatedAt: Timestamp.now(),
      });
      return { success: true };
    } catch (error) {
      console.error("Error updating notification:", error);
      throw error;
    }
  }

  static async deleteNotification(notificationId) {
    try {
      await db.collection('notifications').doc(notificationId).delete();
      return { success: true };
    } catch (error) {
      console.error("Error deleting notification:", error);
      throw error;
    }
  }
}

export default NotificationsController;
