
# 🌍 WanderLust

A full-stack travel listing web application where users can explore places, create listings, upload images, view locations on an interactive map, and share reviews.
WanderLust is an **end-to-end full-stack travel listing web application** inspired by platforms like Airbnb.

The application covers the complete development lifecycle — from **user authentication and listing management to image uploads, geolocation, reviews, validation, authorization, database management, and deployment**.

Users can explore travel destinations, create and manage property listings, upload images, view locations on an interactive map, and share reviews.



## 🔗 Live Demo

👉 [Visit WanderLust](https://wanderlust-vuwi.onrender.com/listings)

## ✨ Features

- 🔐 User Signup & Login
- 🔑 Authentication using Passport.js
- 🏠 Create, view, edit and delete listings
- 👤 Listing ownership authorization
- ⭐ Add and delete reviews
- 🛡️ Review author authorization
- 🖼️ Image upload using Cloudinary
- 🗺️ Interactive maps using MapTiler
- 📍 Location geocoding
- 💬 Flash messages
- ✅ Server-side validation using Joi
- ⚠️ Custom error handling
- 📱 Responsive design

## 🛠️ Tech Stack

### Frontend

- HTML
- CSS
- JavaScript
- EJS
- Bootstrap

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Authentication

- Passport.js
- Passport Local
- Express Session
- Connect Flash

### Other Technologies

- Joi
- Cloudinary
- MapTiler
- Multer
- Method Override

## 📁 Project Structure

```text
MajorProject/
│
├── controllers/
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
│
├── init/
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── public/
│   ├── css/
│   │   ├── rating.css
│   │   └── style.css
│   │
│   └── js/
│       ├── map.js
│       └── script.js
│
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── views/
│   ├── layouts/
│   │   ├── includes/
│   │   │   ├── flash.ejs
│   │   │   ├── footer.ejs
│   │   │   └── navbar.ejs
│   │   │
│   │   └── boilerplate.ejs
│   │
│   ├── listings/
│   │   ├── edit.ejs
│   │   ├── index.ejs
│   │   ├── new.ejs
│   │   └── show.ejs
│   │
│   ├── user/
│   │   ├── login.ejs
│   │   └── signup.ejs
│   │
│   └── Error.ejs
│
├── .env
├── .gitignore
├── app.js
├── cloudconfig.js
├── middleware.js
├── package.json
├── package-lock.json
├── schema.js
└── README.md
```



## 🗺️ Map Integration

WanderLust uses MapTiler to provide:

- Interactive maps
- Location-based listings
- Geocoding
- Map markers
- Listing popups

## ☁️ Image Upload

Listing images are uploaded using Multer and stored on Cloudinary.

This allows images to be stored separately from the application server.

## 🔐 Authentication & Authorization

Passport.js is used for user authentication.

Users can:

- Create an account
- Login and logout
- Create listings
- Edit their own listings
- Delete their own listings
- Add reviews
- Delete their own reviews

Authorization middleware prevents users from modifying listings or reviews that belong to other users.

## ✅ Validation & Error Handling

The application uses Joi for server-side validation.

It also includes:

- Custom Express errors
- Async error handling
- Flash messages
- Custom error page
- Protected routes

## 🚀 Deployment

The application is deployed using Render.

### Live Application

👉 [WanderLust Live Demo](https://wanderlust-vuwi.onrender.com/listings)

## 🔮 Future Improvements

- 🔎 Search and filtering
- ❤️ Wishlist functionality
- 📅 Booking system
- 💳 Payment integration
- 👤 User profile/dashboard
- 📧 Email notifications
- 📄 Pagination
- 📱 Improved mobile experience

## 👨‍💻 Author

**Shivam Raj**

GitHub: [Your GitHub Profile](https://github.com/shivam15009)

---

⭐ If you like this project, consider giving it a star!
