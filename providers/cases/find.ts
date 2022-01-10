import api from '../../services/api'
import { IFindCaseById } from './shared.interfaces'

export const findCases = async () => {
  return api.get('/cases')
}
export const findCasesById = async (link_id: string) => {
  return api.get<IFindCaseById>(`/cases/${link_id}`)
}
