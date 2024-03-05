const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const cloudinaryUpload = require("../modules/cloudinary.config");


router.post("/", cloudinaryUpload.single("image"), async (req, res) => {

  const fileUrl = req.file.path;

const insertNewAnime = `
    INSERT INTO "anime" (
        "title",
        "rating",
        "studio",
        "description",
        "image"
    )
        VALUES ($1, $2, $3, $4, $5)

`;

const newAnimeValues = [
req.body.title,
req.body.rating,
req.body.studio,
req.body.description,
fileUrl
];
  
console.log("dssdcsdc")
pool
  .query(insertNewAnime, newAnimeValues)
  .then(result => {
    res.sendStatus(201)
  })
  .catch((err) => {
    console.error('POST route failed:', err)
    res.sendStatus(500)
  })
 
});

  
module.exports = router;