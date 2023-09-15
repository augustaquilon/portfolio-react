/* eslint-disable linebreak-style */
import React from 'react'
import Hero from 'components/Hero'
import Tech from 'components/Tech'
import Projects from 'components/Projects'
import Skills from 'components/Skills'
import Footer from 'components/Footer'
import GlobalStyle from 'components/GlobalStyles'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <Tech />
      <Projects />
      <Skills />
      <Footer />
    </>

  )
}
