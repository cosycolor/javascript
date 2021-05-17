var button = document.querySelector('button');
var body = document.querySelector('body');
var colors = ['red','blue','green','black','purple']

button.addEventListener('click',changeBackground);

function changeBackground(){
    
    
    body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
}