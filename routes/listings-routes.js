const router = require("express").Router();
const listingController = require("../controllers/listings-controller");
const FileUpload = require("../middlewares/file-upload");
const { check } = require("express-validator");
const jwt = require("../middlewares/jwt");

router.get("/", listingController.getAllListings);

router.get("/search", listingController.searchListings);

router.get("/:id", listingController.getListingById);

router.use(jwt);
//only admin is allowed

router.post(
  "/",
  FileUpload.single("img"),
  [
    check("title").notEmpty(),
    check("location").notEmpty(),
    check("type").notEmpty(),
    // check("info.guests").notEmpty(),
    // check("info.bedrooms").notEmpty(),
    // check("info.bathrooms").notEmpty(),
    check("pricePerNight").notEmpty(),
    check("rating").notEmpty(),
  ],
  listingController.createListing
);

router.delete("/:id", listingController.RemoveListing);

module.exports.listingRouter = router;
