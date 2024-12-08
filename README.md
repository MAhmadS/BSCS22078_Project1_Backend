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

     - Listing Routes:

       - `GET /api/listings/`: Fetch all property listings.
       - `GET /api/listings/:id`: Fetch details of a specific listing.
       - `GET /api/listings/search?query:<location>`: Fetch all listings with specific location.

       - Secure Routes:
         - `POST /api/listings/`: Add a new listing.
         - `DELETE /api/listings/:id`: Remove an existing listing.

     - Booking Routes

       - `GET /api/bookings/`: Fetch all bookings.
       - `GET /api/bookings/:id`: Fetch a specific booking.

       - Secure Routes
         - `POST /api/bookings/`: Submit a booking.
         - `DELETE /api/bookings/:id`: Remove an existing booking.

     - Authentication Routes
       - `POST /api/auth/login`: Submit Login
       - `POST /api/auth/register`: Submit Signup

   - Frontend routes:
     - `/`: Displays the homepage with all listings.
     - `/listings/:id`: Displays detailed information about a specific property.
     - `/book/:id`: Redirects to a booking form.

   **Schemas**:

   - User:

   ```javascript
   {
     avatar: { type: String, required: true },
     name: { type: String, required: true },
     email: { type: String, required: true },
     password: { type: String, required: true },
     role: { type: String, required: true },
     bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }],
     listings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Listing" }],
   };
   ```

   `Avatar` can have values `"1"` ,`"2"` ,`"3"` ,`"4"` ,`"5"`. These values corresponds to ${Avatar}.jpg in the Frontend.

   - Listing:

   ```javascript
   {
     img: { type: String, required: true },
     title: { type: String, required: true },
     location: { type: String, required: true },
     type: { type: String, required: true },
     info: { guests: Number, bedrooms: Number, bathrooms: Number },
     pricePerNight: { type: String, required: true },
     rating: { type: String, required: true },
     creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
     }
   ```

   - Booking:

   ```javascript
   {
     listingId: { type: mongoose.Schema.Types.ObjectId, ref: "Listing", required: true },
     name: { type: String, required: true },
     email: { type: String, required: true },
     phone: { type: String, required: true },
     checkIn: { type: Date, required: true },
     checkOut: { type: Date, required: true },
     bookingUser: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
     }
   ```

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
   - For Development
   ```bash
   npm run dev
   ```
    - For Production
   ```bash
   npm start
   ```

4. The API will be available at `http://localhost:3000`.

## Requirements

- Node.js (v16 or higher recommended)
- npm (v8 or higher recommended)
