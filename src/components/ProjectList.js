/* eslint-disable max-len */
import HappyThoughtsImg from 'images/happy-thoughts-img.jpg';
import ToDoImg from 'images/todo-app-img.jpg';
import DesignImg from 'images/design-handoff-img.jpg';
import MovieImg from 'images/tv-releases-img.jpg';
import LabyrinthImg from 'images/labyrinth-img.jpg';
import WeatherImg from 'images/weather-app-img.jpg';
import MusicImg from 'images/music-img.jpg';
import CatImg from 'images/catbot-img.jpg';
import GameImg from 'images/guesswho-img.jpg';
import SurveyImg from 'images/survey-img.jpg';
import QuizImg from 'images/quiz-img.jpg';

export const projectList = [
  {
    title: 'Coming up: The Arcade',
    img: '',
    alt: 'picture of computer',
    description: '',
    tech: ['HTML', 'CSS', 'Figma', 'JavaScript', 'API', 'React', 'MongoDB', 'Express.js', 'Node.js'],
    demo: '',
    hasBackendCode: true,
    code: {
      frontend: '',
      backend: ''
    }
  },
  {
    title: '🌟 Happy Thoughts: Spreading Positivity, One Post at a Time 🌞',
    img: `${HappyThoughtsImg}`,
    alt: 'picture of computer',
    description: 'Introducing "Happy Thoughts," a heartwarming project much like Twitter, but with a kinder touch. This full-stack platform is designed to inspire and uplift. The frontend is built with React, while the backend is powered by the MERN stack (MongoDB, Express.js, React, and Node.js). Ready to send a little love?',
    tech: ['HTML', 'CSS', 'JavaScript', 'API', 'React', 'Express.js', 'MongoDB', 'Node.js'],
    demo: 'https://ninos-happy-thoughts.netlify.app/',
    hasBackendCode: true,
    code: {
      frontend: '',
      backend: ''
    }
  },
  {
    title: '✅🌟 TaskBliss: Your Cute and Organized TodoList App 📝🎨',
    img: `${ToDoImg}`,
    alt: 'picture of computer',
    description: 'Say goodbye to chaos and hello to productivity with TaskBliss! This delightful TodoList app, built using React, Redux Toolkit, and styled components, is designed to keep you organized and smiling. With charming illustrations, its a visual treat as well! Ready to declutter your day and add a sprinkle of cuteness?',
    tech: ['JavaScript', 'Redux', 'React', 'Styled Components'],
    demo: 'https://ninos-todos.netlify.app/',
    hasBackendCode: false,
    code: 'https://github.com/codeandjazz/project-todos'
  },
  {
    title: '🧠 The Last Quiz: Your Ultimate AI Knowledge Challenge 🤖',
    img: `${QuizImg}`,
    alt: 'picture of computer',
    description: 'Prepare to put your AI knowledge to the test with "The Last Quiz"! This React-based quiz, featuring styled components and Redux, is the result of a collaborative effort between five talented individuals: Carol Pinzon, Malin Skill, Josefin Robertsson, Emma Engvall, and Nino Aquilon. Engage with thought-provoking questions in a sleek, user-friendly interface.',
    tech: ['Styled Components', 'JavaScript', 'Redux', 'React', 'Mob-Programming'],
    demo: 'https://the-last-quiz.netlify.app/',
    hasBackendCode: false,
    code: 'https://github.com/JosefinRobertsson/project-redux-quiz'
  },
  {
    title: '🎨 Design Harmony: Bridging UX Vision to Code Reality 🌟',
    img: `${DesignImg}`,
    alt: 'picture of computer',
    description: 'In this collaborative project, a team of six, including five developers (Josefin Robertsson, Oscar Sindemark, Sammy Olsson, Yu Miao and Nino Aquilon) and one talented UX design student (Angelica Grönberg Valdes), worked closely together. Our mission? To transform Angelicas creative Figma designs for a yoga studios digital presence into pixel-perfect code. Our focus was on visual design and effective designer-developer communication - no functionality involved.',
    tech: ['HTML', 'CSS', 'React', 'Styled components', 'Figma', 'Mob-programming'],
    demo: 'https://ninos-design-handoff.netlify.app/',
    hasBackendCode: false,
    code: 'https://github.com/codeandjazz/project-design-handoff'
  },
  {
    title: '🎬 MovieMania: Your Cinematic Hub for the Latest Film Releases 🍿',
    img: `${MovieImg}`,
    alt: 'picture of computer',
    description: 'Experience the magic of cinema like never before with MovieMania, a multi-page web application meticulously crafted in React. Developed in collaboration with the talented Daniel Brobäck, MovieMania is your ultimate destination for staying in the know about the latest movie releases. Enjoy a sleek and intuitive design that enhances your movie discovery experience, as well as real-time data sourced from a public API.',
    tech: ['HTML', 'CSS', 'JavaScript', 'API', 'React', 'Pair-Programming'],
    demo: 'https://heartfelt-torrone-e608c2.netlify.app/',
    hasBackendCode: false,
    code: 'https://github.com/codeandjazz/project-movies'
  },
  {
    title: '🌊 CaveQuest: Dive into the Enchanting World of Sea Caves 🌊',
    img: `${LabyrinthImg}`,
    alt: 'picture of computer',
    description: 'Prepare to embark on an adventure like no other with CaveQuest, a captivating text-based labyrinth game meticulously crafted in React and powered by Redux. Partnering with the talented Malin Skill, we bring you a journey into the mysterious and breathtaking realm of sea caves. Careful, or you might get lost!',
    tech: ['React', 'Redux'],
    demo: 'https://zippy-vacherin-041127.netlify.app/',
    hasBackendCode: false,
    code: 'https://github.com/codeandjazz/project-labyrinth'
  },
  {
    title: '📝 MelodyMood: Your Musical Survey Adventure 🎶',
    img: `${SurveyImg}`,
    alt: 'picture of computer',
    description: 'Experience surveys in a whole new way with MelodyMood! This React-powered survey features custom radio buttons and checkboxes, input validation, and full accessibility, all wrapped in adorable illustrations. Share your musical tastes and emotions effortlessly.',
    tech: ['HTML', 'JavaScript', 'React', 'CSS'],
    demo: 'https://music-survey-react.netlify.app/',
    hasBackendCode: false,
    code: 'https://github.com/codeandjazz/project-survey'
  },
  {
    title: '🌦️ WeatherMate: Your Dynamic Weather Forecast App 🌍',
    img: `${WeatherImg}`,
    alt: 'picture of computer',
    description: 'Get weather-ready with WeatherMate, a location-based app developed in collaboration with Emma Engvall. See the next 5 days weather, complete with changing colors, icons, and descriptions reflecting real-time conditions. Powered by public API data and built with HTML, CSS, and Vanilla JS, its your go-to weather companion.',
    tech: ['HTML', 'CSS', 'JavaScript', 'API', 'Pair-Programming'],
    demo: 'https://hippos-weather.netlify.app/',
    hasBackendCode: false,
    code: 'https://github.com/EmmaEngvall/project-weather-app'
  },
  {
    title: '🎶 Discover Music: Your Ultimate Music Release App 🚀',
    img: `${MusicImg}`,
    alt: 'picture of computer',
    description: 'Explore the world of music with our sleek React-powered app, crafted in collaboration with Theres Brännberg Lendt. Stay up-to-date with the latest releases, dive into artist profiles, and find fresh songs for your playlists. Start your musical journey today!',
    tech: ['HTML', 'CSS', 'JavaScript', 'API', 'React', 'Pair-Programming'],
    demo: 'https://t-and-t-music-release-app.netlify.app/',
    hasBackendCode: false,
    code: 'https://github.com/theresBL/project-music-releases'
  },
  {
    title: '🔍 Guess Who: Animal Edition 🐾',
    img: `${GameImg}`,
    alt: 'picture of computer',
    description: 'Step into the animal kingdom with my captivating "Guess Who" game! Built using HTML, CSS, and vanilla JS, test your deduction skills by asking yes-or-no questions to identify the secret animal character. Its family-friendly fun with a wild twist!',
    tech: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://ninos-guess-who.netlify.app/',
    hasBackendCode: false,
    code: 'https://github.com/codeandjazz/project-guess-who'
  },
  {
    title: '🐱 Bob the C(h)atbot 🐱',
    img: `${CatImg}`,
    alt: 'picture of computer',
    description: 'Meet Bob, the whimsical chatbot with a feline twist! Built using HTML, CSS, and vanilla JS, Catbot is your playful virtual friend who purrs, meows, and adds a touch of fangs to your online experience.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://bob-the-catbot.netlify.app/',
    hasBackendCode: false,
    code: 'https://github.com/codeandjazz/project-chatbot'
  }
]