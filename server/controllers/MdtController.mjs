import express from "express";
const router = express.Router();

import MdtTableService from "../services/MdtTableService.mjs";
import MdtTestService from "../services/MdtTestService.mjs";
import { MdtTest } from "../services/ComputationService.mjs";

router.get("/all_questions", (req, res) => {
  MdtTableService.getAll({ attributes: ["adjectiveID", "adjective"] })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).send());
});

router.get("/all_answers", (req, res) => {
  MdtTestService.getAll(req.user.id)
    .then((data) => {
      console.log(data);
      return res.status(200).json(data);
    })
    .catch((err) => res.status(500).send());
});

router.post("/create_answer", async (req, res) => {
  try {
    const results = await MdtTableService.getAll({
      where: {
        adjectiveID: req.body.answers,
      },
      attributes: ["adjective", "mark"],
    });
    req.body.answers = [...results.map((item) => item.adjective)];
    console.log(req.body);
    const { plus, minus } = await MdtTest(results);
    req.body.results = { plus, minus };
    req.body.user = req.user.id;
    let data = await MdtTestService.create(req.body);
    res.status(201).json(data.results);
  } catch (error) {
    res.status(400).send("Invalid data!");
  }
});

export default router;
