interface IConnectors {
  url: string
  name: string
}

export interface IConnectorsCardProps {
  connectors: IConnectors[]
  text: string
}
