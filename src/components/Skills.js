import React from 'react';
import { Fade } from 'react-awesome-reveal';

// components
import { Heading5Bigger, PinkHighlight, YellowHighlight, DarkBlueHighlight, GreenHighlight } from './Typography';
import { SkillsWrapper, ListOuterWrapper, ListWrapper, List, ListItem } from './SkillsStyles';

// arrays

const CodeSkills = ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'JavaScript ES6', 'TypeScript', 'React.js', 'Styled components', 'Github', 'Redux', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API Design'];

const ToolboxSkills = ['Visual Studio Code', 'Google Cloud', 'Netlify', 'Render', 'Vercel', 'Dev Tools', 'MongoDB Compass', 'Midjourney AI', 'ChatGPT', 'Postman', 'Figma', 'Slack', 'Notion'];

const MoreSkills = ['Teamwork', 'Communication', 'Growth mindset', 'Pair-programming', 'Mob-programming', 'Agile methodology', 'Accessibility', 'Unit Tests', 'Time management', 'Design principles', 'Web UX Design'];

const UpcomingSkills = ['Svelte', 'SvelteKit', 'Vue.js', 'D3.js'];

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
            <GreenHighlight>Want to learn </GreenHighlight>
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