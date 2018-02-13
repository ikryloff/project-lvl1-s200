import readlineSync from 'readline-sync';

const introduction = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

export default introduction;
