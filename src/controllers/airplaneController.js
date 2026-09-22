import { addAirplane, listAirplanes, fetchAirplaneById, editAirplane, removeAirplane } from "../services/airplaneService.js";
export async function createAirplaneHandler(req, res){
    try{
        const airplane = await addAirplane(req.body);
        return res.status(201).json({
            success : true,
            data: airplane
        });
    } catch (error){
        return res.status(400).json({
            success: false,
            message: error.message 
        });
    }
}

export async function getAirplanesHandler(req, res){
    try{
        const airplanes = await listAirplanes();
        res.status(200).json({
            success: true,
            data: airplanes
        });
    } catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export async function updateAirplaneHandler(req,res){
    try{
        const airplane = await editAirplane(Number(req.params.id), req.body);
        return res.status(200).json({
            success: true,
            data: airplane
        });
    }catch (error){
       return  res.status(404).json({
            success: false,  
            message : error.message
        });
    }
}
 
export async function deleteAirplaneHandler(req, res) {
  try {
    const airplane = await removeAirplane(Number(req.params.id));
    return res.status(200).json({ success: true, data: airplane });
  } catch (err) {
   return  res.status(404).json({ success: false, message: err.message });
  }
}

export async function getAirplaneByIdHandler(req, res) {
  try {
    const airplane = await fetchAirplaneById(Number(req.params.id));
    return res.status(200).json({ success: true, data: airplane });
  } catch (error) {
    return res.status(404).json({ success: false, message: error.message });
  }
}