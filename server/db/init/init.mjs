import Sus from "./sus.json";
import Mdt from "./mdt.json";
import Pssuq from "./pssuq.json";
import SusTableService from "../../services/SusTableService.mjs";
import MdtTableService from "../../services/MdtTableService.mjs";
import PssuqTableService from "../../services/PssuqTableService.mjs";
const { sus } = Sus;
const { mdt } = Mdt;
const { pssuq } = Pssuq;

export default async () => 
{
  for (let question of sus) 
    await SusTableService.create(question);
  for (let [adjective, mark] of mdt)
    await MdtTableService.create(adjective, mark);
  for (let question of pssuq) 
    await PssuqTableService.create(question);
};
