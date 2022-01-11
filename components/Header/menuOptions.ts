import { navLinks } from '../../constants/navLinks'
import { INavLinks } from './Header.interface'

export const handleNavLink = (route: string): INavLinks[] => {
  const handledNavLinks = navLinks.map(link => {
    return {
      name: link.name,
      isActive:
        (link.dropDown && link.dropDown.some(item => item.url === route)) ||
        link.url === route,
      dropDown:
        link.dropDown &&
        link.dropDown.map(item => {
          return {
            name: item.name,
            url: item.url,
            isActive: item.url === route,
          }
        }),
      url: link.url,
    }
  })

  return handledNavLinks
}
