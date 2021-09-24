import React from 'react'
import Link from 'next/link'
import {ContainerLink,TitleLink} from './styles'

interface IContainerLinkProps {
  title: string
  links: ILinks[]
}
interface ILinks {
  name: string
  url: string
}
const Links = ({ title, links }: IContainerLinkProps) => {
  const handleLiks = links.map((link, index) => {
    return (
      <>
        <Link key={index} href={link.url}>
          <a title={link.name}>{link.name}</a>
        </Link>
      </>
    )
  })

  return (
    <ContainerLink>
      <TitleLink>{title}</TitleLink>
      {handleLiks}
    </ContainerLink>
  )
}

export { Links }
