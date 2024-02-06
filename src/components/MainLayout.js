/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components/macro'
import Hero from 'components/Hero'
import Tech from 'components/Tech'
import Projects from 'components/Projects'
import Skills from 'components/Skills'
import Footer from 'components/Footer'
import GlobalStyle from 'components/GlobalStyles'

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin: 0;
`

const MainLayout = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <header>
        <Hero />
      </header>
      <main>
        <Tech />
        <Projects />
        <Skills />
      </main>
      <footer>
        <Footer />
      </footer>
    </Wrapper>
  )
};

export default MainLayout;