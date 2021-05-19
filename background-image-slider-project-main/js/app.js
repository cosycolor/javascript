(function(){
  const pictures = ["contBcg-0","contBcg-1","contBcg-2","contBcg-3","contBcg-4"]
  const buttons = document.querySelectorAll('.btn');
  const imagDiv = document.querySelector('.img-container');
  let count = 0;
  buttons.forEach(function(button){
    button.addEventListener('click', function(e){
      if(button.classList.contains('btn-left')){
        count--;
        if(count < 0){
          count = pictures.length-1;
        }
        imagDiv.style.backgroundImage = 'url(./img/contBcg-'+[count]+'.jpeg)';
      }else{
        count++;
        if(count > pictures.length-1){
          count = 0;
        }
        imageDiv.style.backgroundImage = 'url(./img/contBcg-'+[count]+'.jpeg)';
      };
    })
  })


})();