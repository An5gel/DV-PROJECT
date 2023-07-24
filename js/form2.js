const Validate = (event)=>{
    //picking input field with their names 
    let  firstName = document.register.firstname
    let phone = document.register.numberp
    let vehiclecolor = document.register.vehiclecolor
    let carNumber = document.register.carnum
    let event = 0


    //picking error fields
    let errorfirstName = document.getElementById("dnameerror")
    let cnumbererror = document.getElementById("cnumbererror")
    let vColorError = document.getElementById("vColorError")
    let carnumError = document.getElementById("carnumError")

    //validating first name inputs
    //validating for emptyness
    if(firstName.value == ""){
        firstName.style.border = "2px solid red" 
        errorfirstName.textContent ="This can't be empty"
        errorfirstName.style = "color: red; font-size:11px; font-family: Helvetica,arial;";
        firstName.focus()
        error++
    }else if(firstName.value.length < 2){
        firstName.style.border = "2px solid red" 
        errorfirstName.textContent ="first name must be at least 2 characters"
        errorfirstName.style = "color: red; font-size:11px; font-family: Helvetica,arial;";
        firstName.focus()
         error++
    }else if(firstName.value.length > 15){
        firstName.style.border = "2px solid red" 
        errorfirstName.textContent ="first name must not exceed 15 characters"
        errorfirstName.style = "color: red; font-size:11px; font-family: Helvetica,arial;";
        firstName.focus()
         error++
    }else{
        firstName.style.border = "2px solid green" 
        errorfirstName.textContent =""
        phone.focus()
         
    }   

   
    //validating phone number
    if(phone.value == ""){
        phone.style.border = "2px solid red" 
        cnumbererror.textContent ="phone number is invalid"
        cnumbererror.style = "color: red; font-size:11px; font-family: Helvetica,arial;";
        phone.focus()
         error++
    }

        // let phoneRegex = /^\+256\d{9}$/;
        let phoneRegex = ^[+][2][5][6][0-9]{9}$;
    if(!phoneRegex.test(phone.value)){
        phone.style.border = "2px solid red";
        cnumbererror.textContent = "Enter a valid number starting with +256";
        //styling error
        cnumbererror.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        vehiclecolor.focus();
         error++;
    }

    //validating vehicle color
    if(vehiclecolor.value == ""){
        vehiclecolor.style.border = "2px solid red" 
        vColorError.textContent ="Color not defined"
        vColorError.style = "color: red; font-size:11px; font-family: Helvetica,arial;";
       carNumber.focus()
         error++
    }

    //validating number plate
    if(carNumber.value == ""){
        carNumber.style.border = "2px solid red" 
        carnumError.textContent ="All number plates begin with U"
        carnumError.style = "color: red; font-size:11px; font-family: Helvetica,arial;";
        carNumber.focus()
         error++
    }else if(carNumber.value.length == 7){
        carNumber.style.border = "2px solid red" 
        carnumError.textContent ="Characters not greater than 7"
        carnumError.style = "color: red; font-size:11px; font-family: Helvetica,arial;";
        carNumber.focus()
        error++
    }else {
       carNumber.style.border = "2px solid green" 
        carnumError.textContent =""
        Date.focus()
    }
   
    
  if(error >0){
    event.preventDefault()
 }





}    




   
   
   

   
   
   
    

