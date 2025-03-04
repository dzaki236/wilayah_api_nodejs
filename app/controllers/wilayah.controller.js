import wilayahServices from "../services/wilayah.service.js";
const allProvinces = async (req, res) => {
    const provinces = await wilayahServices.getAllProvincesServices();
    return await res.status(200).json(provinces);
}
const getRegencies = async (req, res) => {
    const { province_code } = req.params;
    const regencies = await wilayahServices.getRegenciesServices(province_code);
    return await res.status(200).json(regencies);
}
export default{
    allProvinces,
    getRegencies
}
