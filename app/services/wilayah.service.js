import axios from "axios"
import { url as baseUrl }  from "../utils/url.utils.js";
/**
 * Retrieves all provinces in Indonesia and sends them as a JSON response.
 * It uses a service to fetch the provinces data from an external API.
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Promise<Object[]>} JSON response containing all provinces data
 */
const getAllProvincesServices = async (req, res) => {
    return await axios.get(`${baseUrl}/provinces.json`)
        .then(response => response.data)
        .catch(err => { return res.status(404).json({ message: err.message, code: err.code, status: err.response.status }) });
}

/**
 * Retrieves all regencies in a specified province in Indonesia and sends them as a JSON response.
 * It uses a service to fetch the regencies data from an external API.
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {string} PROVINCE_CODE - Code of the province to retrieve regencies of
 * @returns {Promise<Object[]>} JSON response containing all regencies data for the specified province
 */
const getRegenciesServices = async (req, res, PROVINCE_CODE) => {
    return await axios.get(`${baseUrl}/regencies/${PROVINCE_CODE}.json`)
        .then(response => response.data)
        .catch(err => { return res.status(404).json({ message: err.message, code: err.code, status: err.response.status }) });
}

/**
 * Retrieves all districts in a specified regency in Indonesia and sends them as a JSON response.
 * It uses a service to fetch the districts data from an external API.
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {string} REGENCY_CODE - Code of the regency to retrieve districts of
 * @returns {Promise<Object[]>} JSON response containing all districts data for the specified regency
 */
const getDistrictsServices = async (req, res, REGENCY_CODE) => {
    return await axios.get(`${baseUrl}/districts/${REGENCY_CODE}.json`)
        .then(response => response.data)
        .catch(err => { return res.status(404).json({ message: err.message, code: err.code, status: err.response.status }) });
}

/**
 * Retrieves all subdistricts in a specified district in Indonesia and sends them as a JSON response.
 * It uses a service to fetch the subdistricts data from an external API.
 *
 * @param {string} DISTRICT_CODE - Code of the district to retrieve subdistricts of
 * @returns {Promise<Object[]>} JSON response containing all subdistricts data for the specified district
 */
const getSubDistrictsServices = async (DISTRICT_CODE) => {
    return await axios.get(`${baseUrl}/villages/${DISTRICT_CODE}.json`)
        .then(response => response.data)
        .catch(err => { return res.status(404).json({ message: err.message, code: err.code, status: err.response.status }) });
}

export default { getAllProvincesServices, getRegenciesServices, getDistrictsServices, getSubDistrictsServices }
