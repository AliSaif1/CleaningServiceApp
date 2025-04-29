import { db } from "../firebase";
import { Timestamp } from "firebase-admin/firestore";
import { sendFCMNotification } from "../utils/fcm"; // Implement this utility

class ChatController {
  // 1. User initiates chat
  static async initiateChat(req, res) {
    try {
      const { userId, message } = req.body;
      if (!userId || !message) {
        return res.status(400).json({ error: "Missing userId or message" });
      }

      // Create chat document
      const chatRef = await db.collection("chats").add({
        userId,
        isLocked: false,
        lockedByAdminId: null,
        createdAt: Timestamp.now(),
        lastUpdated: Timestamp.now(),
      });

      // Add initial message
      await chatRef.collection("messages").add({
        senderId: userId,
        text: message,
        createdAt: Timestamp.now(),
      });

      // Notify all admins
      const adminsSnap = await db.collection("admins").get();
      const tokens = adminsSnap.docs.map(doc => doc.data().fcmToken).filter(Boolean);

      for (const token of tokens) {
        await sendFCMNotification(token, "New Chat Initiated", "A new user chat has started.");
      }

      return res.status(201).json({ message: "Chat initiated successfully", chatId: chatRef.id });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to initiate chat" });
    }
  }

  // 2. Admin takes the chat
  static async takeChat(req, res) {
    try {
      const { chatId } = req.params;
      const { adminId } = req.body;

      const chatRef = db.collection("chats").doc(chatId);
      const chatDoc = await chatRef.get();

      if (!chatDoc.exists) {
        return res.status(404).json({ error: "Chat not found" });
      }

      const chatData = chatDoc.data();

      if (chatData.isLocked) {
        return res.status(403).json({ error: "Chat already taken by another admin" });
      }

      await chatRef.update({
        isLocked: true,
        lockedByAdminId: adminId,
        lastUpdated: Timestamp.now(),
      });

      return res.status(200).json({ message: "You have taken this chat" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to take chat" });
    }
  }

  // 3. Admin sends a message (as Support)
  static async sendAdminMessage(req, res) {
    try {
      const { chatId } = req.params;
      const { adminId, message } = req.body;

      const chatRef = db.collection("chats").doc(chatId);
      const chatDoc = await chatRef.get();

      if (!chatDoc.exists) {
        return res.status(404).json({ error: "Chat not found" });
      }

      const chatData = chatDoc.data();

      if (chatData.lockedByAdminId !== adminId) {
        return res.status(403).json({ error: "You are not authorized to reply to this chat" });
      }

      await chatRef.collection("messages").add({
        senderId: "support",
        adminId,
        text: message,
        createdAt: Timestamp.now(),
      });

      await chatRef.update({ lastUpdated: Timestamp.now() });

      return res.status(200).json({ message: "Message sent" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to send message" });
    }
  }

  // 4. User sends a message
  static async sendUserMessage(req, res) {
    try {
      const { chatId } = req.params;
      const { userId, message } = req.body;

      const chatRef = db.collection("chats").doc(chatId);
      const chatDoc = await chatRef.get();

      if (!chatDoc.exists) {
        return res.status(404).json({ error: "Chat not found" });
      }

      await chatRef.collection("messages").add({
        senderId: userId,
        text: message,
        createdAt: Timestamp.now(),
      });

      await chatRef.update({ lastUpdated: Timestamp.now() });

      return res.status(200).json({ message: "Message sent" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to send message" });
    }
  }

  // 5. Get messages for a chat
  static async getMessages(req, res) {
    try {
      const { chatId } = req.params;

      const messagesSnap = await db.collection("chats").doc(chatId).collection("messages").orderBy("createdAt").get();

      const messages = messagesSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      return res.status(200).json(messages);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to retrieve messages" });
    }
  }

  // 6. List chats for an admin or user
  static async listChats(req, res) {
    try {
      const { role, id } = req.query; // role = 'admin' or 'user'

      let query;
      if (role === "admin") {
        query = db.collection("chats").where("lockedByAdminId", "==", id);
      } else if (role === "user") {
        query = db.collection("chats").where("userId", "==", id);
      } else {
        return res.status(400).json({ error: "Invalid role" });
      }

      const chatsSnap = await query.orderBy("lastUpdated", "desc").get();
      const chats = chatsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      return res.status(200).json(chats);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to list chats" });
    }
  }
}

export default ChatController;
