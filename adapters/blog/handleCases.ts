import { convertDate } from '../../utils/formatter'

import { IFindCasesResponse } from '../../providers/blog/shared.interface'

export const handleCases = (cases: IFindCasesResponse[]) => {
  return cases.map(post => ({
    text: post.title,
    date: convertDate(post.createt_at).withMonth,
  }))
}
