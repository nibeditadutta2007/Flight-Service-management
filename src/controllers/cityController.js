import { addCity, listCities } from "../services/cityService.js";
export async function createCityHandler(req, res){
    try{
        const city = await addCity(req.body);
        res.status(201).json({ success: true, data: city});
    }   catch (error){
        res.status(400).json({ success: false, message: err.message });
    }
}

export async function getCitiesHandler( req, res){
    try {
    const cities = await listCities();
    res.status(200).json({ success: true, data: cities });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}