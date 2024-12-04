const router = require("express").Router();
const bookingController = require("../controllers/bookings-controller");
const jwt = require("../middlewares/jwt");

router.get("/", bookingController.getAllBookings);
router.get("/:id", bookingController.getBookingsByUserId);

router.use(jwt);

router.post("/", bookingController.createBooking);
router.delete("/:id", bookingController.removeBooking);

module.exports.bookingRouter = router;
