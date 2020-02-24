const dbConnection = require("../config/mongoConnection");
const data = require("../data/");
const users = data.users;
const posts = data.posts;

async function main() {
  const db = await dbConnection();
  await db.dropDatabase();

  const phil = await users.addUser("hello", "Barresi");
  const id = phil._id;
  await posts.addPost("My web class", "I am awesome","Mesut Ozil", id);
  await posts.addPost(
    "Using the seed",
    "We use the seed to have some initial data so we can just focus on servers this week",
    "vedadnya",
    id
  );

  await posts.addPost(
    "Using routes",
    "The purpose of today is to simply look at some GET routes",
    "shreya",
    id
  );

  console.log("Done seeding database");

  await db.serverConfig.close();
}

main();