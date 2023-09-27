import React from 'react';
import styled from 'styled-components/macro';
import { Fade } from 'react-awesome-reveal';

// components
import { Heading5Bigger, PinkHighlight, BlueHighlight, DarkBlueHighlight, GreyHighlight, ListItem } from './Typography';

const SkillsWrapper = styled.section`
  display: flex;
  margin-left: -24px;
  margin-right: -24px;
  flex-direction: column;
  align-items: center;
  background: white;
  padding-top: 64px;
  padding-bottom: 147px;
  background-color: var(--pink-light);
  @media screen and (min-width: 668px) {
    padding-top: 121px;
    padding-bottom: 155px;
  }
`

const ListOuterWrapper = styled.div`
margin-left: 24px;
  margin-right: 24px;
@media screen and (min-width: 668px) {
  display: grid;
  grid-template-columns: 1fr 1fr;
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

const List = styled.ul`
text-align: center;
@media screen and (min-width: 668px) {
  text-align: left;
}
`

// arrays

const CodeSkills = ['HTML5', 'CSS3', 'Javascript ES6', 'React.js', 'Styled components', 'Github', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose'];

const ToolboxSkills = ['Postman', 'Figma', 'MongoDB Atlas', 'MongoDB Compass', 'Slack'];

const MoreSkills = ['Agile methodology', 'Web Accessibility', 'Time management', 'Growth mindset'];

const UpcomingSkills = ['SCSS', 'Typescript', 'Midjourney', 'React Native'];

const Skills = () => {
  return (
    <SkillsWrapper>
      <Fade
        duration={2000}>
        <Heading5Bigger>
            Skills
        </Heading5Bigger>
        <ListOuterWrapper>
          <ListWrapper>
            <PinkHighlight>Code </PinkHighlight>
            <List>
              {CodeSkills.map((item) => <ListItem key={item}>{item}</ListItem>)}
            </List>
          </ListWrapper>
          <ListWrapper>
            <BlueHighlight>Toolbox </BlueHighlight>
            <List>
              {ToolboxSkills.map((item) => <ListItem key={item}>{item}</ListItem>)}
            </List>
          </ListWrapper>
          <ListWrapper>
            <DarkBlueHighlight>More </DarkBlueHighlight>
            <List>
              {MoreSkills.map((item) => <ListItem key={item}>{item}</ListItem>)}
            </List>
          </ListWrapper>
          <ListWrapper>
            <GreyHighlight>Upcoming </GreyHighlight>
            <List>
              {UpcomingSkills.map((item) => <ListItem key={item}>{item}</ListItem>)}
            </List>
          </ListWrapper>
        </ListOuterWrapper>
      </Fade>
    </SkillsWrapper>
  )
}

export default Skills;