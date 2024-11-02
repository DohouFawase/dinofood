import React from 'react'
import {  Outlet } from 'react-router-dom'
import Nav from '../components/navigation/nav'
import Footer from '../components/navigation/footer'

export default function Layouts() {
  return (
    <div>
        <Nav />
      <Outlet />
      <Footer/>
    </div>
  )
}
