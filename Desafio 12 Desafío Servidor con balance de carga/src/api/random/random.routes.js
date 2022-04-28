import express from 'express';
import { getRandom } from '../../../controllers/api.controller.js';

const randomRoutes = express.Router();

randomRoutes.get('/', (req, res) => {
  const { cant } = req.query;
  if(cant == undefined) return getRandom(res, "start"); // envia un string
  if(isNaN(cant)) return res.json({ error: "the quantity entered must be a number" });
  getRandom(res, cant); // envia la data
});
randomRoutes.get('/:cant', (req, res) => {
  const { cant } = req.params;
  if(cant == undefined) return getRandom(res, "start"); // envia un string
  if(isNaN(cant)) return res.json({ error: "the quantity entered must be a number" });
  getRandom(res, cant); // envia la data
});

export default randomRoutes;