"use strict";

//로딩될때 생성되는 display객체 하나와 생성시키는 객체 하나 라면
//blur 이벤트 거는 클래스 하나와 생성시키는 클래스 하나 이렇게 만들어되 되는거 아닌가
//

(function(){
    document.addEventListener('DOMContentLoaded',()=>{
        const display = new Display();
        display.checkFields();
        display.hideSubmit();
    });

    document.querySelector('#customer-form').addEventListener('submit',(event)=>{
        event.preventDefault();

        const name = document.querySelector('#name');
        const course = document.querySelector('#course');
        const author = document.querySelector('#author');

        const customer = new Customer(name.value, course.value, author.value);
        const display = new Display();
        
        display.feedback(customer);
        display.clearFields();
    });

    function Display(){
        this.name = document.querySelector('#name');
        this.course = document.querySelector('#course');
        this.author = document.querySelector('#author');
        //queryselectAll은 같은 이름의 클래스나 아이디를 모두 가져오는거라면
        //queryselect로 했을때 클래스가 같은 애들이 많다면 어찌되는거임?
        this.customers = document.querySelector('.customer-list');
    }
    Display.prototype.checkFields = function(){
        this.name.addEventListener('blur', this.validateField);
        this.course.addEventListener('blur',this.validateField);
        this.author.addEventListener('blur',this.validateField);
    };
    Display.prototype.validateField = function(){
        if(this.value ===''){
            this.classList.remove('complete');
            this.classList.add('fail');
        }else{
            this.classList.add('complete');
            this.classList.remove('fail');
        }

        const complete = document.querySelectorAll('.complete');

        if(complete.length ===3){
            document.querySelector('.submitBtn').disabled = false;
        }else{
            document.querySelector('.submitBtn').disabled = true;
        };
    };
    Display.prototype.hideSubmit = function(){
        const btn = document.querySelector('.submitBtn');
        btn.disabled = true;
    };
    Display.prototype.feedback = function(customer){
        const feedback = document.querySelector('.feedback');
        const loading = document.querySelector('.loading');

        feedback.classList.add('showItem','alert','alert-success');
        loading.classList.add('showItem');

        const self = this;
        
        this.hideSubmit();

        setTimeout(()=>{
            feedback.classList.remove('showItem','alert','alert-success');
            loading.classList.remove('showItem');
            self.addCustomer(customer);
        },3000);
    };
    Display.prototype.addCustomer = function(customer){
        const random = this.getRandom();

        const div = document.createElement('div');
        div.classList.add('col-11', 'mx-auto', 'col-md-6', 'my-3', 'col-lg-4');
        div.innerHTML = `<div class="card text-left">
        <img src="./img/cust-${random}.jpg" class="card-img-top" alt="">
        <div class="card-body">
         <!-- customer name -->
         <h6 class="text-capitalize "><span class="badge badge-warning mr-2">name :</span><span id="customer-name">${customer.name}</span></h6>
         <!-- end of customer name -->
         <!-- customer name -->
         <h6 class="text-capitalize my-3"><span class="badge badge-success mr-2">course :</span><span id="customer-course">
           ${customer.course}
          </span></h6>
         <!-- end of customer name -->
         <!-- customer name -->
         <h6 class="text-capitalize"><span class="badge badge-danger mr-2">author :</span><span id="course-author">${customer.author}</span></h6>
         <!-- end of customer name -->
        </div>
       </div>`;
       this.customers.appendChild(div);
    }
    Display.prototype.getRandom = function(){
        let random = Math.floor(Math.random()*5 +1);
        return random;
    }
    Display.prototype.clearFields = function(){
        this.name.value = '';
        this.course.value = '';
        this.author.value = '';

        this.name.classList.remove('complete','fail');
        this.course.classList.remove('complete','fail');
        this.author.classList.remove('complete','fail');
    }
    function Customer(name, course, author){
        this.name = name;
        this.course = course;
        this.author = author;
    }
})();