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
