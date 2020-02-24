const express = require('express');
const router = express.Router();
const data = require('../data');
const animalData = data.animals;
const postData = data.posts;

router.get('/:id', async (req, res) => {
  try {
    let animal = await animalData.getAnimalById(req.params.id);
    res.json(animal);
  } catch (e) {
    res.status(404).json({error: 'User not found'});
  }
});

router.get('/', async (req, res) => {
  try {
    let animalList = await animalData.getAllAnimals();
    res.json(animalList);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.post('/', async (req, res) => {
  let animalInfo = req.body;

  if (!animalInfo) {
    res.status(400).json({error: 'You must provide data to create a animal'});
    return;
  }

  if (!animalInfo.name) {
    res.status(400).json({error: 'You must provide a name'});
    return;
  }

  if (!animalInfo.animalType) {
    res.status(400).json({error: 'You must provide a animal type'});
    return;
  }

  try {
    const newAnimal = await animalData.addAnimal(animalInfo.name, animalInfo.animalType);
    res.json(newAnimal);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.put('/:id', async (req, res) => {
  let animalInfo = req.body;

  if (!animalInfo) {
    res.status(400).json({error: 'You must provide data to update a user'});
    return;
  }

  if (!animalInfo.newName&&!animalInfo.newType) {
    res.status(400).json({error: 'You must provide a new name or new type'});
    return;
  }

  

  try {
    await animalData.getAnimalById(req.params.id);
  } catch (e) {
    res.status(404).json({error: 'Animal not found'});
    return;
  }
  try {
    const updatedAnimal = await animalData.updateAnimal(req.params.id, animalInfo);
    res.json(updatedAnimal);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await animalData.getAnimalById(req.params.id);
  } catch (e) {
    res.status(404).json({error: 'User not found'});
    return;
  }

  try {
    const removedAnimal = await animalData.removeAnimal(req.params.id);
    res.json(removedAnimal);
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
  }

  

});

module.exports = router;