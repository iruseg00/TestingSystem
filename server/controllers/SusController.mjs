import express from 'express';
const router = express.Router();

import SusTableService from '../services/SusTableService.mjs';
import SusTestService from '../services/SusTestService.mjs';
import { SusTest } from '../services/ComputationService.mjs';

router.get('/all_questions', (req, res) => {
	SusTableService.getAll()
		.then((data) => res.status(200).json(data))
		.catch((err) => res.status(500).send(err));
});

router.get('/all_answers', (req, res) => {
	SusTestService.getAll(req.user.id)
		.then((data) => res.status(200).json(data))
		.catch((err) => res.status(500).send(err));
});

router.post('/testing_system', async (req, res) => {
	try {
		const data = await SusTestService.getAllByTestingSystem(req.body.testingSystem);
		return res.status(200).json(data); 
	}
	catch (error) {
		res.status(400).send('Invalid data!');
	}
});

router.post('/create_answer', async (req, res) => {
	try {
		console.log('-----------------');
		const { value, type } = await SusTest(req.body.answers);
		req.body.results = { value, percentile: 94, type };
		req.body.user = req.user.id;
		const data = await SusTestService.create(req.body);
		res.status(201).json(data.results);
	} catch (error) {
		res.status(400).send(error);
	}
});

export default router;
