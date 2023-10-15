/* eslint-disable max-len */
import React from 'react';
import { Fade } from 'react-awesome-reveal';

// components

import { Heading4, Paragraph } from './Typography';
import { TechWrapper, TechStack, BlueHighlight, PinkHighlight, MediumBlueHighlight } from './TechStyles';

const Tech = () => {
  return (
    <TechWrapper>
      <Fade
        duration={2000}>
        <Heading4>Tech</Heading4>
        <TechStack>
          <Paragraph>
            HTML5, CSS3, Flexbox, CSS Grid, <BlueHighlight>JavaScript ES6,</BlueHighlight> Styled components, <PinkHighlight>React,</PinkHighlight> React Hooks, Redux, Node.js, Mongo DB, Express.js, API:s, <MediumBlueHighlight>mob-programming,</MediumBlueHighlight> pair-programming, Github.
          </Paragraph>
        </TechStack>
      </Fade>
    </TechWrapper>
  )
}

export default Tech;