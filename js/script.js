const form = document.getElementById("form");
let firstName =document.getElementById("firstName");
let lastName =document.getElementById("lastName");
let email =document.getElementById("email");
let telephone =document.getElementById("telephone");
let message =document.getElementById("message");
let subBtn =document.getElementById("subBtn");

let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let telephoneRegex = /^[0-9]{10}$/;

form.addEventListener("submit", function(event){

    event.preventDefault()
    
    let isValid = true;

    if(firstName.value.trim() == ""){
        document.getElementById("firstNameError").innerHTML="First Name is Required"; // once the firstname input is empty and a submission is made  sets the value in the <p> tag
        firstName.classList.add("invalid"); // adds invalid class to the firstNameError class p tag and will follow for subsequent tags

        firstNameError.classList.add("invalid")
        isValid = false;
    }
    else{
           document.getElementById("firstNameError").innerHTML="";
           firstName.classList.remove("invalid");
    }

    if(lastName.value.trim() == ""){
        document.getElementById("lastNameError").innerHTML="Last Name is Required"; 
        lastName.classList.add("invalid"); 
        isValid = false;
    }
    else{
           document.getElementById("lastNameError").innerHTML="";
           lastName.classList.remove("invalid");
    }


    if(email.value.trim() == ""){
        document.getElementById("emailError").innerHTML="Email is Required"; 
        email.classList.add("invalid"); 
        isValid = false;
    }
    else{
           document.getElementById("emailError").innerHTML="";
           email.classList.remove("invalid");
    }

    if(telephone.value.trim() == ""){
        document.getElementById("telephoneError").innerHTML="Telephone Number is Required"; 
        telephone.classList.add("invalid"); 
        isValid = false;
    }
    else{
           document.getElementById("telephoneError").innerHTML="";
           telephone.classList.remove("invalid");
    }


    if(message.value.trim() == ""){
        document.getElementById("messageError").innerHTML="A message is Required"; 
        message.classList.add("invalid"); 
        isValid = false;
    }
    else{
           document.getElementById("messageError").innerHTML="";
           message.classList.remove("invalid");
    }


    
    if(isValid){
        alert("Your message was successfully sent")
        form.reset();
    }

})


form.addEventListener("input", function(){

    if(firstName.value.trim() != ""){
        document.getElementById("firstNameError").innerHTML = "";
        firstName.classList.remove("invalid");
        firstName.classList.add("valid");
    }
    else{
        firstName.classList.remove("valid");
        firstName.classList.add("invalid");
    }


    if(lastName.value.trim() != ""){
        document.getElementById("lastNameError").innerHTML = "";
        lastName.classList.remove("invalid");
        lastName.classList.add("valid");
    }
    else{
        lastName.classList.remove("valid");
        lastName.classList.add("invalid");
    }

    if(emailRegex.test(email.value.trim())){
        document.getElementById("emailError").innerHTML = "";
        email.classList.remove("invalid");
        email.classList.add("valid");
    }
    else{
        email.classList.remove("valid");
        email.classList.add("invalid");
    }

    if(telephoneRegex.test(telephone.value.trim())){
        document.getElementById("telephoneError").innerHTML = "";
        telephone.classList.remove("invalid");
        telephone.classList.add("valid");
    }
    else{
        telephone.classList.remove("valid");
        telephone.classList.add("invalid");
    }

    if(message.value.trim() != ""){
        document.getElementById("messageError").innerHTML = "";
        message.classList.remove("invalid");
        message.classList.add("valid");
    }
    else{
        message.classList.remove("valid");
        message.classList.add("invalid");
    }

});