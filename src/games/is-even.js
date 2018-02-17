import { cons } from 'hexlet-pairs';
import { game, randomNumber } from '../index';


const text = 'Answer "yes" if number even otherwise answer "no".';
const rightAnswer = num => (num % 2 === 0 ? 'yes' : 'no');

const check = () => {
  const num = randomNumber(1, 100);
  return cons(num, rightAnswer(num));
};
const isEven = () => game(text, check);

export default isEven;
