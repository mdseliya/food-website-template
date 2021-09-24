const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const submit = document.getElementById('signupBtn')
const span1 = document.getElementById('span1')
const span2 = document.getElementById('span2')
const span3 = document.getElementById('span3')
const span4 = document.getElementById('span4')
const span5 = document.getElementById('span5')
const span6 = document.getElementById('span6')
let validfname=false;
let validlname=false;
let validemail=false;
let validphone=false;
let validpassword=false;
let validcpassword=false;

fname.addEventListener('blur', () => {

    let regex = /^([a-zA-Z]){2,10}$/;
    let str = fname.value;
    if (regex.test(str)) {
        span1.innerHTML=""
        validfname=true;
    } else {
        span1.innerHTML = "name contain only character from 2 to 10"
    }

})
lname.addEventListener('blur', () => {
    let regex = /^([a-zA-Z]){2,10}/;
    let str = lname.value;
    if (regex.test(str)) {
        span2.innerHTML=""
        validlname=true;
    } else {
        span2.innerHTML = "name contain only character from 2 to 10"
    }

})

phone.addEventListener('blur', () => {
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    if (regex.test(str)) {
        span3.innerHTML=""
        validphone=true;
    } else {
        span3.innerHTML = "your phone number must be 10 digit long"
    }

})
email.addEventListener('blur', () => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z+]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    if (regex.test(str)) {
        span4.innerHTML=""
        validemail=true;
    } else {
        span4.innerHTML = "your email must be valid"
    }

})
password.addEventListener('blur', () => {
    var regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    let str = password.value;
    if (regex.test(str)) {

        span5.innerHTML=" "
        validpassword=true;
    } 
    else{
        span5.innerHTML = "your password length at least 8 and contain lowercase,upprcase,number and special character"
    }
})
cpassword.addEventListener('blur',()=>{
    if(password.value===cpassword.value){
        span6.innerHTML=""
        validcpassword=true;
    }else{
        span6.innerHTML="password not matching"
    }
})

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    
    if(validfname && validlname && validphone && validemail && validpassword && validcpassword){
       alert('Form Submitted Successfully')
    }
    else{
        console.log("sorry! fill input properly");
    }
   
})