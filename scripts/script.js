
let email = document.getElementById('mail');
let small = document.getElementById('small1');
let nom = document.getElementById('Nom');
let git = document.getElementById('icon-git');
let linkedin = document.getElementById('icon-linkedin')
let insta = document.getElementById('icon-insta')


git.addEventListener('click', function() {
    window.open('https://github.com/nathan220320');
})

linkedin.addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/nathan-rebours/');
})

insta.addEventListener('click', function() {
    window.open('https://www.facebook.com/nathan.rebours.22');
})





email.onkeydown = function(){
    const regex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
    
    if (regex.test(email.value)){
        email.style.border = '2px solid #16BD13'
    }else{
        email.style.border = '2px solid #F81111'
    }

}