import express from 'express';
const router = express.Router();

import PssuqTableService from '../services/PssuqTableService.mjs';
import PssuqTestService from '../services/PssuqTestService.mjs';
import { PssuqTest } from '../services/ComputationService.mjs';

router.get('/all_questions', (req, res) => {
	PssuqTableService.getAll()
		.then((data) => res.status(200).json(data))
		.catch((err) => res.status(500).send(err));
});

router.get('/all_answers', (req, res) => {
	PssuqTestService.getAll(req.user.id)
		.then((data) => res.status(200).json(data))
		.catch((err) => res.status(500).send(err));
});

router.post('/testing_system', async (req, res) => {
	try {
		const data = await PssuqTestService.getAllByTestingSystem(req.body.testingSystem);
		return res.status(200).json(data);
	}
	catch (error) {
		res.status(400).send('Invalid data!');
	}
});

router.post('/create_answer', async (req, res) => {
	try {
		const { value, type } = await PssuqTest(req.body.answers);
		req.body.results = { value, qualityUI: 92, qualityInfoSupport: 87, type };
		req.body.user = req.user.id;
		const data = await PssuqTestService.create(req.body);
		res.status(201).json(data.results);
	} catch (error) {
		res.status(400).send(error);
	}
});

export default router;
