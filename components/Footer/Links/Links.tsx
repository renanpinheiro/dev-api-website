import React from 'react'

import Link from 'next/link'

import { useScrollTop } from '../../../hooks/useScrollTop'
import { IContainerLinkProps } from './Links.interfaces'
import * as S from './Links.styles'

const Links = ({ title, links }: IContainerLinkProps) => {
  const handleLinks = links.map((link, index) => {
    return (
      <Link key={index} href={link.url}>
        <a
          title={link.name}
          target={link.target}
          onClick={useScrollTop}
          rel="noreferrer"
        >
          {link.name}
        </a>
      </Link>
    )
  })

  return (
    <S.ContainerLink>
      <S.TitleLink>{title}</S.TitleLink>
      {handleLinks}
    </S.ContainerLink>
  )
}

export { Links }
