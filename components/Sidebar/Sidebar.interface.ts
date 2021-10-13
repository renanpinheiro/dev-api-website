interface IArticles {
  text: string
  newsType: string
  date: string
  urlImage: string
  linkId: string
}

interface ITags {
  id: string
  name: string
}

export interface ISidebarProps {
  tags: ITags[]
  articles: IArticles[]
  ebookImg: string
  ebookRedirect: string
  onClick(index: number): void
  onClickTag(index: number): void
}
