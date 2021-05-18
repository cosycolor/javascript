(function(){
    var form = document.querySelector('#message-form');

    form.addEventListener('submit',function(e){
        e.preventDefault();

        var message = document.querySelector('#message');
        var feedback = document.querySelector('.alert-danger');
        var messageContent = document.querySelector('.message-content.text-uppercase');

        if(message.value === ''){
            feedback.classList.add('show');
            setTimeout(function(){feedback.classList.remove('show')},3000)
        }else{
            messageContent.textContent = message.value;
            message.value = '';
        }
    })
})()