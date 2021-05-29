(function(){
    const cartInfo = document.querySelector('#cart-info');
    const cart = document.querySelector('#cart');

    cartInfo.addEventListener('click',()=>{
        cart.classList.toggle('show-cart');
    })
})();

(function(){
    const cartBtn = document.querySelectorAll('.store-item-icon');

    cartBtn.forEach((btn)=>{
        btn.addEventListener('click', (event)=>{
            if(event.target.parentElement.classList.contains('store-item-icon')){
                let imgSrc = event.target.parentElement.previousElementSibling.src;


                let smallImg = imgSrc.slice(imgSrc.indexOf('img')+3);

                const item = {};

                item.img = 'img-cart'+smallImg;

                let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;

                item.name = name;

                let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;

                let finalPrice = price.slice(1).trim();

                item.price = finalPrice;
                
                let newDiv = '<div class="cart-item d-flex justify-content-between text-capitalize my-3"><img src='+item.img+' class="img-fluid rounded-circle" id="item-img" alt="">';
                newDiv += '<div class="item-text"><p id="cart-item-title" class="font-weight-bold mb-0">'+item.name+'</p><span>$</span>';
                newDiv += ' <span id="cart-item-price" class="cart-item-price" class="mb-0">'+item.price+'</span></div><a href="#" id="cart-item-remove" class="cart-item-remove"><i class="fas fa-trash"></i></a></div>';
                
                
                const cart = document.querySelector('#cart');
                cart.insertAdjacentHTML('afterbegin',newDiv);
                
                alert('item added to the cart');

                showTotals();
            }
        });
    });

    function showTotals(){
        const total = [];
        let sum = 0;
        const items = document.querySelectorAll('.cart-item-price');

        items.forEach((item)=>{
            total.push(parseFloat(item.textContent));
        });

        total.forEach((money) =>{
            sum += money;
        })

        const totalMoney = sum.toFixed(2);

        document.querySelector('#cart-total').textContent = totalMoney;
        document.querySelector('.item-total').textContent = totalMoney;
        document.querySelector('#item-count').textContent = total.length;
    }
})();