import express from "express";
import wilayahController from "../controllers/wilayah.controller.js";
const route = express.Router();
route.get('/provinces', wilayahController.allProvinces);
route.get('/cities/:province_code', wilayahController.getRegencies);
route.get('/districts/:regency_code', wilayahController.getDistricts);
route.get('/subdistricts/:district_code', wilayahController.getSubDistricts);
export { route };
