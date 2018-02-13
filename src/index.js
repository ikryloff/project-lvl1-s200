import readlineSync from 'readline-sync';

export const username = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

export const even = () => {
  const name = username();
  const congratulations = `Congratulations, '${name}'!`;
  const number = () => Math.floor(Math.random() * 100) + 1;
  const isEven = num => (num % 2 === 0 ? 'yes' : 'no');
  const answer = num => readlineSync.question(`Question: ${num}\nYour answer: `);
  const iter = (count) => {
    if (count === 0) {
      console.log(congratulations);
      return 0;
    }
    const num = number();
    const ans = answer(num);
    if (isEven(num) === ans) {
      console.log('Correct!');
      return iter(count - 1);
    }
    console.log(`'${ans}' is wrong answer ;(. Correct answer was '${isEven(num)}.\nLet's try again, '${name}'!'`);
    return 0;
  };
  return iter(3);
};
