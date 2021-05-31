(function(){

  const services = [{
    value: 20,
    title: "great - 20%"
  },{
    value: 10,
    title: "good - 10%"
  },{
    value: 2,
    title: "bad - 2%"
  }];

  let bills = document.querySelector('#input-bill');
  let users = document.querySelector('#input-users');
  let service = document.querySelector('#input-service');
  let submit = document.querySelector('.btn.submitBtn');
  let tipAmount = document.querySelector('#tip-amount');
  let totalAmount = document.querySelector('#total-amount');
  let personAmount = document.querySelector('#person-amount');
  let loader = document.querySelector('.loader.text-center');
  let result = document.querySelector('.results.text-center');
  let vat;
  let feedback = document.querySelector('.feedback');
  

  //click 할때마다 이벤트를 달아놧지만
  //option이 계속 추가되어 service.options.length = 0으로 
  //초기화하면 choose까지 없어짐
  //그래서 애초에 한번만 해놓음
  for(let i = 0; i<services.length; i++){
    let option = document.createElement('option');
    option.setAttribute('value',services[i].value);
    option.innerText = services[i].title;
    service.append(option);
  }

  service.addEventListener('change', (e) =>{
    vat = service.options[e.target.selectedIndex].value;
  })

  submit.addEventListener('click', () =>{
    let bill = Number(bills.value);
    let user = Number(users.value);

    if(bill <=0 || user <= 0 || vat == undefined){
     
      feedback.classList.add('showItem','alert-danger');
      feedback.textContent = 'check again';

      setTimeout(() => {
        bills.value ='';
        users.value ='';
        service.options[0].selected = true;
        feedback.classList.remove('showItem','alert-danger');
      },5000);
      return;
    }

   loader.classList.add('showItem');

   setTimeout(() =>{
    loader.classList.remove('showItem');

    
    tipAmount.textContent = bill*(vat/100);
    totalAmount.textContent = bill+bill*(vat/100);
    personAmount.textContent = (bill+bill*(vat/100))/user;
    result.classList.add('showItem');
  },2000)

    setTimeout(()=>{
      bills.value ='';
      users.value ='';
      service.options[0].selected = true;
      result.classList.remove('showItem')
    },6000);
  })
  
  

})();