import { IFindCasesResponse } from '../../providers/blog/shared.interface'
import { convertDate } from '../../utils/formatter'

export const handleCases = (cases: IFindCasesResponse[]) => {
  return cases.map(post => ({
    text: post.title,
    date: convertDate(post.createt_at).withMonth,
  }))
}
