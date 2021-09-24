import React from 'react'
import { Header } from '../../components/Header'
import { theme } from '../../styles/theme'

const Home = () => {
  return (
    <>
      <Header />
      <div
        style={{
          height: '300px',
          overflowX: 'auto',
          backgroundColor: theme.colors.gray[100],
        }}
      >
        HOME
      </div>
    </>
  )
}

export default Home
