import { cons } from 'hexlet-pairs';
import { game, randomNumber } from '../index';

const text = 'What is the result of the expression?';

const taskToString = (num1, num2, sign) => `${num1} ${sign} ${num2}`;
const generateQandA = (count) => {
  const num1 = randomNumber(1, 10);
  const num2 = randomNumber(1, 10);
  let task = '';
  let rightAnswer = null;
  if (count % 3 === 0) {
    task = taskToString(num1, num2, '+');
    rightAnswer = num1 + num2;
  } else if (count % 2 === 0) {
    task = taskToString(num1, num2, '-');
    rightAnswer = num1 - num2;
  } else {
    task = taskToString(num1, num2, '*');
    rightAnswer = num1 * num2;
  }
  return cons(task, rightAnswer);
};
const calc = () => game(text, generateQandA);

export default calc;
