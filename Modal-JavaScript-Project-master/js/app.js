(function(){
    let storeItems = document.querySelectorAll('.store-item');
    let lightBox = document.querySelector('.lightbox-container');
    let lightBoxItem = document.querySelector('.lightbox-item');
    let images = document.querySelectorAll('.store-img');

    let imageList =[];

    let imageCounter = 0;

    images.forEach((image) => {
        imageList.push(image.src);
    });

    storeItems.forEach((item)=>{
        item.addEventListener('click',(e)=>{
            let image = e.target.src;
            lightBoxItem.style.backgroundImage = `url(${image})`;
            lightBox.classList.add('show');
            imageCounter = imageList.indexOf(image);
        });
    });

    let btnLeft = document.querySelector('.btnLeft');
    btnLeft.addEventListener('click',() =>{
        imageCounter--;
        if(imageCounter < 0){
            imageCounter = imageList.length - 1;
        }
        lightBoxItem.style.backgroundImage = `url(${imageList[imageCounter]})`;
    });
    let btnRight = document.querySelector('.btnRight');
    btnRight.addEventListener('click',() =>{
        imageCounter++;
        if(imageCounter >=imageList.length){
            imageCounter = 0;
        }
        lightBoxItem.style.backgroundImage = `url(${imageList[imageCounter]})`;
    });

    let lightBoxClose = document.querySelector('.lightbox-close');
    lightBoxClose.addEventListener('click', () =>{
        lightBox.classList.remove('show');
    })
})();