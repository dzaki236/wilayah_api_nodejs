import express from "express";
const route = express.Router();
import wilayahController from "../controllers/wilayah.controller.js";
route.get('/provinces', wilayahController.allProvinces);
route.get('/regencies/:province_code', wilayahController.getRegencies);
// route.get('/regencies/:province_code', getRegencies);
export {route};
