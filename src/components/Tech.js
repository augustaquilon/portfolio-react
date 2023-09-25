/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components/macro';

// components

import { Heading4, Paragraph } from './Typography';

const TechWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  height: 530px;
  padding: 20px 20px;
  @media screen and (min-width: 1024px) {
    padding: 12em 12em;
  }
`

const TechStack = styled.div`
@media screen and (min-width: 668px) {
      width: 100%;
      max-width: 500px;
      height: auto;
    }
      `

const Highlight = styled.span`
  background: #F2CB05;
  color: black;
`

const OtherHighlight = styled(Highlight)`
  background: #F20505;
  color: white;
`

const AnotherHighlight = styled(Highlight)`
background: #2f3699;
color: white;
`

const Tech = () => {
  return (
    <TechWrapper>
      <Heading4>Tech</Heading4>
      <TechStack>
        <Paragraph>
            HTML, CSS, Flexbox, <Highlight>JavaScript,</Highlight> ES6, JSX, <OtherHighlight>React,</OtherHighlight> React Hooks, Redux, Node.js, Mongo DB, Web Accessibility, API:s, <AnotherHighlight>mob-programming,</AnotherHighlight> pair-programming, Github.
        </Paragraph>
      </TechStack>
    </TechWrapper>
  )
}

export default Tech;