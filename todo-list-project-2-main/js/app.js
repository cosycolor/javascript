(function(){
  
const form = document.querySelector('#itemForm'); // select form
const itemInput = document.querySelector('#itemInput'); // select input box from form
const itemList = document.querySelector('.item-list');
const feedback = document.querySelector('.feedback');
const clearButton = document.querySelector('#clear-list');
let toDoList =[];

//form타입 자바스크립트
form.addEventListener('submit', (e) =>{
    e.preventDefault();
   // let va = itemInput.value;

   toDoList.push(itemInput.value) ;
   itemInput.value ='';
   getList();
});

clearButton.addEventListener('click',()=>{
    toDoList = [];
    getList();
})

function getList(){
    itemList.innerHTML = '';

    toDoList.forEach((list) => {
        let newDiv = '<div class="item my-3">';
      newDiv += '<h5 class="item-name text-capitalize">'+list+'</h5>';
      newDiv += '<div class="item-icons">';
      newDiv += '<a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a>';
      newDiv += '<a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a>';
      newDiv += '<a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a>';
      newDiv += '</div></div>';

        itemList.insertAdjacentHTML('beforeend', newDiv );
        
     modItem(list);

      
    
    //  //innerText와 innerHtml, insertAdjacent    
    });
}

function modItem(list){
    const items = itemList.querySelectorAll('.item');//배열로만들어

    items.forEach( (item) =>{
        if(item.querySelector('.item-name').textContent == list){
            
            item.querySelector('.complete-item').addEventListener('click', ()=>{
                item.querySelector('.item-name').classList.toggle('completed');
                
            });

            item.querySelector('.edit-item').addEventListener('click', ()=>{
                itemInput.value = list;
                itemList.removeChild(item);

                toDoList = toDoList.filter( (item) =>{
                    return item != list; 
                });
            });

            item.querySelector('.delete-item').addEventListener('click',()=>{
                itemList.removeChild(item);

                toDoList = toDoList.filter( (item) =>{
                    return item != list;
                });
            });
        }
    });
}
    


   
    
   
    

})();
