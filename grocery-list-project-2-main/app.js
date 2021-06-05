(function(){
    const addItemAction = document.querySelector('.addItems-action');
    const inputValue = document.querySelector('.addItems-input');
    const submit = document.querySelector('.addItems-submit');
    const groceryList = document.querySelector('.grocery-list');
    const clearAll = document.querySelector('.displayItems-clear');

   
    document.addEventListener('DOMContentLoaded',getList);
    //submit으로 하면 왜 새로고침되고 click 으로 해야하는거지?
    submit.addEventListener('click',addList);
    groceryList.addEventListener('click',removeItem);
    clearAll.addEventListener('click',clearAllItems);
   
   // clearAll.addEventListener('submit',);

    function getList(){
        let local = localStorage.getItem('groceryList');

        if(local){
            let list = JSON.parse(local);
            list.forEach((e) => {
                createDiv(e);
            });
        }
    }

    function createDiv(e){
        let div = document.createElement('div');
        div.classList.add('grocery-item');
        div.innerHTML = `<h4 class="grocery-item_title">${e}</h4><a href="#" class="grocery-item_link"><i class="far fa-trash-alt"></i></a>`;
        groceryList.appendChild(div);
    }

    function addList(event){
        event.preventDefault();
        let input = inputValue.value;

        if( input == null || input == ''){
            showText(input,false);
            
        }else{
            showText(input,true);
            //localStorage에 저장
            createDiv(input);
            updateList(input);
            inputValue.value = '';
        }
    }
    function showText(value, bool){
        if(bool){
            addItemAction.classList.add('success');
            addItemAction.innerHTML = `${value} added to the list`;
            setTimeout(()=>{
                addItemAction.classList.remove('success');
            },3000);
        }else{
            addItemAction.classList.add('alert');
            addItemAction.innerHTML = 'write grocerylist';
            setTimeout(()=>{
                addItemAction.classList.remove('alert');
            },3000);
        }
    }

    function updateList(value){
        
        let groceryList = localStorage.getItem('groceryList');
        
        if(groceryList){
            groceryList = JSON.parse(groceryList);
            groceryList.push(value);
            localStorage.setItem('groceryList',JSON.stringify(groceryList));
        }else{
            groceryList = [];
            groceryList.push(value);
            localStorage.setItem('groceryList',JSON.stringify(groceryList));
        }
    }
    function removeItem(event){
        //a링크 취소
        event.preventDefault();
        let link_parent = event.target.parentElement;
        if(link_parent.classList.contains('grocery-item_link')){
            let text = link_parent.previousElementSibling.innerHTML;
            let groceryItem = event.target.parentElement.parentElement;

            groceryList.removeChild(groceryItem);
            editStorage(text);
        }
    }

    function editStorage(list){
        //edit이기 때문에 있는지 없는지 확인할 필요 없이 바로 리스트를 가져온다
        let groceryList = JSON.parse(localStorage.getItem('groceryList'));
        let index = groceryList.indexOf(list);

        groceryList.slice(index,1);
        localStorage.removeItem('groceryList');
        localStorage.setItem('groceryList',JSON.stringify(groceryList));
    }

    function clearAllItems(){
        localStorage.removeItem('groceryList');
        const items = document.querySelectorAll('.grocery-item');
            items.forEach((e) => {
                groceryList.removeChild(e);
            });
    }

})();


