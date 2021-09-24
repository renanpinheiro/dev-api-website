import React from 'react'
import { Header } from '../../components/Header'
import { theme } from '../../styles/theme'

const Teste = () => {
  return (
    <>
      <Header />
      <div
        style={{
          height: '3000px',
          overflowX: 'auto',
          backgroundColor: theme.colors.gray[100],
        }}
      >
        Teste
      </div>
    </>
  )
}

export default Teste
