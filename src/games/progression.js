import { cons, car, cdr } from 'hexlet-pairs';
import { game, randomNumber } from '../index';


const text = 'What number is missing in this progression?';
const nums = 10;
const makeProgression = (start, step, miss) => {
  let str = '';
  let num = 0;
  for (let i = start; i < ((nums * step) + start); i += step) {
    if (i === start + (miss * step)) {
      str += ' .. ';
      num = i;
    } else str += ` ${i} `;
  }
  return cons(num, str);
};


const gameTask = () => {
  const start = randomNumber(1, 100);
  const step = randomNumber(1, 10);
  const miss = randomNumber(2, 8);
  const task = makeProgression(start, step, miss);
  return cons(cdr(task), car(task));
};
const progression = () => game(text, gameTask);

export default progression;
