const express = require('express');
const app = express();
const router = express.Router();


const obj = {
  name: "Venugopal Balaji",
  cwid: "10446195",
  biography: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. (\n) Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  favoriteShows: ["Game of thrones", "friends", "silicon valley", "sacred games"],
  hobbies: ["code", "football", "music"]
}


router.get('/',  async (req,res) => {
    res.json(obj);
});

module.exports = router;