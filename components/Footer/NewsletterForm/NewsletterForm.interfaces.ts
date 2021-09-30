export interface IValuesForm {
  name: string
  email: string
  notifications: boolean
  policy: boolean
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
export interface IColorNotificationStyle {
  color?: string
}
