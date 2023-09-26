/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components/macro'
import Hero from 'components/Hero'
import Tech from 'components/Tech'
import Projects from 'components/Projects'
import Skills from 'components/Skills'
import Footer from 'components/Footer'
import GlobalStyle from 'components/GlobalStyles'

const OuterWrapper = styled.div`
  width: 100%;
  height: auto;
  margin: 0;
`
const InnerWrapper = styled.div`
margin: 24px;
`

export const App = () => {
  return (
    <OuterWrapper>
      <GlobalStyle />
      <InnerWrapper>
        <Hero />
        <main>
          <Tech />
          <Projects />
          <Skills />
        </main>
        <Footer />
      </InnerWrapper>
    </OuterWrapper>

  )
}
