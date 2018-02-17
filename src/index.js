import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

// Engine funcs

const greeting = (text) => {
  console.log(`Welcome to the Brain Games!\n${text}`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

const congratulations = name => console.log(`Congratulations, '${name}'!`);

const checkCondition = (right, attempt) => {
  if (String(right) === attempt) {
    console.log('Correct!');
    return true;
  }
  return false;
};

const wrongAnswer = (userAnswer, rightAnswer, name) =>
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${name}!'`);

const userAsk = question => readlineSync.question(`Question: ${question}\nYour answer: `);

// Exported funcs
export const randomNumber = (min, max) => Math.floor(Math.random() * max) + min;

// Engine
export const game = (text, check) => {
  const counter = 3;
  const name = greeting(text);
  if (check) {
    const iter = (count) => {
      if (count === 0) {
        return congratulations(name);
      }
      const data = check(count);
      const userAnswer = userAsk(car(data));
      const rightAnswer = cdr(data);
      if (checkCondition(rightAnswer, userAnswer)) {
        return iter(count - 1);
      }
      return wrongAnswer(userAnswer, rightAnswer, name);
    };
    return iter(counter);
  }
  return 0;
};
