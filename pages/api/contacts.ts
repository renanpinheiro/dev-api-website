import axios from 'axios'
import { IHubspotResponse } from '../../components/Footer/NewsletterForm/NewsletterForm.interfaces'

export default async (req, res) => {
  const hubspotApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_HUBSPOT,
    params: { hapikey: process.env.NEXT_PUBLIC_KEY_HUBSPOT },
  })

  return hubspotApi
    .post<IHubspotResponse>('/contacts', req.body)
    .then(response => {
      return res.status(response.status).json(response.data)
    })
    .catch(error => {
      return res.status(error.response.status).json(error.data)
    })
}
