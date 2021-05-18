import AcKey from "../constants/acKey.json";

// MULTIPLIER_PSSUQ_COMMON = 100 / 180 * 100 / 180;
const MULTIPLIER_PSSUQ_COMMON = 0.308642;
// MULTIPLIER_PSSUQ_USEFULNESS = 100 / 80;
const MULTIPLIER_PSSUQ_USEFULNESS = 1.25;
// MULTIPLIER_PSSUQ_UI_SUPPORT = 100 / 70;
const MULTIPLIER_PSSUQ_UI_SUPPORT = 1.43;
// MULTIPLIER_PSSUQ_UI = 100 / 30;
const MULTIPLIER_PSSUQ_UI = 3.33;
// max value of answer in sus test is 5, MAX_VALUE = 5 - 1;
const MAX_VALUE_SUS = 4;

const SummaElements = (items, start = 0, end, key) => {
  let summa = 0;
  if (key) {
    for (let i = start; i < end; i++) summa += items[i][key];
  } else {
    for (let i = start; i < end; i++) summa += items[i];
  }
  return summa;
};

const SummaElementsByIndex = (items, key, ...args) => {
  let summa = 0;
  if (key) {
    for (let i = 2, k; i < args.length; i++, k = args[i])
      k > 0 ? (summa += items[k][key]) : (summa += 8 - items[k][key]);
  } else {
    for (let i = 2, k; i < args.length; i++, k = args[i])
      k > 0 ? (summa += items[k]) : (summa += 8 - items[k]);
  }
  return summa;
};

export const SusTest = async (answers) => {
  const value = (
    (answers.reduce((summa, item) => summa + item.answer, -answers.length) *
      100) /
    (MAX_VALUE_SUS * answers.length)
  ).toFixed(0);
  const type =
    value >= 90 ? "A1" : value >= 60 ? "A2" : value >= 40 ? "A3" : "A4";
  return { value, type };
};

export const PssuqTest = async (answers) => {
  const value = (
    answers.reduce((summa, item) => summa + item.answer, 0) *
    MULTIPLIER_PSSUQ_COMMON
  ).toFixed(0);
  const usefulness =
    SummaElements(answers, 0, 8, "answer") * MULTIPLIER_PSSUQ_USEFULNESS;
  const qualityInfoSupport =
    SummaElements(answers, 8, 15, "answer") * MULTIPLIER_PSSUQ_UI_SUPPORT;
  const qualityUI =
    SummaElements(answers, 15, 18, "answer") * MULTIPLIER_PSSUQ_UI;
  return { value, usefulness, qualityInfoSupport, qualityUI };
};

export const MdtTest = async (results) => {
  let plus, minus;
  let marks = results.map((item) => item.mark);
  plus = marks.filter((item) => item == true).length;
  minus = marks.filter((item) => item == false).length;
  const length = plus + minus;
  minus &&= (minus * 100) / length;
  plus &&= (plus * 100) / length;
  return { plus, minus };
};

export const AcTest = async (answers) => {
  let AK_AC = SummaElementsByIndex(
    answers,
    "answer",
    11,
    20,
    22,
    31,
    34,
    35,
    37
  );
  let BO = SummaElementsByIndex(answers, "answer", 0, 16, 18, 19, -22, 28, 30);
  let CA = SummaElementsByIndex(answers, "answer", 1, 3, 5, 6, 9, 17, 29);
  let TO_AC = SummaElementsByIndex(
    answers,
    "answer",
    2,
    8,
    13,
    14,
    24,
    -26,
    -27,
    32,
    36
  );
  let SP_AC = SummaElementsByIndex(
    answers,
    "answer",
    -4,
    7,
    10,
    12,
    15,
    23,
    25,
    33
  );
  return { AK_AC, BO, CA, TO_AC, SP_AC };
};
