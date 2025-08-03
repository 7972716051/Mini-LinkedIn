# Mini-LinkedIn
A mini LinkedIn-style web application where users can register, log in, create public posts, view a shared feed, and manage their profile.

📂 Tech Stack
Part	Tech Used
Frontend	React, React Router, Tailwind CSS (optional)
Backend	Node.js, Express
Database	MongoDB (with Mongoose)

🔧 Features
✅ User registration with validation

✅ Secure login with JWT

✅ Public post feed (text posts)

✅ Authenticated user profile page with their posts

✅ Persistent session using JWT in localStorage

📁 Project Structure
Edit
community/
├── client/              # React Frontend
│   ├── src/
│   │   ├── components/  # Navbar, PostCard etc.
│   │   ├── pages/       # Feed.jsx, Profile.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── index.html
├── server/              # Express Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── index.js
│   └── package.json
📦 Installation and Setup
1. Clone the repo
Edit
git clone https://github.com/yourusername/mini-linkedin.git
cd mini-linkedin
2. Backend Setup (server/)

Edit
cd server
npm install
➕ Configure MongoDB:
Create a .env file in server/ and add:

env

PORT=5000
MONGO_URI=mongodb://localhost:27017/mini-linkedin
JWT_SECRET=your_jwt_secret
🚀 Start Backend:

Edit
npm run dev
Backend runs on: http://localhost:5000

3. Frontend Setup (client/)

Edit
cd ../client
npm install
🚀 Start Frontend:
Edit
npm run dev
Frontend runs on: http://localhost:5173

🧑‍💻 How It Works
User Registration & Login

Data is sent to the backend via Axios.

Passwords are hashed using bcrypt.

A JWT is issued on login and saved in localStorage.

Public Feed

Authenticated users can create and view posts.

Posts are displayed with author name and timestamp.

Profile Page

Shows only logged-in user’s posts.

Routing

react-router-dom handles navigation between Home, Login, Register, Feed, and Profile.

🖼️ Sample Output
Home Page – Welcome screen

Login/Register – Auth forms

Feed – All users' posts

Profile – Only your posts

Navbar – Navigation + logout

🛡️ Security
JWT token validation on protected routes

Passwords hashed with bcrypt

CORS enabled only for frontend domain

🌐 Deployment Suggestion
Frontend: Vercel / Netlify


🙋‍♀️ Author
Vaishnavi Salgare

Project created for Ciaan Cybertech Mini Project Submission (August 2025)



Backend: Render / Railway

Database: MongoDB Atlas

