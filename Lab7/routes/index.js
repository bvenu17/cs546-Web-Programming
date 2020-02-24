const postRoutes = require("./posts");
const animalRoutes = require("./animals");

const constructorMethod = app => {
  app.use("/posts", postRoutes);
  app.use("/animals", animalRoutes);

  app.use("*", (req, res) => {
    res.sendStatus(404);
  });
};

module.exports = constructorMethod;