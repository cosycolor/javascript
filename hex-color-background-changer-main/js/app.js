var body = document.querySelector('body');
var button = document.querySelector('a');
var hex_print = document.querySelector('#hex-value')
var hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

button.addEventListener('click',changeHexValues);

function changeHexValues(){
    var hex = '#'

    for(var i = 0; i< 6;i++){
        var index =Math.floor(Math.random()*hexValues.length);
        hex +=hexValues[index];
    }
  hex_print.textContent = hex;
  body.style.backgroundColor = hex;
}