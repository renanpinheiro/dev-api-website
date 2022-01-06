export interface IValuesForm {
  name: string
  email: string
  isNotifications: boolean
  isPolicy: boolean
}
export interface IHubspotResponse {
  properties: IHubspotPayload
  createdAt: string
  updatedAt: string
}
export interface IHubspotPayload {
  createdate: string
  email: string
  firstname: string
  hubtags: string
  lastmodifieddate: string
  lastname: string
}
export interface IColorNotificationStyle {
  color?: string
}
