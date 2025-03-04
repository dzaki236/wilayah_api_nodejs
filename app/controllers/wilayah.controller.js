import wilayahServices from "../services/wilayah.service.js";
const allProvinces = async (req, res) => {
    const provinces = await wilayahServices.getAllProvincesServices(req, res);
    return await res.status(200).json(provinces);
}
const getRegencies = async (req, res) => {
    const { province_code } = req.params;
    const regencies = await wilayahServices.getRegenciesServices(req, res, province_code);
    return await res.status(200).json(regencies);
}
const getDistricts = async (req, res) => {
    const { regency_code } = req.params;
    const districts = await wilayahServices.getDistrictsServices(req, res, regency_code);
    return await res.status(200).json(districts);
}
const getSubDistricts = async (req, res) => {
    const { district_code } = req.params;
    const subdistricts = await wilayahServices.getSubDistrictsServices(req, res, district_code);
    return await res.status(200).json(subdistricts);
}
export default {
    allProvinces,
    getRegencies,
    getDistricts,
    getSubDistricts,
}
