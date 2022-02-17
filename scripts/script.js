
let form = document.getElementById('myForm');
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


const regex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
const regex2 = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
const regex3 = /^[a-zA-Z0-9-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u






form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('coucou');
    
  
    
    if (regex.test(email.value)&&(regex2.test(nom.value))&&(regex2.test(prenom.value))&&(regex3.test(msg.value))){
        email.style.border = '2px solid #16BD13'
        msg.style.border = '2px solid #16BD13'
        prenom.style.border = '2px solid #16BD13'
        nom.style.border = '2px solid #16BD13'

        const formData = new FormData(form); 

        fetch('./php/script.php', {
            method: 'POST',
            body: formData
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
        })
        


    }   
    else{
        email.style.border = '2px solid #F81111'
        msg.style.border = '2px solid #F81111'
        prenom.style.border = '2px solid #F81111'
        nom.style.border = '2px solid #F81111'
        alert('Remplissez les champs correctement');
        
        
    }
    
    form.reset()
    
})
