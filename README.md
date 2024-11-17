# Rent It: an Airbnb Inspired Web App

This project integrates a React-based frontend with a Node.js and Express.js backend to provide an Airbnb-inspired platform. It allows users to view property listings, navigate detailed pages for each property, book property.

## Features

1. **Backend**:
   - Built with Node.js and Express.js.
   - Serves static JSON data for property listings.
   - Includes API endpoints for fetching listings and creating bookings.

2. **Frontend**:
   - Developed using React with Vite.
   - Implements `react-router-dom` for navigation between pages.
   - Includes pages for:
     - Homepage (`/`)
     - Listing Details (`/listings/:id`)
     - Booking Page (`/book/:id`)

3. **Routing and Navigation**:
   - Backend routes:
     - `GET /api/listings`: Fetch all property listings.
     - `GET /api/listings/:id`: Fetch details of a specific listing.
     - `POST /api/bookings`: Submit a booking.
   - Frontend routes:
     - `/`: Displays the homepage with all listings.
     - `/listings/:id`: Displays detailed information about a specific property.
     - `/book/:id`: Redirects to a booking form.

## Instructions for Running the Project

### Frontend
1. Navigate to the frontend directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. The application will be available at `http://localhost:5173` (default Vite port).

### Backend
1. Navigate to the backend directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```
4. The API will be available at `http://localhost:3000`.

## Requirements

- Node.js (v16 or higher recommended)
- npm (v8 or higher recommended)
