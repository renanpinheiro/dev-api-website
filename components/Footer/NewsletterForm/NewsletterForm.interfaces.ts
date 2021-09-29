export interface IValuesForm {
  name: string
  email: string
  notifications: string
  policy: string
}
export interface IRdStationResponse {
  event_type: string
  event_family: string
  payload: IRdPayload
}
export interface IRdPayload {
  conversion_identifier: string
  email: string
}
