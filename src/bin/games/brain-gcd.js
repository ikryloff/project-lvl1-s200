#!/usr/bin/env node

import { game, numsForGCDStr, numsForGCDRes } from '../..';

console.log('Welcome to the Brain Games!\nFind the greatest common divisor of given numbers.');
console.log(game(numsForGCDStr, numsForGCDRes));
