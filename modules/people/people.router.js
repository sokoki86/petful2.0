'use strict';

const express = require('express');
const json = require('body-parser').json();

const PeopleService = require('./people.service');

const router = express.Router();

router
  .route('/api/people')
  .get((req, res, next) => {
    const people = PeopleService.getAllPeople();
    if (!people) {
      return res.status(400).error({
        error: 'There is no one in line',
      });
    }
    return res.json(people);
  })
  .delete((req, res, next) => {
    const people = PeopleService.removeAdopter();
    if (!people) {
      return res.status(400).json({
        error: 'There is no one to delete',
      });
    }
    return res.json(people);
  })
  .post(json, (req, res, next) => {
    const { name } = req.body;
    const newName = name;

    if (!name) {
      return res.status(400).json({
        error: 'Name is invalid',
      });
    }
    res.json(PeopleService.newAdopter(newName));
  });

module.exports = router;