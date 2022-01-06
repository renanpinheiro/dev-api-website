export interface IFindCaseById {
  title: string
  linkId: string
  shortText: string
  aboutText: string
  challengeText: string
  objectiveText: string
  solutionText: string
  resultText: string
  imageMain: string
  imageCover: string
  seo: ICaseSeo
}

interface ICaseSeo {
  metaTitle: string
  metaDescription: string
}
