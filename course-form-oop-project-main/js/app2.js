(function(){
    const name = document.querySelector('.name');
    const course = document.querySelector('.course');
    const author = document.querySelector('.author');
    const customers = document.querySelector('.customer-list');
    const subBtn = document.querySelector('.submitBtn');

    subBtn.disabled = true;

    document.addEventListener('DOMContentLoaded', getList);
    name.addEventListener('blur', check);
    course.addEventListener('blur', check);
    author.addEventListener('blur', check);
    subBtn.addEventListener('click',addList);

    function getList(){
        let local = localStorage.getItem('courseLists');

        if(local){
            let lists = JSON.parse(local);
            lists.forEach((list) => {
                createDiv(list.name,list.course,list.author,list.random);
            });
        }
    }

    function check(event){
        if(event.target.value ==''){
            event.target.classList.remove('complete');
            event.target.classList.add('fail');
        }else{
            event.target.classList.remove('fail');
            event.target.classList.add('complete');
        }

        const complete = document.querySelectorAll('.complete');
        if(complete.length == 3){
            subBtn.disabled = false;
        }else{
            subBtn.disabled = true;
        }
    }

    function addList(event){
        event.preventDefault();
        
        const name = document.querySelector('.name').value;
        const course = document.querySelector('.course').value;
        const author = document.querySelector('.author').value;
        const random = Math.floor(Math.random()*5 +1);

        const feedback = document.querySelector('.feedback');
        const loading = document.querySelector('.loading');

        feedback.classList.add('showItem', 'alert','alert-success');
        loading.classList.add('showItem');

        setTimeout(() => {
            feedback.classList.remove('showItem','alert','alert-success');
            loading.classList.remove('showItem');
            createDiv(name, course, author,random);
        }, 2000);

        
        const value = {
            "name": name,
            "course": course,
            "author": author,
            "random": random
        }

        addStorage(value);
        document.querySelector('.name').value ='';
        document.querySelector('.course').value ='';
        document.querySelector('.author').value ='';
    }

    function createDiv(name, course, author, random){

        const div = document.createElement('div');
        div.classList.add('col-11', 'mx-auto', 'col-md-6', 'my-3', 'col-lg-4');
        div.innerHTML = '<div class="card text-left">'+
        '<img src="./img/cust-'+random+'.jpg" class="card-img-top" alt="">'+
        '<div class="card-body">'+
        '<!-- customer name -->'+
        '<h6 class="text-capitalize "><span class="badge badge-warning mr-2">name :</span><span id="customer-name">'+name+'</span></h6>'+
        '<!-- end of customer name -->'+
        '<!-- customer name -->'+
        '<h6 class="text-capitalize my-3"><span class="badge badge-success mr-2">course :</span><span id="customer-course">'+
        course+
        '</span></h6>'+
        '<!-- end of customer name -->'+
        '<!-- customer name -->'+
        '<h6 class="text-capitalize"><span class="badge badge-danger mr-2">author :</span><span id="course-author">'+author+'</span></h6>'+
        '<!-- end of customer name --></div></div>';
        customers.appendChild(div);
        
    }

    function addStorage(value){

        let locals = localStorage.getItem('courseLists');
        
        if(locals){
            locals = JSON.parse(locals);
            locals.push(value);
            localStorage.setItem('courseLists', JSON.stringify(locals));
        }else{
            locals = [];
            locals.push(value);
            localStorage.setItem('courseLists', JSON.stringify(locals));
        }
    }
})();