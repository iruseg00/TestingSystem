import Sus from './sus.json';
import SusTableService from '../../services/SusTableService.mjs';
const { sus } = Sus;
export default async () =>
{
    for(let question of sus)
        await SusTableService.create(question);
}   