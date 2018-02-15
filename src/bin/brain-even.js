#!/usr/bin/env node

import { isEven, game, numForIsEven } from '..';

console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".');
console.log(game(numForIsEven, isEven));
