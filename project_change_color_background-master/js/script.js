var button = document.querySelector('button');
var body = document.querySelector('body');
var colors = ['red','blue','green','black','purple']

button.addEventListener('click',changeBackground);

function changeBackground(){
    
    
    body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
}

//queryselector 아이디나 클래스 쓸때는 선택자 #,. 사용하는데
//위에서는 그냥 button만 써야 되네 ->html요소를 가져오는건 그냥 씀 p, a 와 같이 태그요소들
//이 외에는 .,#선택자 기호를 씀

//queryselector와 getElementById의 차이점은
//querySelector는 해당 선택자 뭉탱이중 첫번째 요소 반환
//getElementyById는 해당 요소 반환