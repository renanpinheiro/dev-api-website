interface IPageEventProps {
  event: string
  page: string
}

export const GTMPageView = (url: string) => {
  const pageEvent: IPageEventProps = {
    event: 'pageview',
    page: url,
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window && window.dataLayer && window.dataLayer.push(pageEvent)
  return pageEvent
}
