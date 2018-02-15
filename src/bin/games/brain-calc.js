#!/usr/bin/env node

import { game, numsForCalcStr, numsForCalcRes } from '../..';

console.log('Welcome to the Brain Games!\nWhat is the result of the expression?');
console.log(game(numsForCalcStr, numsForCalcRes));
