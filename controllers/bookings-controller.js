const Listing = require("../models/Listing");
const Booking = require("../models/Booking");
const User = require("../models/User");
const mongoose = require("mongoose");

const createBooking = async (req, res, next) => {
  const { listingId, name, email, phone, checkIn, checkOut, bookingUser } =
    req.body;

  if (!listingId || !name || !email || !phone || !checkIn || !checkOut) {
    const error = {
      message: "Missing required fields.",
      code: 400,
    };
    return next(error);
  }

  const listing = await Listing.findById(listingId);
  if (!listing) {
    const error = {
      message: "Could not find a listing for the provided id.",
      code: 404,
    };
    return next(error);
  }

  const user = await User.findById(bookingUser);
  if (!user) {
    const error = {
      message: "Could not find a user for the provided id.",
      code: 404,
    };
    return next(error);
  }

  const booking = new Booking({
    listingId,
    name,
    email,
    phone,
    checkIn,
    checkOut,
    bookingUser,
  });

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await booking.save({ session: session });
    user.bookings.push(booking);
    await user.save({ session: session });
    await session.commitTransaction();
    session.endSession();
  } catch (err) {
    const error = {
      message: "Error creating booking.",
      code: 500,
    };
    return next(error);
  }
  res.json(booking.toObject({ getters: true })).status(201);
};

const getAllBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings.map((booking) => booking.toObject({ getters: true })));
  } catch (err) {
    const error = {
      message: "Error accessing bookings.",
      code: 404,
    };
    return next(error);
  }
};

const getBookingsByUserId = async (req, res, next) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId).populate("bookings");
    if (!user) {
      const error = {
        message: "Could not find a user for the provided id.",
        code: 404,
      };
      return next(error);
    }
    res.json(
      user.bookings.map((booking) => booking.toObject({ getters: true }))
    );
  } catch (err) {
    const error = {
      message: "Error accessing bookings.",
      code: 404,
    };
    return next(error);
  }
};

const removeBooking = async (req, res, next) => {
  const id = req.params.id;

  try {
    const booking = await Booking.findById(id).populate("bookingUser");
    if (!booking) {
      const error = {
        message: "Could not find a booking for the provided id.",
        code: 404,
      };
      return next(error);
    }

    if (booking.bookingUser._id !== req.userId.id) {
      const error = {
        message: "Unauthorized.",
        code: 401,
      };
      return next(error);
    }

    const session = await mongoose.startSession();
    session.startTransaction();
    await booking.bookingUser.bookings.pull(booking);
    await booking.bookingUser.save({ session: session });
    await booking.remove({ session: session });
    await session.commitTransaction();
    session.endSession();
  } catch (err) {
    const error = {
      message: "Error removing booking.",
      code: 500,
    };
    return next(error);
  }
  res.json({ message: "Booking removed." }).status(200);
};

module.exports = {
  createBooking,
  getBookingsByUserId,
  removeBooking,
  getAllBookings,
};
