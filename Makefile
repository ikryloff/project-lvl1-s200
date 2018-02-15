install: 
		npm install

start-calc:
		npm run babel-node -- src/bin/games/brain-calc.js

start-even:
		npm run babel-node -- src/bin/games/brain-even.js

publish:
		npm publish

lint:
		npm run eslint .