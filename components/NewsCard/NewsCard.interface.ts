export interface INewsCard {
  imageUrl: string
  title: string
  short_text: string
  newsType: string
  date: string
  author: string
  linkId: string
}

export interface INewsCardProps {
  newsCards: INewsCard
  padding?: string
  gridColum?: string
  gridRow?: string
}

export interface IContainerStyledProps {
  padding?: string
}

export interface IGridStyledProps {
  gridColum?: string
  gridRow?: string
}
