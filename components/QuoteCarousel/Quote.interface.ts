export interface IQuotesCarouselProps {
  quotes: IQuotes[]
}

interface IQuotes {
  name: string
  occupation: string
  company: string
  imageUrl: string
  quote: string
}

export interface IQuotePaginationDivStyle {
  isActive: boolean
}

export interface IFadeStyle {
  isFade: boolean
}
