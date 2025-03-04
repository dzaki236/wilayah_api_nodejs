import axios from "axios"
const getAllProvincesServices = async ()=>{
    return await axios.get('https://wilayah.id/api/provinces.json')
    .then(response=>response.data)
    .catch(err=>console.log(err));
}
const getRegenciesServices = async (province_code)=>{
    return await axios.get(`https://wilayah.id/api/regencies/${province_code}.json`)
    .then(response=>response.data)
    .catch(err=>console.log(err));
}
export default {getAllProvincesServices, getRegenciesServices}
