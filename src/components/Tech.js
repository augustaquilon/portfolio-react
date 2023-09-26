/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components/macro';

// components

import { Heading4, Paragraph } from './Typography';

const TechWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--blue-light);
  margin-left: -24px;
  margin-right: -24px;
  padding: 80px 0 120px 0;
  @media screen and (min-width: 668px) {
    padding: 234px 0 287px 0;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
  }
`

const TechStack = styled.div`
margin-left: 24px;
margin-right: 24px;
@media screen and (min-width: 668px) {
      width: 100%;
      max-width: 500px;
      height: auto;
    }
      `

const Highlight = styled.span`
  background: var(--pink);
  color: black;
`

const OtherHighlight = styled(Highlight)`
  background: var(--blue-royal);
  color: white;
`

const AnotherHighlight = styled(Highlight)`
background: var(--blue-medium);
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