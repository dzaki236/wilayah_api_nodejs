import axios from "axios"
const getAllProvincesServices = async (req, res) => {
    return await axios.get('https://wilayah.id/api/provinces.json')
        .then(response => response.data)
        .catch(err => { return res.status(404).json({ message: err.message, code: err.code, status: err.response.status }) });
}
const getRegenciesServices = async (req, res, PROVINCE_CODE) => {
    return await axios.get(`https://wilayah.id/api/regencies/${PROVINCE_CODE}.json`)
        .then(response => response.data)
        .catch(err => { return res.status(404).json({ message: err.message, code: err.code, status: err.response.status }) });
}
const getDistrictsServices = async (req, res, REGENCY_CODE) => {
    return await axios.get(`https://wilayah.id/api/districts/${REGENCY_CODE}.json`)
        .then(response => response.data)
        .catch(err => { return res.status(404).json({ message: err.message, code: err.code, status: err.response.status }) });
}
const getSubDistrictsServices = async (DISTRICT_CODE) => {
    return await axios.get(`https://wilayah.id/api/villages/${DISTRICT_CODE}.json`)
        .then(response => response.data)
        .catch(err => { return res.status(404).json({ message: err.message, code: err.code, status: err.response.status }) });
}
export default { getAllProvincesServices, getRegenciesServices, getDistrictsServices, getSubDistrictsServices }
