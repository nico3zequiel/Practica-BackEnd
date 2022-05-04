import express from 'express';

import { readFile } from 'fs/promises';
const file = await readFile('./src/forever-pm2.json', 'utf-8');
const json = JSON.parse(file).changeServer;

let getApiRandom;
(async () => {
  if(!json) {
    const { getRandom } = await import('../../../controllers/api.controller.js');
    return getApiRandom = getRandom;
  } else {
    const { getRandom } = await import('../../../controllers/forever-pm2.controller.js');
    return getApiRandom = getRandom;
  }
})();

const randomRoutes = express.Router();

randomRoutes.get('/randoms', (req, res) => {
  const { cant } = req.query;
  if(cant == undefined) return getApiRandom(res, "start"); // envia un string
  if(isNaN(cant)) return res.json({ error: "the quantity entered must be a number" });
  getApiRandom(res, cant); // envia la data
});
randomRoutes.get('/randoms/:cant', (req, res) => {
  const { cant } = req.params;
  if(cant == undefined) return getApiRandom(res, "start"); // envia un string
  if(isNaN(cant)) return res.json({ error: "the quantity entered must be a number" });
  getApiRandom(res, cant); // envia la data
});

export default randomRoutes;