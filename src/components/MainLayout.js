import React, { useRef, forwardRef } from 'react'
import styled from 'styled-components/macro'
import Hero from 'components/Hero'
import Tech from 'components/Tech'
import Projects from 'components/Projects'
import Skills from 'components/Skills'
import Footer from 'components/Footer'
import GlobalStyle from 'components/GlobalStyles'
import ArrowNavigation from './ArrowNavigation'

const OuterWrapper = styled.div`
  width: 100%;
  height: auto;
  margin: 0;
`
const InnerWrapper = styled.div`
margin: 0 24px 0 24px;
`

const MainLayout = forwardRef(() => {
  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null)
  };
  return (
    <OuterWrapper>
      <GlobalStyle />
      <InnerWrapper>
        <Hero />
        <main>
          <Tech ref={sectionRefs.section1} />
          <Projects ref={sectionRefs.section2} />
          <Skills ref={sectionRefs.section3} />
        </main>
        <Footer ref={sectionRefs.section4} />
        <ArrowNavigation sectionRefs={sectionRefs} />
      </InnerWrapper>
    </OuterWrapper>
  )
});

export default MainLayout;