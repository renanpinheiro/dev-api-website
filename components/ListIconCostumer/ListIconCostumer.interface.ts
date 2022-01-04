import { ReactNode } from 'react'

export interface IListIconCostumer {
  items: ICostumerItems[]
  title: ReactNode
}
export interface ICostumerItems {
  name: string
  url: string
}
