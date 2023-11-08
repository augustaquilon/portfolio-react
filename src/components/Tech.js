/* eslint-disable max-len */
import React from 'react';
import { Fade } from 'react-awesome-reveal';

// components

import Blobs from 'images/splatter.png';
import { Heading4, Paragraph } from './Typography';
import { TechWrapper, TechStack, BlueHighlight, PinkHighlight, MediumBlueHighlight, BlobImage } from './TechStyles';

const Tech = () => {
  return (
    <TechWrapper>
      <Fade
        duration={2000}>
        <Heading4>Tech</Heading4>
        <TechStack>
          <Paragraph>
            HTML5, CSS3, Flexbox, CSS Grid, <BlueHighlight>JavaScript ES6,</BlueHighlight> JSX, <PinkHighlight>React,</PinkHighlight>, React Hooks, Styled components, Redux, Node.js, Mongo DB, Express.js, API:s,  pair-programming, <MediumBlueHighlight>mob-programming,</MediumBlueHighlight>Github.
          </Paragraph>
        </TechStack>
        <BlobImage src={Blobs} alt="paint splatter" />
      </Fade>
    </TechWrapper>
  )
}

export default Tech;