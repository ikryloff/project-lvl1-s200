import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

export const username = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

export const randomNumber = () => Math.floor(Math.random() * 50) + 1;
export const isEven = nums => (car(nums) % 2 === 0 ? 'yes' : 'no');
export const pareOfNums = () => cons(randomNumber(), randomNumber());
export const numForIsEven = nums => car(nums);


// Calc
export const numsForCalcStr = (nums, count) => {
  if (count === 3) return `${car(nums)} + ${cdr(nums)}`;
  if (count === 2) return `${car(nums)} - ${cdr(nums)}`;
  return `${car(nums)} * ${cdr(nums)}`;
};

export const numsForCalcRes = (nums, count) => {
  if (count === 3) return car(nums) + cdr(nums);
  if (count === 2) return car(nums) - cdr(nums);
  return car(nums) * cdr(nums);
};

// GCD
export const numsForGCDStr = nums => `${car(nums)} ${cdr(nums)}`;
export const numsForGCDRes = (nums) => {
  const x = car(nums);
  const y = cdr(nums);
  const iter = (a, b) => {
    if (a % b === 0) return b;
    return iter(b, a % b);
  };
  return x > y ? iter(x, y) : iter(y, x);
};


export const game = (answer, rightAnswer) => {
  const name = username();
  const congratulations = `Congratulations, '${name}'!`;
  const userAnswer = question => readlineSync.question(`Question: ${question}\nYour answer: `);
  const iter = (count) => {
    const nums = pareOfNums();
    if (count === 0) {
      return congratulations;
    }
    const right = rightAnswer(nums, count);
    const usr = userAnswer(answer(nums, count));
    if (String(right) === usr) {
      console.log('Correct!');
      return iter(count - 1);
    }
    return (`${usr} is wrong answer ;(. Correct answer was ${right}.\nLet's try again, ${name}!'`);
  };
  return iter(3);
};
