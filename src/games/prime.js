import { cons } from 'hexlet-pairs';
import { game, randomNumber } from '../index';


const text = 'Is this number prime?';

const isPrime = (num) => {
  for (let i = num - 1; i > 1; i -= 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};

const generateQandA = () => {
  const num = randomNumber(2, 30);
  return cons(num, isPrime(num));
};
const prime = () => game(text, generateQandA);

export default prime;
