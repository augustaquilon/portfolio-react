/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components/macro';

// components

import { Heading4, Paragraph } from './Typography';

const TechWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--pink-light);
  margin-left: -24px;
  margin-right: -24px;
  padding: 80px 0 120px 0;
  @media screen and (min-width: 668px) {
    padding: 234px 0 287px 0;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    padding-left: 230px;
    padding-right: 230px;
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
  background: var(--blue-royal);
  color: white;
  padding: 1px;
`

const SecondHighlight = styled(Highlight)`
  background: var(--pink);
  color: white;
`

const ThirdHighlight = styled(Highlight)`
background: var(--blue-medium);
color: white;
`

const Tech = () => {
  return (
    <TechWrapper>
      <Heading4>Tech</Heading4>
      <TechStack>
        <Paragraph>
            HTML5, CSS3, Flexbox, CSS Grid, <Highlight>JavaScript ES6,</Highlight> <SecondHighlight>React,</SecondHighlight> Redux, Styled components, Node.js, Mongo DB, Express.js, API:s, <ThirdHighlight>mob-programming,</ThirdHighlight> pair-programming, Github.
        </Paragraph>
      </TechStack>
    </TechWrapper>
  )
}

export default Tech;