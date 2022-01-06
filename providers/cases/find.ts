import api from '../../services/api'
import { IFindCasesById } from './shared.interfaces'

export const findCases = async () => {
  return api.get('/cases')
}
export const findCasesById = async (link_id: string) => {
  return api.get<IFindCasesById>(`/cases/${link_id}`)
}
