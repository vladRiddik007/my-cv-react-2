import React from 'react'
import MainPage from '../../Pages/MainPage'
import Header from '../Header'

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main" style={{ minHeight: 'calc(100vh - 57px)' }}>
        <MainPage />
      </main>
    </>
  )
}

export default Layout
