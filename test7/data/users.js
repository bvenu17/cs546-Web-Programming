const mongoCollections = require('../config/mongoCollections');
const users = mongoCollections.users;
const posts = require('./posts');

const uuid = require('uuid/v4');

let exportedMethods = {
  async getAllUsers() {
    const userCollection = await users();
    const userList = await userCollection.find({}).toArray();
    if (!userList) throw 'No users in system!';
    return userList;
  },
  // This is a fun new syntax that was brought forth in ES6, where we can define
  // methods on an object with this shorthand!
  async getUserById(id) {
    const userCollection = await users();
    const user = await userCollection.findOne({_id: id});
    if (!user) throw 'User not found';
    return user;
  },
  async addUser(name, animalType) {
    const userCollection = await users();

    let newUser = {
      name: name,
      animalType: animalType,
      _id: uuid(),
      posts: []
    };

    const newInsertInformation = await userCollection.insertOne(newUser);
    if (newInsertInformation.insertedCount === 0) throw 'Insert failed!';
    return await this.getUserById(newInsertInformation.insertedId);
  },
  async removeUser(id) {
    const userCollection = await users();
    const deletedObj = await this.getUserById(id)

    const deletionInfo = await userCollection.removeOne({_id: id});
    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete user with id of ${id}`;
    }

    //await posts.removePost(deletedObj.posts.id);

    const retObj = {
      deleted: true,
      data:deletedObj
    }
    return retObj;
  },
  async updateUser(id, updatedUser) {
    const user = await this.getUserById(id);
    console.log(user);

    let userUpdateInfo = {
      name: updatedUser.newName,
      animalType: updatedUser.newType
    };

    const userCollection = await users();
    const updateInfo = await userCollection.updateOne({_id: id}, {$set: userUpdateInfo});
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Update failed';

    return await this.getUserById(id);
  },
  async addPostToUser(userId, postId, postTitle) {
    let currentUser = await this.getUserById(userId);
    console.log(currentUser);

    const userCollection = await users();
    const updateInfo = await userCollection.updateOne(
      {_id: userId},
      {$addToSet: {posts: {id: postId, title: postTitle}}}
    );

    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Update failed';

    return await this.getUserById(userId);
  },
  async removePostFromUser(userId, postId) {
    let currentUser = await this.getUserById(userId);
    console.log(currentUser);

    const userCollection = await users();
    const updateInfo = await userCollection.updateOne({_id: userId}, {$pull: {posts: {id: postId}}});
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Update failed';

    return await this.getUserById(userId);
  }
};

module.exports = exportedMethods;