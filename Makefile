install: 
		npm install

start-calc:
		npm run babel-node -- src/bin/brain-calc.js
		
start-even:
		npm run babel-node -- src/bin/brain-even.js

publish:
		npm publish

lint:
		npm run eslint .