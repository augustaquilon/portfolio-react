import React from "react";

const Skills = () => {
    return(
        <section class="skills-container">
        <section class="skills-content">
          <h4>
            Skills
          </h4>
          <section class="skill-list">
              <section id="code-skills">
                <p class="skill" id="code">Code </p>         
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
              </section>
              <section id="toolbox-skills">
                <p class="skill" id="toolbox">Toolbox </p>
                  <ul>
                    <li>Postman</li>
                    <li>Figma</li>
                    <li>Slack</li>
                  </ul>
              </section>
          </section>
          <section class="skill-list">
              <section id="more-skills">
                <p class="skill" id="more">More </p>
                  <ul>
                    <li>Agile methodology</li>
                    <li>Leadership</li>
                    <li>Time management</li>
                    <li>Growth mindset</li>
                  </ul>
              </section>
              <section id="upcoming-skills">
                <p class="skill" id="upcoming">Upcoming </p>
                  <ul>
                    <li>React Native</li>
                    <li>Typescript</li>
                    <li>Sass</li>
                    <li>Tailwind</li>
                  </ul>
              </section>
            </section>
        </section>
      </section>
    )
}

export default Skills;