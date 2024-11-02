import React from 'react'
import Head from '../components/head'
import About from '../components/about'
import Categorie from '../components/categorie'
import Bookin from '../components/bookin'
import Menu from '../components/meu'

export default function HomePage() {
  return (
    <div>
    <Head />
    <About />
    <Categorie />
    <Menu />
    <Bookin />
    </div>
  )
}
