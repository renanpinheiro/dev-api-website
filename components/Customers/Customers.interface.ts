import { ReactNode } from 'react'

export interface ICustomer {
  name: string
  url: string
}

export interface ICustomers {
  items: ICustomer[]
  title: ReactNode
}
