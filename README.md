# React + Vite

# 🍽️ Restaurant Management Website

Welcome to **Flavory** – a full-featured restaurant management website built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). This project streamlines food item browsing, purchasing, and management for both users and admins.

🔗 **Live Website:** [https://client-site-restaurant.web.app/](https://client-site-restaurant.web.app/)  
🌐 **Server Deployment:** [https://server-site-restaurant.vercel.app/](https://server-site-restaurant.vercel.app/)

---

## 📌 Purpose

This project is built to:
- Manage food items (add, update, delete).
- Let users explore and purchase food.
- Enable admin/users to manage their added or ordered foods.
- Provide a smooth, mobile-responsive, and user-friendly restaurant web experience.

---

## 🛠️ Technologies Used

### Frontend:
- React.js
- React Router DOM
- Tailwind CSS
- DaisyUI
- Firebase Authentication
- Axios
- JWT
- SweetAlert2 / React Toastify
- Framer Motion
- Lightbox (e.g., yet-another-react-lightbox)

### Backend:
- Node.js
- Express.js
- MongoDB
- CORS
- Dotenv
- JWT
- Mongoose

---

## 🔐 Authentication Features

- Email/Password authentication via Firebase
- Google OAuth
- JWT token-based route protection
- User login/logout, registration with validation
- Profile image with dropdown menu for navigation

---

## 🔑 Key Features

### ✅ Public Pages:
- **Home Page**: Banner, top-selling foods, and additional sections
- **All Foods**: All available foods with search and filter functionality
- **Single Food**: Details with purchase count and buy option
- **Gallery**: 10+ image lightbox gallery with animation

### 🔒 Private Pages:
- **Add Food**: Logged-in users can add food with form
- **My Foods**: Shows only the user’s added food, update option
- **My Orders**: Shows user-specific purchases with delete option
- **Purchase Page**: Food buying form (quantity control, validation)

---

## ⚙️ Advanced Functionalities

- 🔍 Search by food name
- 🧮 Food quantity control (no over-buying or buying when unavailable)
- 🔒 Restriction on purchasing own food items
- 🌗 Theme toggler (light/dark mode)
- 🧭 Route protection using JWT
- 🧾 Toast & Alert notifications (No browser alert)
- 📸 Lightbox gallery with smooth animation
- 📄 Pagination in All Foods (9 items per page, backend based)
- 🔁 Spinner for loading state
- 🔀 Filtering and server-side querying using MongoDB `$and` / `$or`
