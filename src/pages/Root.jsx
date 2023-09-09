import React from 'react'
import Header from '../containers/Header/Header'
import Footer from '../containers/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Root