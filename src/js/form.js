
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const departure = document.getElementById("departure");
const arrival = document.getElementById("arrival");
const form = document.querySelector("form");
const errorMessage = document.getElementById("errorMessage");


form.addEventListener("submit", (e) => {
  const errors =[];

  if(fullname.value.trim() === ""){
    errors.push("Full Name is required")
  }

  if(departure.value.trim() === ""){
    errors.push("Departure time is required")
  }

  if(arrival.value.trim() === ""){
    errors.push("Arrival time is required")
  }

  if(phone.value.trim() == ""){
    errors.push("Phone number is required")
  } else if(!right()){
    errors.push("Invalid phone number")
  }

  if (email.value.trim() === ""){
    errors.push("Email address is required");
    

  }else if (!validate()){
    errors.push("Invalid Email");
   
  }

  if (errors.length > 0){

    if (errors.includes("Invalid Email") || errors.includes("Email address is required")){
      email.style.borderColor = "red";
    } else{
      email.style.borderColor = "green";
    }

    if (errors.includes("Full Name is required")){
      fullname.style.borderColor = "red";
    } else{
      fullname.style.borderColor = "green";
    }

    if (errors.includes("Departure time is required")){
      departure.style.borderColor = "red";
    } else{
      departure.style.borderColor = "green";
    }

    if (errors.includes("Arrival time is required")){
      arrival.style.borderColor = "red";
    } else{
      arrival.style.borderColor = "green";
    }

    if (errors.includes("Phone number is required") || errors.includes("Invalid phone number")){
      phone.style.borderColor = "red";
    } else{
      phone.style.borderColor = "green";
    }


    e.preventDefault();
    errorMessage.toggleAttribute('hidden');
    errorMessage.innerHTML = errors.join(', ');
  } 
})

function validate(){

  let regEx = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;
  ;
  if (regEx.test(email.value)){
    // document.getElementById('message').innerHTML = 'Valid email address';
    return true;

  } else{
    
    // document.getElementById('errorMessage').innerHTML = 'Invalid email address';
    return false;
  }

}

function right(){
  let exp =  /^[0-9]\d{9}$/;

  if (exp.test(phone.value)){
    return true;
  } else{
    return false
  }

}


/*second form */

form.addEventListener("submit", (e) => {
  const errors1 =[];


  if(first.value.trim() === ""){
    errors1.push("First name is required")
  }

  if(last.value.trim() === ""){
    errors1.push("Last name is required")
  }

  if(phone1.value.trim() == ""){
    errors1.push("Phone number is required")
  } else if(!right1()){
    errors1.push("Invalid phone number")
  }

  if (email1.value.trim() === ""){
    errors1.push("Email address is required");
    

  }else if (!validate1()){
    errors1.push("Invalid Email");
   
  }

  if (errors1.length > 0){

    if (errors1.includes("Invalid Email") || errors1.includes("Email address is required")){
      email1.style.borderColor = "red";
    } else{
      email1.style.borderColor = "green";
    }

    if (errors1.includes("First name is required")){
      first.style.borderColor = "red";
    } else{
      first.style.borderColor = "green";
    }

    if (errors1.includes("Last name is required")){
      last.style.borderColor = "red";
    } else{
      last.style.borderColor = "green";
    }

    if (errors1.includes("Phone number is required") || errors1.includes("Invalid phone number")){
      phone1.style.borderColor = "red";
    } else{
      phone1.style.borderColor = "green";
    }


    e.preventDefault();
    errorMessage1.toggleAttribute('hidden');
    errorMessage1.innerHTML = errors1.join(', ');
  } 
})

function validate1(){

  let regEx = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;
  ;
  if (regEx.test(email1.value)){
    // document.getElementById('message').innerHTML = 'Valid email address';
    return true;

  } else{
    
    // document.getElementById('errorMessage').innerHTML = 'Invalid email address';
    return false;
  }

}

function right1(){
  let exp =  /^[0-9]\d{9}$/;

  if (exp.test(phone1.value)){
    return true;
  } else{
    return false
  }

}






