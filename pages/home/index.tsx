import React from 'react'
import { Header } from '../../components/Header'
import { theme } from '../../styles/theme'

const Home = () => {
  return (
    <>
      <Header />
      <div
        style={{
          height: '3000px',
          overflowX: 'auto',
          backgroundColor: theme.colors.white,
        }}
      >
        HOME
      </div>
    </>
  )
}

export default Home
