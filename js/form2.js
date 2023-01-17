form.addEventListener("submit", (e) => {
    const errors =[];
  
  
    if(first.value.trim() === ""){
      errors.push("First name is required")
    }
  
    if(last.value.trim() === ""){
      errors.push("Last name is required")
    }
  
    if(phone.value.trim() == ""){
      errors.push("Phone number is required")
    } else if(!right()){
      errors.push("Invalid phone number")
    }

    if(departure.value.trim() === ""){
      errors.push("Departure time is required")
    }
  
    if(arrival.value.trim() === ""){
      errors.push("Arrival time is required")
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
  
      if (errors.includes("First name is required")){
        first.style.borderColor = "red";
      } else{
        first.style.borderColor = "green";
      }
  
      if (errors.includes("Last name is required")){
        last.style.borderColor = "red";
      } else{
        last.style.borderColor = "green";
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
  
  