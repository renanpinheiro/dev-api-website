export interface IPayload {
  message: string
  email: string
  phone: string
  company: string
  role: string
  fullName: string
}
export interface IColorNotificationStyle {
  color?: 'success' | 'alert'
}
export interface IMessage {
  type: 'success' | 'alert'
  message: string
}
