const express = require('express');
const app = express();
const router = express.Router();


const education = [
    {
      "schoolName": "Stevens Institute of Technology",
      "degree": "Masters in Computer Science",
      "favoriteClass": "Web Programming",
      "favoriteMemory": "no favourite memory till now"
    },
    {
      "schoolName": "SRM University",
      "degree": "Bachelors in Computer Science",
      "favoriteClass": "Mobile Application Development",
      "favoriteMemory": "no favourite memory till now"
    },
    {
      "schoolName": "Chettinad Vidyashram",
      "degree": "High School",
      "favoriteClass": "None",
      "favoriteMemory": "Nothing"
    }
]


router.get('/',  async (req,res) => {
    res.json(education);
});

module.exports = router;