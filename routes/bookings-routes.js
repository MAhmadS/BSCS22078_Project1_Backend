const router = require("express").Router();
const bookingController = require("../controllers/bookings-controller");
const jwt = require("../middlewares/jwt");
const { check } = require("express-validator");

router.get("/", bookingController.getAllBookings);
router.get("/:id", bookingController.getBookingsByUserId);

router.use(jwt);

router.post(
  "/",
  [
    check("listingId").notEmpty(),
    check("name").notEmpty(),
    check("email").notEmpty(),
    check("phone").notEmpty(),
    check("checkIn").notEmpty(),
    check("checkOut").notEmpty(),
  ],
  bookingController.createBooking
);
router.delete("/:id", bookingController.removeBooking);

module.exports.bookingRouter = router;