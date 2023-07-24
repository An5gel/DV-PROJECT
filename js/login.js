const Validate = ()=>{
    //picking input field with theirnames
    let email = document.login.email1
    let password =document.login.password1


    //picking error fields
    let errorEmail1 = document.getElementById("emailError")
    let errorPasswordl = document.getElementById("passwordError")

    //validating email
    if(email.value == ""){
        email.style.border = "1px solid red";
        errorEmail1.textContent = "Email is required";
        errorEmail1.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
        email.focus();
        return false;
    }
    let EmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(!email.value.match(EmailRegex)){
        email.style.border = "1px solid red";
        errorEmail1.textContent = "The email address should be valid";
        errorEmail1.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
        email.focus();
        return false;
    }
    if(password.value == ""){
        password.style.border = "1px solid red";
        errorPasswordl.textContent = "password is required";
        errorPasswordl.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
        password.focus();
        return false;

    }else{
        password.style.border = "1px solid green";
        
    }
    
    window.location.assign("./services.html")

// else if{
//         email.style.border = "1px solid green";
//         errorEmail1.textContent = "";
//         password.focus();
        
//     }

//     //validating PASSWORD
//     if(password.value == ""){
//         password.style.border = "1px solid red";
//         errorPasswordl.textContent = "password is required";
//         errorPassword1.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
//         password.focus();
//         return false;

//     }else { 
//         password.style.border = "1px solid green";
//        errorPassword1.textContent = "";
//         password.focus()
// }
}