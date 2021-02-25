'use strict';

const express = require('express');

const { CatService, DogService } = require('./pets.service');
const router = express.Router();

router
  .route('/api/cat')
  .get((req, res, next) => {
    const cats = CatService.getCats();
    if (!cats) {
      return res.status(400).json({
        error: 'No cats currently available to adopt',
      });
    }
    return res.json(cats);
  })
  .delete((req, res, next) => {
    const cats = CatService.adoptCat();
    if (!cats) {
      return res.status(400).json({
        error: 'No cats currently available to adopt',
      });
    }
    res.status(200).send(cats);
  });

router
  .route('/api/dog')
  .get((req, res) => {
    const dogs = DogService.getDogs();
    if (!dogs) {
      return res.status(400).json({
        error: 'Currently no dogs available to adopt',
      });
    }
    return res.json(dogs);
  })
  .delete((req, res, next) => {
    const dogs = DogService.adoptDog();
    if (!dogs) {
      return res.status(400).json({
        error: 'No dogs currently available to adopt.',
      });
    }
    return res.status(200).send(dogs);
  });

module.exports = router;
