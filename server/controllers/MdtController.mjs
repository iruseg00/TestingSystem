import express from "express";
const router = express.Router();

import MdtTableService from "../services/MdtTableService.mjs";
import MdtTestService from "../services/MdtTestService.mjs";

router.get("/all_questions", (req, res) => {
  MdtTableService.getAll({ attributes: ["adjectiveID", "adjective"] })
    .then((data) => res.status(200).json(data))
    .catch((err) => console.error(err));
});

router.get("/all_answers", (req, res) => {
  MdtTestService.getAll()
    .then((data) => res.status(200).json(data))
    .catch((err) => console.error(err));
});

router.post("/create_answer", async (req, res) => {
  try {
    let results = await MdtTableService.getAll({
      where: {
        adjectiveID: [...req.body.answers],
      },
      attributes: ["adjective", "mark"]
    });
    req.body.answers = [ ...results.map(item => item.adjective) ]
    let plus, minus;
    let marks = results.map(item => item.mark);
    plus = marks.filter(item => item == true).length;
    minus = marks.filter(item => item == false).length;
    req.body.results = { plus, minus };
    req.body.user = req.user.id;
    let data = await MdtTestService.create(req.body);
    res.status(201).json(data.results);
  } 
  catch (error) {
    console.log(error);
    res.status(400).message('Invalid data!');
  } 
});

export default router;
