import { cons } from 'hexlet-pairs';
import { game, randomNumber } from '../index';

const text = 'Find the greatest common divisor of given numbers.';

const taskToString = (num1, num2) => `${num1} ${num2}`;

const gcd = (x, y) => {
  const iter = (a, b) => {
    if (a % b === 0) return b;
    return iter(b, a % b);
  };
  return x > y ? iter(x, y) : iter(y, x);
};

const check = () => {
  const num1 = randomNumber(1, 50);
  const num2 = randomNumber(1, 50);
  const task = taskToString(num1, num2);
  const rightAnswer = gcd(num1, num2);
  return cons(task, rightAnswer);
};
const gcdiv = () => game(text, check);

export default gcdiv;
