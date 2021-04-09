import express from "express";
const router = express.Router();

import SusTableService from "../services/SusTableService.mjs";
import SusTestService from "../services/SusTestService.mjs";

router.get("/all_questions", (req, res) => {
  SusTableService.getAll()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).send(err));
});

router.get("/all_answers", (req, res) => {
  SusTestService.getAll()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).send(err));
});

router.post("/create_answer", async (req, res) => {
  try {
    const value = (
      (req.body.answers.reduce((summa, item) => summa + item.answer, 0) /
        req.body.answers.length) *
      20
    ).toFixed(0);
    const type =
      value >= 90 ? "A1" : value >= 60 ? "A2" : value >= 40 ? "A3" : "A4";
    req.body.results = { value, percentile: 94, type };
    req.body.user = req.user.id;
    const data = await SusTestService.create(req.body);
    res.status(201).json(data.results);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
