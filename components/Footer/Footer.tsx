import React from 'react'

import Link from 'next/link'

import { company } from '../../constants/company'
import { platform } from '../../constants/platform'
import { resources } from '../../constants/resources'
import { soluctions } from '../../constants/soluctions'
import * as S from './Footer.styles'
import { Links } from './Links'

const Footer = () => (
  <S.FooterContainer>
    <S.LogoContainer>
      <S.Logo
        src={'/logo/devapi-by-tivit-color.svg'}
        alt={'logo-devapi'}
      ></S.Logo>

      <S.SocialMediaContainer>
        <S.SocialMedia>
          Siga <span>nossas redes</span>
        </S.SocialMedia>
        <S.SocialLogoContainer>
          <Link href="https://www.instagram.com/devapi.ipaas/">
            <a title="Instagram" target="_blank" rel="noopener">
              <S.SocialMediaLogo src="/images/instagram.svg" alt="Instagram" />
            </a>
          </Link>
          <Link href="https://www.facebook.com/DevApiOficial/">
            <a title="Facebook" target="_blank" rel="noopener">
              <S.SocialMediaLogo src="/images/facebook.svg" alt="Facebook" />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/company/devapitecnologia/">
            <a title="Linkedin" target="_blank" rel="noopener">
              <S.SocialMediaLogo src="/images/linkedin.svg" alt="Linkedin" />
            </a>
          </Link>
          <Link href="https://www.youtube.com/channel/UC-ocfHETIE550ZN5CP13H5w">
            <a title="Youtube" target="_blank" rel="noopener">
              <S.SocialMediaLogo src="/images/youtube.svg" alt="Youtube" />
            </a>
          </Link>
        </S.SocialLogoContainer>
      </S.SocialMediaContainer>

      <S.AddressContainer>
        <S.Pipe />
        <S.Address>
          <span> Telefone:</span> +55 (44) 9 9738-5897
          <br /> <span> Email:</span> info@devapi.com.br
        </S.Address>
      </S.AddressContainer>
    </S.LogoContainer>

    <S.NavContainer>
      <Links title="Plataforma" links={platform} />
    </S.NavContainer>

    <S.NavContainer>
      <Links title="Soluções" links={soluctions} />
    </S.NavContainer>

    <S.NavContainer>
      <Links title="Recursos" links={resources} />
    </S.NavContainer>

    <S.NavContainer>
      <Links title="Empresa" links={company} />
    </S.NavContainer>
  </S.FooterContainer>
)

export { Footer }
