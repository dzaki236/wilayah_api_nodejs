import wilayahServices from "../services/wilayah.service.js";

/**
 * Retrieves all provinces in Indonesia and sends them as a JSON response.
 * It uses a service to fetch the provinces data from an external API.
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Promise<void>} JSON response containing all provinces data
 */
const allProvinces = async (req, res) => {
    const provinces = await wilayahServices.getAllProvincesServices(req, res);
    return await res.status(200).json(provinces);
}
/**
 * Retrieves all regencies in a specified province in Indonesia and sends them as a JSON response.
 * It uses a service to fetch the regencies data from an external API.
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Promise<void>} JSON response containing all regencies data for the specified province
 */
const getRegencies = async (req, res) => {
    const { province_code } = req.params;
    const regencies = await wilayahServices.getRegenciesServices(req, res, province_code);
    return await res.status(200).json(regencies);
}

/**
 * Retrieves all districts in a specified regency in Indonesia and sends them as a JSON response.
 * It uses a service to fetch the districts data from an external API.
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Promise<void>} JSON response containing all districts data for the specified regency
 */

const getDistricts = async (req, res) => {
    const { regency_code } = req.params;
    const districts = await wilayahServices.getDistrictsServices(req, res, regency_code);
    return await res.status(200).json(districts);
}

/**
 * Retrieves all subdistricts in a specified district in Indonesia and sends them as a JSON response.
 * It uses a service to fetch the subdistricts data from an external API.
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Promise<void>} JSON response containing all subdistricts data for the specified district
 */
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
