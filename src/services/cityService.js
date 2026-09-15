import { createCity, getAllCities } from "../repository/cityRepository.js";
export async function addCity(data) {
    if(!data.name){
        throw new Error ("City name id required");
    }
    return await createCity(data);
}

export async function listCities(){
    return await getAllCities();
}