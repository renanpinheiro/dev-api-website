import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

import Link from 'next/link'

import * as S from './styles'

const SocialHorizontal = () => {
  return (
    <S.Container>
      <ul>
        <li>
          <Link href="https://www.facebook.com/DevApiOficial/">
            <a title="Facebook" target="_blank">
              <FaFacebookF />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/devapi.ipaas/">
            <a title="Instagram" target="_blank">
              <FaInstagram />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/company/devapitecnologia/">
            <a title="Linkeding" target="_blank">
              <FaLinkedinIn />
            </a>
          </Link>
        </li>
      </ul>
    </S.Container>
  )
}

export default SocialHorizontal
