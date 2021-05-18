import express from "express";
const router = express.Router();

import DcTableService from "../services/DcTableService.mjs";
import DcTestService from "../services/DcTestService.mjs";
import { SusTest } from "../services/ComputationService.mjs"; // TODO

router.get("/all_questions", async (req, res) => {
  try {
    const data = await DcTableService.getAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/all_answers", async (req, res) => {
  try {
    const data = await DcTestService.getAll(req.user.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/testing_system", async (req, res) => {
  try {
    const data = await DcTestService.getAllByTestingSystem(
      req.body.testingSystem
    );
    return res.status(200).json(data.reverse());
  } catch (error) {
    res.status(400).send("Invalid data!");
  }
});

router.post("/create_answer", async (req, res) => {
  try {
    const { value, type } = await SusTest(req.body.answers);
    req.body.results = { value, percentile: 94, type };
    req.body.user = req.user.id;
    const data = await DcTestService.create(req.body);
    res.status(201).json(data.results);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
