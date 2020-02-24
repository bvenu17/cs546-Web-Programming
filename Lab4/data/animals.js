const mongoCollections = require("../mongoCollections");
const animals = mongoCollections.animals;
const {ObjectId} = require('mongodb').ObjectID;


const  get = async (id) => {
    if (!id) { 
      throw "You must provide an id to search for";
    }
    if(!ObjectId.isValid(id)) {
      throw "Enter a valid object id";
    }
    const animalCollection = await animals();
    const animalGet = await animalCollection.findOne({ _id: ObjectId(id) });
    if (animalGet === null) {
      throw "Animal with that id does not exist";
    }
    return animalGet;
  }

const create = async (name, animalType) => {
    if (!name||typeof name!=="string") {
      throw "Name is not there or name is not string";
    }
    if (!animalType||typeof animalType!=="string") {
      throw "Animal Type is not there or it is not a string";
    }
    
    const animalCollection = await animals();
    let myAnimals = {
      name: name,
      animalType: animalType
    };
    const insertInfo = await animalCollection.insertOne(myAnimals);
    if (insertInfo.insertedCount === 0) throw " animal cannot be created";

    const newId = insertInfo.insertedId;
    const animal = await get(newId);
    return animal;
  }

  const  getAll = async () => {
    const animalCollection = await animals();

    const allAnimals = await animalCollection.find({}).toArray();

    return allAnimals;
  }

  const remove = async (id) => {
    if (!id) {
      throw "You must provide an id to search for";
    }
    if(!ObjectId.isValid(id)) {
      throw "Enter a valid object id";
    }
    const animalCollection = await animals();
    const deletedId = await get(id);

    const deletionInfo = await animalCollection.removeOne({ _id: ObjectId(id) });

    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete animal with id of ${id}`;
    }
    return deletedId;
     
  }

  const rename = async (id, newName) => {
    if (!id) {
      throw "You must provide an id to search for";
    }
    if (!newName||typeof newName!== "string") {
      throw "You must provide a name for the animal";
    }
    if(!ObjectId.isValid(id)) {
      throw "Enter a valid object id";
    }

    const animalCollection = await animals();
    const updateAnimal = {
     $set: {name: newName}
    };
    const updatedInfo = await animalCollection.updateOne({ _id: ObjectId(id) }, updateAnimal);
    if (updatedInfo.modifiedCount === 0) {
      throw "could not rename the animal name";
    }
    return await get(id);
  }
module.exports = {
  
      create,
        get,
        getAll,
        remove,
        rename
    
  };