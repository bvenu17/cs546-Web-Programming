const express = require('express');
const app = express();
const aboutRoute = require("./routes/about");
const storyRoute = require("./routes/story");
const educationRoute = require("./routes/education");

app.use("/about",aboutRoute);
app.use("/story",storyRoute);
app.use("/education",educationRoute);


const PORT =process.env.PORT||3000;


app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });



app.listen(PORT, () => {console.log(`Server started at ${PORT}`);})

