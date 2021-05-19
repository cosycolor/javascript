(function(){
  const prevBtn = document.querySelector('.prevBtn');
  const nextBtn = document.querySelector('.nextBtn');
  const counter = document.querySelector('#counter');
  let count = 0;

  prevBtn.addEventListener('click',descend);

  function descend(){
    count -= 1;
    counter.textContent = count;

    if(count < 0){
      counter.style.color = "red";
    }else if(count >0){
      counter.style.color = "green";
    }else{
      counter.style.color = "white";
    }
  }
  nextBtn.addEventListener('click',ascend);

  function ascend(){
    count += 1;
    counter.textContent = count;
    if(count < 0){
      counter.style.color = "red";
    }else if(count >0){
      counter.style.color = "green";
    }else{
      counter.style.color = "white";
    }
  }
})()

//클래스를 한번에 가져와서 이벤트를 건다.
//클래스에서 구분되는걸 조건문 걸어서 한다.
// (function(){
//   const buttons = document.querySelectorAll('.counterBtn')
//   let count= 0


//   //Add event listeners and functionailty to each button  
//   buttons.forEach(function(button){
//     button.addEventListener('click', function(){
//       if (button.classList.contains('prevBtn')){
//         count--
//       } else if (button.classList.contains('nextBtn')){
//         count++
//       }

//       //Select the counter text
//       const counter = document.querySelector('#counter')
//       counter.textContent = count

//       if (count < 0 ){
//         counter.style.color = 'red'
//       } else if (count > 0){
//         counter.style.color = 'green'
//       } else {
//         counter.style.color = '#333333'
//       }
//     })
//   })
// })()