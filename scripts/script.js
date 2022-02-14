
let email = document.getElementById('mail');
let nom = document.getElementById('Nom');
let prenom = document.getElementById('prenom');
let msg = document.getElementById('msg')
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
    const regex2 = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
    const regex3 = /^[a-zA-Z0-9-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
    
    if (regex.test(email.value)){
        email.style.border = '2px solid #16BD13'
        
    }else{
        email.style.border = '2px solid #F81111'
        
    }

    if (regex2.test(nom.value)){
        nom.style.border = '2px solid #16BD13'
    }else{
        nom.style.border = '2px solid #F81111'
    }

    if (regex2.test(prenom.value)){
        prenom.style.border = '2px solid #16BD13'
    }else{
        prenom.style.border = '2px solid #F81111'
    }

    if (regex3.test(msg.value)){
        msg.style.border = '2px solid #16BD13'
    }else{
        msg.style.border = '2px solid #F81111'
    } 



}