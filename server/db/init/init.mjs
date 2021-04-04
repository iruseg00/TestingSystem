import Sus from './sus.json';
import Mdt from './mdt.json';
import SusTableService from '../../services/SusTableService.mjs';
import MdtTableService from '../../services/MdtTableService.mjs';
const { sus } = Sus;
const { mdt } = Mdt;

export default async () =>
{
    for(let question of sus)
        await SusTableService.create(question);
    for(let [adjective, mark] of mdt)
        await MdtTableService.create(adjective, mark);
}   