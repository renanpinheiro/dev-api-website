import axios from 'axios'

export const ApiRdStation = axios.create({
  baseURL: 'https://api.rd.services/platform/conversions',
})
