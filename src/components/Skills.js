import React from 'react';
import { Fade } from 'react-awesome-reveal';

// components
import { Heading5Bigger, PinkHighlight, YellowHighlight, DarkBlueHighlight, GreenHighlight } from './Typography';
import { SkillsWrapper, ListOuterWrapper, ListWrapper, List, ListItem } from './SkillsStyles';

// arrays

const CodeSkills = ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'JavaScript ES6', 'React.js', 'Styled components', 'Github', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Server-side programming', 'REST API Design'];

const ToolboxSkills = ['Visual Studio Code', 'Unit Tests', 'Dev Tools', 'Google', 'Midjourney', 'Generative AI', 'ChatGPT', 'Postman', 'Figma', 'Slack', 'Notion'];

const MoreSkills = ['Teamwork', 'Growth mindset', 'Pair-programming', 'Mob-programming', 'Agile methodology', 'Accessibility', 'Time management', 'Design principles', 'Webpage Performance'];

const UpcomingSkills = ['Next.js', 'TypeScript', 'Svelte', 'SvelteKit', 'Vue.js', 'Data Visualization', 'D3.js'];

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
            <YellowHighlight>Toolbox </YellowHighlight>
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
            <GreenHighlight>Upcoming </GreenHighlight>
            <List>
              {UpcomingSkills.map((item) => <ListItem key={item}>{item}</ListItem>)}
            </List>
          </ListWrapper>
        </ListOuterWrapper>
      </Fade>
    </SkillsWrapper>
  )
};

export default Skills;