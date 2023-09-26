import React from 'react';
import styled from 'styled-components/macro';

// components
import { Heading5Bigger } from './Typography';

const SkillsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 20px 20px;
  background-color: var(--beige);
`

const ListOuterWrapper = styled.div`
@media screen and (min-width: 668px) {
  display: flex;
  margin-top: 2em;
  margin-bottom: 3em;
};
@media screen and (min-width: 1024px) {
  display: flex;
  flex-direction: row;
  margin-bottom: 3em;
}
`

const ListWrapper = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2em;
  @media screen and (min-width: 668px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 2em;
  }
`

const Skills = () => {
  return (
    <SkillsWrapper>
      <Heading5Bigger>
            Skills
      </Heading5Bigger>
      <ListOuterWrapper>
        <ListWrapper>
          <p className="skill" id="code">Code </p>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript ES6</li>
            <li>React</li>
            <li>Styled Components</li>
            <li>GitHub</li>
            <li>Redux</li>
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>
        </ListWrapper>
        <ListWrapper>
          <p className="skill" id="toolbox">Toolbox </p>
          <ul>
            <li>Postman</li>
            <li>Figma</li>
            <li>Slack</li>
          </ul>
        </ListWrapper>
      </ListOuterWrapper>
      <ListOuterWrapper>
        <ListWrapper>
          <p className="skill" id="more">More </p>
          <ul>
            <li>Agile methodology</li>
            <li>Leadership</li>
            <li>Time management</li>
            <li>Growth mindset</li>
          </ul>
        </ListWrapper>
        <ListWrapper>
          <p className="skill" id="upcoming">Upcoming </p>
          <ul>
            <li>React Native</li>
            <li>Typescript</li>
            <li>Sass</li>
            <li>Tailwind</li>
          </ul>
        </ListWrapper>
      </ListOuterWrapper>
    </SkillsWrapper>
  )
}

export default Skills;