const express = require("express");
const app = express();

const listingsData = [
  {
    id: 1,
    img: "/imgs/card_imgs/1.webp",
    title: "Mashobra",
    location: "India",
    type: "Entire Home",
    info: { guests: 5, bedrooms: 3, bathrooms: 2 },
    pricePerNight: "$190",
    rating: "3",
  },
  {
    id: 2,
    img: "/imgs/card_imgs/2.webp",
    title: "Santorini",
    location: "Greece",
    type: "Villa",
    info: { guests: 4, bedrooms: 2, bathrooms: 2 },
    pricePerNight: "$250",
    rating: "4.5",
  },
  {
    id: 3,
    img: "/imgs/card_imgs/3.webp",
    title: "Kyoto",
    location: "Japan",
    type: "Traditional House",
    info: { guests: 3, bedrooms: 1, bathrooms: 1 },
    pricePerNight: "$130",
    rating: "4.7",
  },
  {
    id: 4,
    img: "/imgs/card_imgs/4.webp",
    title: "Reykjavik",
    location: "Iceland",
    type: "Apartment",
    info: { guests: 2, bedrooms: 1, bathrooms: 1 },
    pricePerNight: "$170",
    rating: "4.8",
  },
  {
    id: 5,
    img: "/imgs/card_imgs/5.webp",
    title: "Cape Town",
    location: "South Africa",
    type: "Beach House",
    info: { guests: 6, bedrooms: 4, bathrooms: 3 },
    pricePerNight: "$300",
    rating: "5",
  },
  {
    id: 6,
    img: "/imgs/card_imgs/6.webp",
    title: "Bali",
    location: "Indonesia",
    type: "Treehouse",
    info: { guests: 2, bedrooms: 1, bathrooms: 1 },
    pricePerNight: "$80",
    rating: "4.2",
  },
  {
    id: 7,
    img: "/imgs/card_imgs/7.webp",
    title: "Paris",
    location: "France",
    type: "Studio",
    info: { guests: 2, bedrooms: 1, bathrooms: 1 },
    pricePerNight: "$150",
    rating: "4.3",
  },
  {
    id: 8,
    img: "/imgs/card_imgs/8.webp",
    title: "Cappadocia",
    location: "Turkey",
    type: "Cave House",
    info: { guests: 4, bedrooms: 2, bathrooms: 2 },
    pricePerNight: "$200",
    rating: "4.6",
  },
  {
    id: 9,
    img: "/imgs/card_imgs/9.webp",
    title: "Bora Bora",
    location: "French Polynesia",
    type: "Overwater Bungalow",
    info: { guests: 2, bedrooms: 1, bathrooms: 1 },
    pricePerNight: "$500",
    rating: "5",
  },
];

app.use(express.json());

app.get("/api/listings", (req, res) => {
  res.send(JSON.stringify(listingsData)).status(200);
});

app.get("/api/listings/search", (req, res) => {
  const query = req.query.query;
  const listingData = listingsData.filter((data) =>
    data.location.toLowerCase().includes(query.toLowerCase())
  );
  res.send(JSON.stringify(listingData)).status(200);
});

app.get("/api/listings/:id", (req, res) => {
  const id = req.params.id;
  const listingData = listingsData.filter((listing) => listing.id == id);
  res.send(JSON.stringify(listingData)).status(200);
});

app.post("/api/bookings", (req, res) => {
  const newListing = {id: listingsData.length + 1, ...req.body};
  listingsData.push(newListing);
  console.log(listingsData);
  res.send(JSON.stringify(newListing)).status(200);
});

app.listen(5000, () => {
  console.log("Server is running on port 8080");
});
