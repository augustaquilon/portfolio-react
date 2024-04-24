/* eslint-disable max-len */
import HappyThoughtsImg from 'images/happy-thoughts-img.jpg';
import ToDoImg from 'images/todo-app-img.jpg';
import DesignImg from 'images/design-handoff-img.jpg';
import MovieImg from 'images/tv-releases-img.jpg';
import LabyrinthImg from 'images/labyrinth-img.jpg';
import WeatherImg from 'images/weather-app-img.jpg';
import MusicImg from 'images/music-img.jpg';
import CustomerImg from 'images/customer-care.jpg';
import GameImg from 'images/guesswho-img.jpg';
import SurveyImg from 'images/survey-img.jpg';
import QuizImg from 'images/quiz-img.jpg';
import SunriseImg from 'images/sunrise-img.jpg';
import ProjectAuthImg from 'images/auth-img.jpg';
import ExpressImg from 'images/express-img.jpg';
import TitImg from 'images/tit-img.png';

export const projectList = [
  {
    title: '🦋 Dora x Minh 3D Website Challenge',
    img: `${SunriseImg}`,
    alt: 'a cute 3D illustration of a sunrise',
    description: 'A synesthetic fusion of sight and sound crafted with Dora, the No-Code 3D website building tool.',
    tech: ['DORA', 'NO CODE', 'MIDJOURNEY', 'GENERATIVE AI'],
    demo: 'https://sunriise.dora.run/',
    hasBackendCode: false,
    isNoCode: true,
    code: 'https://sunriise.dora.run/'
  },
  {
    title: '🌟 Happy Thoughts: Spreading Positivity, One Post at a Time',
    img: `${HappyThoughtsImg}`,
    alt: 'a cute 3D illustration of a computer',
    description: '"Happy Thoughts" is a full-stack application designed to inspire and uplift, built using the MERN-stack (MongoDB, Express.js, React, Node.js.) Imagine Twitter/X, but with a kinder touch! Ready to send a little love?',
    tech: ['REACT', 'CSS', 'MONGO DB', 'EXPRESS', 'NODE', 'REST API'],
    demo: 'https://ninos-happy-thoughts.netlify.app/',
    hasBackendCode: true,
    isNoCode: false,
    code: {
      frontend: 'https://github.com/codeandjazz/project-happy-thoughts',
      backend: 'https://github.com/codeandjazz/project-happy-thoughts-REST API'
    }
  },
  {
    title: '🔐 Project Authentication: Your Secure Login System',
    img: `${ProjectAuthImg}`,
    alt: 'a cute 3D illustration of geometric shapes',
    description: 'This project is a secure login system, built using the MERN stack (MongoDB, Express.js, React and Node.js.) featuring password encryption and validation, as well as a user-friendly interface. Ready to log in or register?',
    tech: ['REACT', 'CSS', 'MONGO DB', 'EXPRESS', 'NODE', 'REST API'],
    demo: 'https://ninos-project-auth.netlify.app/',
    hasBackendCode: true,
    isNoCode: false,
    code: {
      frontend: 'https://github.com/codeandjazz/project-auth',
      backend: 'https://github.com/codeandjazz/project-auth'
    }
  },
  {
    title: '🌐 Project Express REST API: Your RESTful REST API',
    img: `${ExpressImg}`,
    alt: 'a cute 3D illustration of a computer',
    description: 'This project is a RESTful API, built using Express.js and deployed on Render. It features data from the Trans Rights Indicator Project (TRIP) which provides country-year data on legal rights protections relevant to transgender minorities (Williamson 2023). The data includes 14 trans-specific variables for 173 countries from 2000 to 2021. Ready to explore different routes?',
    tech: ['EXPRESS', 'NODE', 'REST API'],
    demo: 'https://project-express-api-25hw.onrender.com/',
    hasBackendCode: false,
    isNoCode: false,
    code: 'https://github.com/codeandjazz/project-express-api'
  },
  {
    title: '✅ TaskBliss: Your Cute and Organized TodoList App',
    img: `${ToDoImg}`,
    alt: 'a cute 3D illustration of a coffee table',
    description: 'With TaskBliss, you can say goodbye to chaos and hello to productivity! This React application uses Redux for state-management and is designed to keep all your to-dos in one place. With charming vector illustrations from DrawKit, it is a visual treat as well. Ready to declutter your day?',
    tech: ['REACT', 'REDUX'],
    demo: 'https://ninos-todos.netlify.app/',
    hasBackendCode: false,
    isNoCode: false,
    code: 'https://github.com/codeandjazz/project-todos'
  },
  {
    title: '🤖 The Last Quiz: Your Ultimate AI Knowledge Challenge',
    img: `${QuizImg}`,
    alt: 'a cute 3D illustration of a computer',
    description: 'Prepare to put your AI knowledge to the test with "The Last Quiz"! This React app uses Redux for state-management and is the result of a collaborative effort between five developers (Carol Pinzon, Malin Skill, Josefin Robertsson, Emma Engvall, and Nino Aquilon.) Engage with thought-provoking questions in a sleek, user-friendly interface.',
    tech: ['REACT', 'REDUX', 'TEAMWORK'],
    demo: 'https://the-last-quiz.netlify.app/',
    hasBackendCode: false,
    isNoCode: false,
    code: 'https://github.com/JosefinRobertsson/project-redux-quiz'
  },
  {
    title: '🎨 Yogistudio: Bridging UX Vision to Code Reality',
    img: `${DesignImg}`,
    alt: 'a cute 3D illustration of a tablet device',
    description: 'In this project, five developers (Josefin Robertsson, Oscar Sindemark, Sammy Olsson, Yu Miao and Nino Aquilon) and one talented UX design student (Angelica Grönberg Valdes) worked closely together to transform Angelicas Figma designs into pixel-perfect code. No functionality involved – the focus was on visual design and effective designer-developer communication.',
    tech: ['REACT', 'CSS', 'FIGMA', 'TEAMWORK'],
    demo: 'https://ninos-design-handoff.netlify.app/',
    hasBackendCode: false,
    isNoCode: false,
    code: 'https://github.com/codeandjazz/project-design-handoff'
  },
  {
    title: '🍿 MovieMania: Your Cinematic Hub for the Latest Film Releases',
    img: `${MovieImg}`,
    alt: 'a cute 3D illustration of a TV',
    description: 'MovieMania is a multi-page React web application developed in collaboration with Daniel Brobäck, and is the ultimate destination for staying in the know about the latest movie releases. Enjoy a sleek and intuitive design, as well as real-time data sourced from a public REST API.',
    tech: ['REACT', 'CSS', 'REST API', 'TEAMWORK'],
    demo: 'https://heartfelt-torrone-e608c2.netlify.app/',
    hasBackendCode: false,
    isNoCode: false,
    code: 'https://github.com/codeandjazz/project-movies'
  },
  {
    title: '🌊 CaveQuest: Dive into the Enchanting World of Sea Caves',
    img: `${LabyrinthImg}`,
    alt: 'a cute 3D illustration of a computer',
    description: 'Prepare to embark on a text-based adventure with CaveQuest, a React app created in collaboration with Malin Skill using Redux for state-management. We bring you on a journey into the breathtaking realm of sea caves. Careful, or you might get lost!',
    tech: ['REACT', 'REDUX', 'TEAMWORK'],
    demo: 'https://zippy-vacherin-041127.netlify.app/',
    hasBackendCode: false,
    isNoCode: false,
    code: 'https://github.com/codeandjazz/project-labyrinth'
  },
  {
    title: '📝 MelodyMood: Your Musical Survey',
    img: `${SurveyImg}`,
    alt: 'a cute 3D illustration of headphones and a coffee cup',
    description: 'This survey is both inclusive and fun. It uses React for state management and features custom radio buttons and checkboxes, input validation, and full accessibility. Enjoy answering five music-related questions in five minutes, while looking at vector illustrations from DrawKit that add a splash of excitement and joy.',
    tech: ['REACT', 'CSS', 'WEB ACCESSIBILITY'],
    demo: 'https://music-survey-react.netlify.app/',
    hasBackendCode: false,
    isNoCode: false,
    code: 'https://github.com/codeandjazz/project-survey'
  },
  {
    title: '🌦️ WeatherMate: Your Dynamic Weather Forecast App',
    img: `${WeatherImg}`,
    alt: 'a cute 3D illustration of a mobile device',
    description: 'Get weather-ready with WeatherMate, a location-based app developed in collaboration with Emma Engvall. See the next 5 days weather, complete with changing colors, icons, and descriptions reflecting real-time conditions. With data sourced from a public API, it is your go-to weather companion.',
    tech: ['HTML', 'CSS', 'JS', 'REST API', 'TEAMWORK'],
    demo: 'https://hippos-weather.netlify.app/',
    hasBackendCode: false,
    isNoCode: false,
    code: 'https://github.com/EmmaEngvall/project-weather-app'
  },
  {
    title: '🚀 Discover Music: Your Ultimate Music Release App',
    img: `${MusicImg}`,
    alt: 'a cute 3D illustration of a mobile device',
    description: 'Stay up-to-date with the latest releases, dive into artist profiles, and find fresh songs for your playlists with this sleek React app, crafted in collaboration with Theres Brännberg Lendt and gathering information from a public API.',
    tech: ['REACT', 'CSS', 'REST API', 'TEAMWORK'],
    demo: 'https://t-and-t-music-release-app.netlify.app/',
    hasBackendCode: false,
    isNoCode: false,
    code: 'https://github.com/theresBL/project-music-releases'
  },
  {
    title: '🔍 Guess Who: Animal Edition',
    img: `${GameImg}`,
    alt: 'a cute 3D illustration of a game controller',
    description: 'Test your deduction skills in this family-friendly "Guess Who" game with a wild twist. The game is built with DOM programming and features a pack of twenty five adorable vector illustrations from DrawKit.',
    tech: ['HTML', 'CSS', 'JS', 'DOM programming'],
    demo: 'https://ninos-guess-who.netlify.app/',
    hasBackendCode: false,
    isNoCode: false,
    code: 'https://github.com/codeandjazz/project-guess-who'
  },
  {
    title: '💕 Customer Care Bot',
    img: `${CustomerImg}`,
    alt: 'a vector illustration of smiling customers',
    description: 'This chatbot built from HTML, CSS and a little bit of JS cares for your imaginary customers, with inspiration for the sleek user-friendly design taken from Dribble.',
    tech: ['HTML', 'CSS', 'JS', 'DOM programming'],
    demo: 'https://customer-care-bot.onrender.com/',
    hasBackendCode: false,
    isNoCode: false,
    code: 'https://github.com/codeandjazz/project-chatbot'
  },
  {
    title: '💕 Trans In Tech',
    img: `${TitImg}`,
    alt: 'a vector illustration of smiling customers',
    description: 'Trans in Tech, or TIT for short, is an imaginary community project for and by trans people that operate within the tech industry. The website is built entirely by manipulating the DOM and features a cool vanilla JS hero animation aswell as adorable vector illustrations, created using the Blush plugin for Figma. Check it out!',
    tech: ['HTML', 'CSS', 'JS', 'Figma', 'DOM programming'],
    demo: 'https://transintech.netlify.app/',
    hasBackendCode: false,
    isNoCode: false,
    code: 'https://github.com/codeandjazz/trans-in-tech'
  }
]