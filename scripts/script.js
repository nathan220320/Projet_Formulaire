
let email = document.getElementById('mail');
let small = document.getElementById('small1');

email.onkeydown = function(){
    const regex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
    
    if (regex.test(email.value)){
        small.innerHTML = 'Email valide'
        small.classList.remove('notValide')
        small.classList.add('valide')
    }else{
        small.innerHTML = 'Email non valide'
        small.classList.remove('valide')
        small.classList.add('notValide')
    }

}