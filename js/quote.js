const quoteWrap = document.querySelector('#quotewrap');
const quote = document.querySelector('#quote');
const quoteArr = [
  { quote: 'RULE #1 "Stand up straight with your shoulders straight"' },
  { quote: 'RULE #2 "Treat yourself like someone you are responsible for helping"' },
  { quote: 'RULE #3 "Befriend people who want the best for you"' },
  { quote: 'RULE #4 "Compare yourself to who you were yesterday, not the useless person you are today"' },
  { quote: 'RULE #5 "Do not let your children do anything that makes you dislike them"' },
  { quote: 'RULE #6 "Set your house in order before you criticise the world"' },
  { quote: 'RULE #7 "Pursue what is meaningful, not what is expedient"' },
  { quote: 'RULE #8 "Tell the truth. Or at least don’t lie"' },
  { quote: 'RULE #9 "Assume the person you are listening to knows something you don’t"' },
  { quote: 'RULE #10" Be precise in your speech"' },
  { quote: 'RULE #11" Do not bother children while they are skateboarding"' },
  { quote: 'RULE #12" Pet a cat when you encounter one in the street"' },
];
quote.innerText = quoteArr[Math.floor(Math.random() * quoteArr.length)]['quote'];