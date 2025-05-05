# CleanMate

CleanMate is a full-stack web and mobile application built to connect users with trusted cleaning professionals for residential and commercial cleaning services. It simplifies the booking, scheduling, and payment process for users while helping cleaners manage jobs, availability, and earnings efficiently.

## 🚀 Project Overview

CleanMate bridges the gap between **service seekers** and **cleaning professionals**.

It allows **users** to:
- Book cleaning services for home or office
- View cleaner profiles and ratings
- Schedule one-time or recurring appointments
- Track service status and history
- Chat and plan

**Cleaners** can:
- Set availability and accept jobs
- Manage upcoming appointments
- Track earnings
- Communicate with clients

**Admins** can:
- Manage users and cleaners
- Track bookings and revenue
- Handle reports and disputes

## 📱 Platform

- **Mobile App**: Built with React Native
- **Web Admin Panel**: Built with React.js (MERN Stack)
- **Back-end**: Node.js + Express
- **Database**: Firebase Firestore + Storage

## 🔑 Core Functionalities

### 👤 Authentication & User Roles
- Sign Up & Login (Cleaners, Users, Admin)
- Email OTP Verification
- Profile Setup and Management
- Role-based Dashboard Access

### 🧹 Booking Module
- Book One-Time or Recurring Services
- Select Date, Time, and Type of Cleaning
- Assign Available Cleaner Automatically
- Cancel/Reschedule Bookings

### 📅 Schedule & Availability
- Cleaners Set Weekly Availability
- Real-time Booking Slots Management
- View Upcoming and Past Appointments

### 💬 Communication
- In-App Messaging Between User and Cleaner
- Booking Confirmation and Reminder Notifications

### 💰 Payment Integration
- Advance and Subscription-Based Payments
- Stripe Payment Gateway Integration
- View Transaction History
- Cleaner Payout Requests

### 🛠 Admin Features
- View and Manage All Bookings
- Approve or Block Cleaners
- Resolve Disputes
- Revenue and Performance Analytics

## 🧠 Technologies Used

| Layer                | Tech Stack                                   |
|----------------------|-----------------------------------------------|
| **Frontend (Web)**   | React.js, Tailwind CSS                        |
| **Frontend (Mobile)**| React Native                                  |
| **Backend**          | Node.js, Express.js                           |
| **Database**         | Firebase (Bookings, Payments, Users), Firebase Firestore (Chats) |
| **Authentication**   | Firebase Auth + JWT                           |
| **Payments**         | Stripe                                        |
| **Notifications**    | Firebase Cloud Messaging (FCM)                |

## 🛠 Installation & Setup

### Prerequisites
- Node.js
- npm or yarn
- MongoDB instance (local or cloud)
- Firebase Project
- Stripe Account

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/cleanmate-app.git
cd cleanmate-app
```

### 2. Install Backend Dependencies

```bash
npm install
# or
yarn install
```

### 3. Create Environment File

Create a `.env` file in the root directory with the following:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
FIREBASE_API_KEY=your_firebase_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### 4. Start the Backend Server

```bash
npm run dev
```

### 5. Run the Mobile App

```bash
cd mobile
npm install
npx react-native run-android
# or
npx react-native run-ios
```

## 👨‍💻 Author

- **Ali Saif** – [LinkedIn](https://www.linkedin.com/in/ali-saif-ba5159223/)
