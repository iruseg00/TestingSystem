import AcTestResults from "../constants/AcTestResults.json";
import DcTestResults from "../constants/DcTestResults.json";
import AnxietyTestResults from "../constants/AnxietyTestResults.json";

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

const SummaElementsByIndex = (items, defaltValue = 8, key, ...args) => {
  let summa = 0;
  if (key) {
    for (let i = 0, k = args[i]; i < args.length; i++, k = args[i])
      k >= 0
        ? (summa += items[k][key])
        : (summa += defaltValue - items[Math.abs(k)][key]);
  } else {
    for (let i = 0, k = args[i]; i < args.length; i++, k = args[i]) {
      k >= 0 && k[0] != "-"
        ? (summa += items[k])
        : (summa += defaltValue - items[Math.abs(k)]);
    }
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

export const AcTest = async (answers, sex) => {
  let AK_AC = SummaElementsByIndex(
    answers,
    8,
    false,
    11,
    20,
    22,
    31,
    34,
    35,
    37
  );
  AK_AC = AcTestResults[sex][AK_AC][0];
  AK_AC = AcTestResults.results[AK_AC];
  let BO = SummaElementsByIndex(answers, 8, false, 0, 16, 18, 19, -22, 28, 30);
  BO = AcTestResults[sex][BO][1];
  BO = AcTestResults.results[BO];
  let CA = SummaElementsByIndex(answers, 8, false, 1, 3, 5, 6, 9, 17, 29);
  CA = AcTestResults[sex][CA][2];
  CA = AcTestResults.results[CA];
  let TO_AC = SummaElementsByIndex(
    answers,
    8,
    false,
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
  TO_AC = AcTestResults[sex][TO_AC][3];
  TO_AC = AcTestResults.results[TO_AC];
  let SP_AC = SummaElementsByIndex(
    answers,
    8,
    false,
    -4,
    7,
    10,
    12,
    15,
    23,
    25,
    33
  );
  SP_AC = AcTestResults[sex][SP_AC][4];
  SP_AC = AcTestResults.results[SP_AC];
  return { AK_AC, BO, CA, TO_AC, SP_AC };
};

export const DcTest = async (answers, sex) => {
  let AK = SummaElementsByIndex(
    answers,
    8,
    false,
    12,
    16,
    22,
    27,
    43,
    45,
    47,
    49
  );
  AK = DcTestResults[sex][AK][0];
  AK = DcTestResults.results[AK];
  let BO = SummaElementsByIndex(answers, 8, false, -2, 5, 7, -16, -37, 38, -49);
  BO = DcTestResults[sex][BO][6];
  BO = DcTestResults.results[BO];
  let TO = SummaElementsByIndex(
    answers,
    8,
    false,
    0,
    6,
    13,
    17,
    26,
    42,
    54,
    56
  );
  TO = DcTestResults[sex][TO][1];
  TO = DcTestResults.results[TO];
  let PA = SummaElementsByIndex(answers, 8, false, 3, 7, 24, 30, 34, 36, 40);
  PA = DcTestResults[sex][PA][7];
  PA = DcTestResults.results[PA];
  let SP = SummaElementsByIndex(answers, 8, false, 4, 8, 9, 11, 20, 23, 29, 34);
  SP = DcTestResults[sex][SP][2];
  SP = DcTestResults.results[SP];
  let US = SummaElementsByIndex(
    answers,
    8,
    false,
    15,
    19,
    28,
    33,
    50,
    52,
    53,
    55
  );
  US = DcTestResults[sex][US][3];
  US = DcTestResults.results[US];
  let UD = SummaElementsByIndex(
    answers,
    8,
    false,
    1,
    14,
    21,
    25,
    32,
    39,
    44,
    46,
    51
  );
  UD = DcTestResults[sex][UD][4];
  UD = DcTestResults.results[UD];
  let PO = SummaElementsByIndex(answers, 8, false, 10, 18, 31, 35, 41, 48);
  PO = DcTestResults[sex][PO][7];
  PO = DcTestResults.resultsForPO[PO];
  return { AK, BO, TO, PA, SP, US, UD, PO };
};

export const AnxietyTest = async (answers) => {
  let situational = SummaElementsByIndex(
    answers,
    5,
    false,
    -0,
    -1,
    2,
    3,
    -4,
    5,
    6,
    -7,
    8,
    -9,
    -10,
    11,
    12,
    13,
    -14,
    -15,
    16,
    17,
    -18,
    -19
  );
  let personal = SummaElementsByIndex(
    answers,
    5,
    false,
    -20,
    21,
    22,
    23,
    24,
    -25,
    -26,
    27,
    28,
    -29,
    30,
    31,
    32,
    33,
    34,
    -35,
    36,
    37,
    -38,
    39
  );
  situational = AnxietyTestResults.results[situational];
  personal = AnxietyTestResults.results[personal];
  return { situational, personal };
};
