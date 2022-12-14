import React from 'react'

import Link from 'next/link'

import { company } from '../../constants/company'
import { platform } from '../../constants/platform'
import { resources } from '../../constants/resources'
import { soluctions } from '../../constants/soluctions'
import * as S from './Footer_old.styles'
import { Links } from './Links'

const Footer = () => (
  <S.FooterContainer>
    <S.Row>
      <S.Col>
        <S.ResponsivePipe />
        <Links title="Plataforma" links={platform} />
        <S.ResponsivePipe />

        <Links title="Soluções" links={soluctions} />
        <S.ResponsivePipe />

        <Links title="Recursos" links={resources} />

        <S.ResponsivePipe />
        <Links title="Empresa" links={company} />
      </S.Col>
    </S.Row>
    <S.Row>
      <S.Col content="space-between">
        <S.LogoContainer>
          <S.Logo src={'/logo/devapi-white.svg'} alt={'logo-devapi'} />

          <S.AddressContainer>
            <S.Pipe />
            <S.Address>
              <br /> <span> Telefone:</span> +55 (44) 9 9738-5897
              <br /> <span> Email:</span> info@devapi.com.br
            </S.Address>
          </S.AddressContainer>
        </S.LogoContainer>

        <S.SocialMediaContainer>
          <S.SocialMedia>
            Siga <span>nossas redes</span>
          </S.SocialMedia>
          <S.SocialLogocontainer>
            <Link href="https://www.instagram.com/devapi.ipaas/">
              <a title="Instagram" target="_blank" rel="noopener">
                <S.SocialMediaLogo
                  src="/images/instagram.svg"
                  alt="Instagram"
                />
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
          </S.SocialLogocontainer>
        </S.SocialMediaContainer>
      </S.Col>
    </S.Row>
  </S.FooterContainer>
)

export { Footer }
