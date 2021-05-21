(function(){
    const customerImage = document.querySelector('#customer-img');
    const customerName = document.querySelector('#customer-name');
    const customerText = document.querySelector('#customer-text');
    const buttons = document.querySelectorAll('.btn');
    let index = 0;
    const customers = []

    function Customer(img, name, text){
        this.img = img;
        this.name = name;
        this.text = text;
    }

    function createCustomer(img, name, text){
        let fullImg = `./img/customer-${img}.jpg`
        let customer = new Customer(fullImg, name, text);

        customers.push(customer);
    }

    createCustomer(0,'John','테스트1');
    createCustomer(1,'Sandy','테스트2');
    createCustomer(2,'Amy','테스트3');
    createCustomer(3,'Tyrell','테스트4');
    createCustomer(4,'Wanda','테스트5');

    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            if(e.target.parentElement.classList.contains('prevBtn')){
                if(index ===0){
                    index = customers.length
                }
                index--;
                customerImage.src = customers[index].img;
                customerName.textContent = customers[index].name;
                customerText.textContent = customers[index].text;
            }
            if(e.target.parentElement.classList.contains('nextBtn')){
                index++;
                if(index === customers.length){
                    index = 0;
                }
                
                customerImage.src = customers[index].img;
                customerName.textContent = customers[index].name;
                customerText.textContent = customers[index].text;
            }
        })
    })
})();