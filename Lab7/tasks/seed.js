const dbConnection = require('../config/mongoConnection');
const data = require("../data/");
const animals = data.animals;
const posts = data.posts;

 const  main = async () => {
  const db = await dbConnection();
  await db.dropDatabase();

  const phil = await animals.create("Spurs", "Doogs ");
  const id = phil._id;
  await posts.addPost("First name", "Ozil","I play for arsenal", [], id);
  await posts.addPost(
    "Using the seed",
    "We use the seed to have some sinitial data so we can just focus on servers this week",
    "wdsfs",
    [],
    id
  );

  await posts.addPost(
    "Using routes",
    "The purpose of today is to simply look at some GET routes",
    "edsfsfsdfs",
    [],
    id
  );

  console.log("Done seeding database");
  await db.serverConfig.close();
};

main().catch(console.log);