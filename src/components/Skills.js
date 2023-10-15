import React from 'react';
import { Fade } from 'react-awesome-reveal';

// components
import { Heading5Bigger, PinkHighlight, BlueHighlight, DarkBlueHighlight, GreyHighlight, ListItem } from './Typography';
import { SkillsWrapper, ListOuterWrapper, ListWrapper, List } from './SkillsStyles';

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