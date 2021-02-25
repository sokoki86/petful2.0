'use strict';

const { Queue, displayQ } = require('../queue/Queue');
const store = require('../../store');


const kittenQueue = new Queue();
const doggoQueue = new Queue();

store.cats.forEach((cat) => kittenQueue.enqueue(cat));
store.dogs.forEach((dog) => doggoQueue.enqueue(dog));


const CatService = {
  getCats() {
    const displayCats = displayQ(kittenQueue);
    return displayCats;
  },
  getFirstCat() {
    return kittenQueue.peek();
  },
  adoptCat() {
    kittenQueue.dequeue();
    return kittenQueue;
  },
};

const DogService = {
  getDogs() {
    const displayDogs = displayQ(doggoQueue);
    return displayDogs;
  },
  getFirstDog() {
    return doggoQueue.peek();
  },
  adoptDog() {
    doggoQueue.dequeue;
    return doggoQueue;
  },
};

module.exports = {
  CatService,
  DogService,
};