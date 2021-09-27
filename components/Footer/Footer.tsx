import React from 'react'
import Link from 'next/link'
import { Links } from './Links'
import { NewsletterForm } from './NewsletterForm'
import {
  FooterContainer,
  Row,
  Col,
  NewsletterContainer,
  Newsletter,
  Pipe,
  TextContainer,
  Title,
  SubTitle,
  ResponsivePipe,
  LogoContainer,
  Logo,
  AddressContainer,
  Address,
  SocialMediaContainer,
  SocialMedia,
  SocialLogocontainer,
  SocialMediaLogo,
} from './styles'

const Footer = () => {
  const platform = [
    {
      name: 'Características',
      url: '/caracteristicas',
    },
    {
      name: 'API Management',
      url: '/api-management',
    },
    {
      name: 'Conectores',
      url: '/conectores',
    },
    {
      name: 'Planos',
      url: '/planos',
    },
    {
      name: 'Parceiro de integração',
      url: '/parceiro-de-integração',
    },
  ]

  const soluctions = [
    {
      name: 'Gestão',
      url: '/gestao',
    },
    {
      name: 'Comerical',
      url: '/comercial',
    },
    {
      name: 'e-Commerce',
      url: '/e-commerce',
    },
    {
      name: 'Financeiro',
      url: '/financeiro',
    },
    {
      name: 'Logística',
      url: '/logistica',
    },
    {
      name: 'Marketing',
      url: '/marketing',
    },
    {
      name: 'RH',
      url: '/rh',
    },
    {
      name: 'Empresas 360',
      url: '/empresas-360',
    },
    {
      name: 'Seu Produto',
      url: '/seu-produto',
    },
  ]
  const resources = [
    {
      name: 'DevApi Academy',
      url: '/devapi-academy',
    },
    {
      name: 'Blog',
      url: '/blog',
    },
    {
      name: 'Termos de uso',
      url: '/termos-de-uso',
    },
    {
      name: 'Política de privacidade',
      url: '/politica-de-privacidade',
    },
  ]
  const company = [
    {
      name: 'Sobre',
      url: '/nosso-time',
    },
    {
      name: 'Contato',
      url: '/fale-com-um-especialista',
    },
    {
      name: 'Carreiras',
      url: 'https://devapi.gupy.io',
    },
    {
      name: 'DevApi na mídia',
      url: '/devapi-na-midia',
    },
  ]

  return (
    <>
      <FooterContainer>
        <Row>
          <Col>
            <NewsletterContainer>
              <p>
                Sua empresa totalmente
                <br />
                <span> integrada no mundo digital </span>
                <br /> de forma segura, fácil e eficiente.
              </p>
              <Newsletter>
                <Pipe />
                <TextContainer>
                  AddressContainer
                  <Title>
                    Assine <span>nossa newsletter</span>
                  </Title>
                  <SubTitle>Descubra novas ideias</SubTitle>
                </TextContainer>
              </Newsletter>
              <NewsletterForm />
            </NewsletterContainer>

            <ResponsivePipe />
            <Links title="Plataforma" links={platform} />
            <ResponsivePipe />

            <Links title="Soluções" links={soluctions} />
            <ResponsivePipe />

            <Links title="Recursos" links={resources} />

            <ResponsivePipe />
            <Links title="Empresa" links={company} />
          </Col>
        </Row>
        <Row>
          <Col content="space-between">
            <LogoContainer>
              <Logo src={'/logo/devapi-white.svg'} />
              <AddressContainer>
                <Pipe />
                <Address>
                  <span>Endereço:</span> Ed. Atrium Torre Norte - Av. Pedro
                  Taques, 294 - 13° Andar - Sala 1307 -
                  <br /> Zona 03 - CEP: 87030-008 - Maringá | PR | Brasil
                  <span> Telefone:</span> +55 (44) 3354-7410
                </Address>
              </AddressContainer>
            </LogoContainer>

            <SocialMediaContainer>
              <SocialMedia>
                Siga <span>nossas redes</span>
              </SocialMedia>
              <SocialLogocontainer>
                <Link href="https://www.instagram.com/devapi.ipaas/">
                  <a title="Instagram" target="_blank">
                    <SocialMediaLogo src="/socialMedia/instagram-primary.svg" />
                  </a>
                </Link>
                <Link href="https://www.facebook.com/DevApiOficial/">
                  <a title="Facebook" target="_blank">
                    <SocialMediaLogo src="/socialMedia/facebook-primary.svg" />
                  </a>
                </Link>
                <Link href="https://www.linkedin.com/company/devapitecnologia/">
                  <a title="Linkedin" target="_blank">
                    <SocialMediaLogo src="/socialMedia/linkedin-primary.svg" />
                  </a>
                </Link>
              </SocialLogocontainer>
            </SocialMediaContainer>
          </Col>
        </Row>
      </FooterContainer>
    </>
  )
}

export { Footer }
