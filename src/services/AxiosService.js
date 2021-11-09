import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const nasaApi = Axios.create({
  baseURL: 'https://api.nasa.gov/planetary',
  timeout: 8000
})

// /apod?api_key=5DN6ya33mLRSA7iHoVj2hL9k2vDj5XlNX2Q5AnWf&date=2021-11-09