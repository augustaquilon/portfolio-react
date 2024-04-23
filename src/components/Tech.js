/* eslint-disable max-len */
import React from 'react';
import { Fade } from 'react-awesome-reveal';

// components

import { Heading4, PurpleParagraph } from './Typography';
import { TechWrapper, TechStack, PurpleHighlight, YellowHighlight, BlueHighlight } from './TechStyles';

const Tech = () => {
  return (
    <TechWrapper>
      <Fade
        duration={2000}>
        <Heading4>Stack</Heading4>
        <TechStack>
          <PurpleParagraph>
            HTML5, CSS3, Flexbox, Grid, JavaScript ES6, TypeScript, <PurpleHighlight>React.js</PurpleHighlight>, Styled components, Redux, Next.js, Node.js, MongoDB, Express.js, Figma, <BlueHighlight>REST API Design</BlueHighlight>,  pair-programming, mob-programming, <YellowHighlight>Git</YellowHighlight>.
          </PurpleParagraph>
        </TechStack>
      </Fade>
    </TechWrapper>
  )
};

export default Tech;