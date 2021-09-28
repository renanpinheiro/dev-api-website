import React from 'react'
import { VscChromeClose } from 'react-icons/vsc'

import { useRouter } from 'next/router'

import Link from '../Link'
import SocialVertical from './Social'
import * as S from './styles'

const Menu = ({ open, close }) => {
  const pageCurrent = useRouter().pathname

  return (
    <>
      <S.Overlay isOverlay={open} />

      <S.Menu open={open}>
        <S.Container>
          <S.Close onClick={close}>
            <span>Fechar</span>
            <VscChromeClose />
          </S.Close>

          <S.Nav>
            <ul>
              <li>
                <Link href="/" activeClassName="activeLink">
                  <a title="Home" onClick={close}>
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <h6
                  className={
                    pageCurrent === '/integracoes' ||
                    pageCurrent === '/api-management' ||
                    pageCurrent === '/conectores'
                      ? 'activeLink'
                      : ''
                  }
                >
                  Soluções
                </h6>
                <S.Subnav>
                  <ul>
                    <li>
                      <Link href="/integracoes" activeClassName="active">
                        <a title="Integrações" onClick={close}>
                          Integrações
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/api-management" activeClassName="active">
                        <a title="API Management" onClick={close}>
                          API Management
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/conectores" activeClassName="active">
                        <a title="Conectors" onClick={close}>
                          Conectores
                        </a>
                      </Link>
                    </li>
                  </ul>
                </S.Subnav>
              </li>
              <li>
                <Link href="/blog" activeClassName="activeLink">
                  <a title="Blog" onClick={close}>
                    Blog
                  </a>
                </Link>
              </li>
              <li>
                <h6
                  className={
                    pageCurrent === '/nosso-time' ||
                    pageCurrent === '/fale-com-um-especialista'
                      ? 'activeLink'
                      : ''
                  }
                >
                  Empresa
                </h6>

                <S.Subnav>
                  <ul>
                    <li>
                      <Link href="/nosso-time" activeClassName="active">
                        <a title="Sobre" onClick={close}>
                          Sobre
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/fale-com-um-especialista"
                        activeClassName="active"
                      >
                        <a title="Contato" onClick={close}>
                          Contato
                        </a>
                      </Link>
                    </li>
                  </ul>
                </S.Subnav>
              </li>
              <li>
                <Link href="/planos" activeClassName="activeLink">
                  <a title="Planos" onClick={close}>
                    Planos
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://app.devapi.com.br">
                  <a title="Login">Login</a>
                </Link>
              </li>
            </ul>
          </S.Nav>

          <SocialVertical />

          <S.BgCicle />

          <S.SignUp>Fazer teste gratuito</S.SignUp>
        </S.Container>
      </S.Menu>
    </>
  )
}

export default Menu
