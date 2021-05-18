quotes = [
  {sentence: "To be happy, we must not be too concerned with others", author:"Albert Camus"},
  {sentence: "Happiness depends upon ourselves", author:"Aristotle"},
  {sentence: "Happiness is not something ready-made. It comes from your own actions", author:"Dalai Lama"},
  {sentence: "Happy people plan actions, they don't plan result;", author: "Dennis Waitley"},
  {sentence: "The two enemies of human happiness are pain and boredom", author: "Arthur Schopenhauer"},
  {sentence: "Happiness is a state of activity", author: "Aristotle"},
  {sentence: "To fall in love with yourself is the first secret to happiness", author: "Robert Morley"}
]


var button = document.querySelector('#generate-btn');
var quoteSentence = document.querySelector('#quote');
var author = document.querySelector('.quote-author.ml-3');

button.addEventListener('click', makeSentence);

function makeSentence(){
  var index = Math.floor(Math.random() * quotes.length)

  quoteSentence.textContent = quotes[index].sentence;
  author.textContent = quotes[index].author;
}

