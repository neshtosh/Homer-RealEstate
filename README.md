Homer - Real Estate Website

Project Overview

Homer is a modern and visually appealing real estate website designed to help users find their dream homes with ease. The platform allows users to explore properties for sale and rent, filter listings based on preferences, and view detailed property information in an intuitive and user-friendly interface.

Purpose

The goal of Homer is to provide a seamless real estate browsing experience by offering advanced search, filtering options, and engaging visuals. Whether users are looking to buy, rent, or explore available properties, Homer ensures they have all the necessary details at their fingertips.

How to Run the Project

Prerequisites

Ensure you have Node.js and npm installed on your system.

Install React if not already installed.

Clone the repository:

git clone https://github.com/yourusername/homer.git
cd homer

Install dependencies:

npm install

Start the development server:

npm start

Open http://localhost:3000 in your browser.

Technologies Used

React.js - For the frontend UI components and state management.

CSS & Tailwind CSS - For styling and responsiveness.

Framer Motion - For smooth scroll animations.

MongoDB - For storing property listings and user profiles.

Express.js & Node.js - For backend API and server-side logic.

Mongoose - For database modeling and interactions.

Mapbox API - For property location mapping.

Cloudinary - For storing and managing property images.

Key Features and Functionalities

Landing Page with a visually engaging hero section and video background.

All Properties Page displaying listings in a bubble-style layout.

Property Filtering by location, price, and bedrooms.

Search Bar for quick property lookups.

Image Slider allowing users to browse multiple property images.

Pagination to display 20 properties per page.

User Profile Page with options to edit details, upload a profile picture, and manage listings.

Property Advice Section featuring real estate articles, opening in a full-page layout.

Responsive Design optimized for desktop and mobile.

Challenges Faced & How We Overcame Them

1. Dropdown Menu Overlapping Property Images

Issue: The filter dropdown was appearing behind property images.

Solution: Adjusted the z-index and ensured the dropdown was positioned correctly using Tailwind.

2. Aligning Icons with Text

Issue: Icons for bedrooms, bathrooms, and square footage were misaligned.

Solution: Used Flexbox and refined styling for better alignment.

3. Ensuring Smooth Scroll Animations

Issue: Sections were not animating correctly on scroll.

Solution: Implemented Framer Motion with precise trigger points.

4. Pagination Handling

Issue: Property listings needed efficient pagination.

Solution: Used state management in React and optimized the rendering process.

5. Handling Property Image Uploads

Issue: Images needed cloud storage to prevent excessive local storage usage.

Solution: Integrated Cloudinary for seamless image uploads and retrieval.

Conclusion

Homer is a fully functional real estate website designed to make property searching easy and visually engaging. With a well-structured UI, robust backend, and modern technologies, it provides an exceptional user experience. Future improvements may include user authentication, wishlist features, and AI-driven property recommendations.

🚀 Developed by Alex Gitonga


