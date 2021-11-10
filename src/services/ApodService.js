import { AppState } from "../AppState"
import { Apod } from "../model/Apod"
import { logger } from "../utils/Logger"
import { nasaApi } from "./AxiosService"



class ApodService{
async getapod(date){
  
  const res = await nasaApi.get(`apod?api_key=5DN6ya33mLRSA7iHoVj2hL9k2vDj5XlNX2Q5AnWf&date=${date}`)
  // logger.log(res.data) 
  AppState.apod = new Apod(res.data)
}
move(favorite){
  AppState.favorites.push(favorite)
}
}


export const apodService = new ApodService()