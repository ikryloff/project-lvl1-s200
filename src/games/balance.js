import { cons, car, cdr } from 'hexlet-pairs';
import { game, randomNumber } from '../index';

const text = 'Balance the given number.';

const toArray = (num) => {
  const str = String(num);
  const len = str.length;
  const arr = [];
  for (let j = 0; j < len; j += 1) {
    arr.push(str[j]);
  }
  return arr;
};

const sumOfDigits = (arr) => {
  let sum = 0;
  const len = arr.length;
  for (let i = 0; i < len; i += 1) {
    sum += Number(arr[i]);
  }
  return sum;
};

const average = (sum, len) => cons(Math.floor(sum / len), sum % len);

const bal = (num) => {
  const arr = toArray(num);
  const len = arr.length;
  const newArr = [];
  const sum = sumOfDigits(arr);
  const modulo = cdr(average(sum, len));
  const digit = car(average(sum, len));
  for (let i = 0; i < len; i += 1) {
    newArr.push(digit);
  }
  if (sumOfDigits(newArr) !== sum) {
    const iter = (index, count) => {
      if (count === 0) return newArr.join('');
      newArr[index] += 1;
      return iter(index - 1, count - 1);
    };
    return iter(newArr.length - 1, modulo);
  }
  return newArr.join('');
};

const gameTask = () => {
  const num = randomNumber(13, 103);
  const rightAnswer = bal(num);
  return cons(num, rightAnswer);
};
const balance = () => game(text, gameTask);

export default balance;
