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

export interface IQuoteSpanStyle {
  isActive: boolean
}

export interface IFadeStyle {
  fade: boolean
}
