import { navLinks } from '../../constants/navLinks'

export const handleNavLink = (route: string) => {
  const handledNavLinks = navLinks.map(link => {
    return {
      name: link.name,
      isActive: link.dropDown && link.dropDown.some(item => item.url === route),
      dropDown: link.dropDown,
      url: link.url,
    }
  })

  return handledNavLinks
}
