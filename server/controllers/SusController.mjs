import express from 'express';
const router = express.Router();

import SusTableService from '../services/SusTableService.mjs';
import SusTestService from '../services/SusTestService.mjs';

router.get('/all_questions', (req, res) => {
  SusTableService.getAll()
    .then((data) => res.status(200).json(data))
    .catch((err) => console.error(err));
});

router.get('/all_answers', (req, res) => {
  SusTestService.getAll()
    .then((data) => res.status(200).json(data))
    .catch((err) => console.error(err));
});

router.post('/create_answer', (req, res) => {
  console.log('request:', req.body);
  // TO DO VALIDATING
  // TO DO EXEC RESULTS
  req.body.results = {"first": 90, "next": 100, "type": "A1"}
  req.body.user = req.user.id;
  SusTestService.create(req.body)
    .then((data) => res.status(201).json(data.results))
    .catch((err) => console.error(err));
});

export default router;
