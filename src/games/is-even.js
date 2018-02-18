import { cons } from 'hexlet-pairs';
import { game, randomNumber } from '../index';


const text = 'Answer "yes" if number even otherwise answer "no".';
const rightAnswer = num => (num % 2 === 0 ? 'yes' : 'no');

const generateQandA = () => {
  const num = randomNumber(1, 100);
  return cons(num, rightAnswer(num));
};
const isEven = () => game(text, generateQandA);

export default isEven;
