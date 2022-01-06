import axios from 'axios'
import { IHubspotResponse } from '../../components/Footer/NewsletterForm/NewsletterForm.interfaces'

export default async (req, res) => {
  try {
    const hubspotApi = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_HUBSPOT,
      params: { hapikey: process.env.NEXT_PUBLIC_KEY_HUBSPOT },
    })

    const response = await hubspotApi.post<IHubspotResponse>(
      'contacts',
      req.body,
    )
    res.status(response.status).json(response.data)
  } catch (error) {
    res.status(error.status).json(error.data)
  }
}
