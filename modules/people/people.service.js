const { Queue } = require('../queue/Queue');
const { displayQ } = require('../queue/Queue');
const store = require('../../store');



let people = new Queue();
store.people.forEach((person) => people.enqueue(person));

// --------------------
const PeopleService = {
  //return all people in queue
  getAllPeople() {
    const displayPeople = displayQ(people);
    return displayPeople;
  },
  //add new person to queue
  newAdopter(name) {
    people.enqueue(name);
    return people;
  },
  //remove person from queue
  removeAdopter() {
    people.dequeue();
    return people;
  },
};

module.exports = PeopleService;
