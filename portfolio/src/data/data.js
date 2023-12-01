import rollImg from '../assets/roll.png';
import reactImg from '../assets/react.png';
import flightImg from '../assets/flight.png';

function generateLoremIpsum(wordCount) {
  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return loremIpsum.split(' ').slice(0, wordCount).join(' ') + '.';
}
export const myProjects = [

  {
    title: 'Roll The Dice',
    description: 'Roll the dice game with cool AI feature'+ generateLoremIpsum(9),
    netlifyLink: 'https://sifadodice.netlify.app',
    githubLink: 'https://github.com/LironSif/RollDice',
    image: rollImg, 
  },
  {
    title: 'React Code',
    description: 'First React code along' + generateLoremIpsum(5),
    netlifyLink: 'https://recat-sifado.netlify.app/',
    githubLink: 'https://github.com/LironSif/react-code-along',
    image: reactImg
  },
  {
    title: 'Flight Booker',
    description: 'Flight booking app '+ generateLoremIpsum(15),
    netlifyLink: 'https://sifi-booking.netlify.app/',
    githubLink: 'https://github.com/LironSif/Flightbrooker',
    image: flightImg
  }
];
