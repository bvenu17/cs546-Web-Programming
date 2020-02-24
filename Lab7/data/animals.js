const mongoCollections = require('../config/mongoCollections');
const animals = mongoCollections.animals;
const posts = require('./posts');

const uuid = require('uuid/v4');

let exportedMethods = {
  async getAllAnimals() {
    const animalCollection = await animals();
    const animalList = await animalCollection.find({}).toArray();
    if (!animalList) throw 'No animals in system!';
    return animalList;
  },
  // This is a fun new syntax that was brought forth in ES6, where we can define
  // methods on an object with this shorthand!
  async getAnimalById(id) {
    const animalCollection = await animals();
    const animal = await animalCollection.findOne({_id: id});
    if (!animal) throw 'animals not found';
    return animal;
  },
  async addAnimal(name, animalType) {
    const animalCollection = await animals();

    let newAnimal = {
      name: name,
      animalType: animalType,
      _id: uuid(),
      likes:[],
      posts: []
    };

    const newInsertInformation = await animalCollection.insertOne(newAnimal);
    if (newInsertInformation.insertedCount === 0) throw 'Insert failed!';
    return await this.getAnimalById(newInsertInformation.insertedId);
  },
  async removeAnimal(id) {
    const animalCollection = await animals();
    const deletedObj = await this.getAnimalById(id)

    const deletionInfo = await animalCollection.removeOne({_id: id});
    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete user with id of ${id}`;
    }

    console.log(deletedObj.posts.id);
    //await posts.removePost(deletedObj.posts.id);

    const retObj = {
      deleted: true,
      data:deletedObj
    }
    return retObj;
  },
  async updateAnimal(id, updatedAnimal) {
    const animal = await this.getAnimalById(id);
    console.log(animal);

    let animalUpdateInfo = {
      name: updatedAnimal.newName,
      animalType: updatedAnimal.newType
    };

    const animalCollection = await animals();
    const updateInfo = await animalCollection.updateOne({_id: id}, {$set: animalUpdateInfo});
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Update failed';

    return await this.getAnimalById(id);
  },
  async addPostToAnimal(animalId, postId, postTitle) {
    let currentAnimal = await this.getAnimalById(animalId);
    console.log(currentAnimal);

    const animalCollection = await animals();
    const updateInfo = await animalCollection.updateOne(
      {_id: animalId},
      {$addToSet: {posts: {id: postId, title: postTitle}}}
    );

    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Update failed';

    return await this.getAnimalById(animalId);
  },
  async removePostFromAnimal(animalId, postId) {
    let currentAnimal = await this.getAnimalById(animalId);
    console.log(currentAnimal);

    const animalCollection = await animals();
    const updateInfo = await animalCollection.updateOne({_id: animalId}, {$pull: {posts: {id: postId}}});
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Update failed';

    return await this.getAnimalById(animalId);
  }
};

module.exports = exportedMethods;