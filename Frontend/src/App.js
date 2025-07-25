import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router'


function App() {


  return (

    <>
      <Header />
      <Outlet />
      {/* Outlet can take three possible values </Body> <About/> <ContactUs/> */}
      <Footer />
    </>

  )
}

export default App

