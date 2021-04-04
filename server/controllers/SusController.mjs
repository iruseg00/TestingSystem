import express from 'express';
const router = express.Router();

import SusTableService from '../services/SusTableService.mjs';

router.get('/all_questions', (req, res) => {
  SusTableService.getAll()
    .then((data) => {
      console.log('getAll:', data);
      return res.status(200).json(data);
    })
    .catch((err) => console.error(err));
});

router.get('/:id', (req, res) => {
  SusTableService.get(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => console.error(err));
});

router.post('/', (req, res) => {
  SusTableService.create(req.body)
    .then((user) => res.status(201).json(user))
    .catch((err) => console.error(err));
});

export default router;
