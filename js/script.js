// const first = document.getElementById("first");
// const last = document.getElementById("last");
// const email1 = document.getElementById("email1");
// const phone1 = document.getElementById("phone1");


// const fullname = document.getElementById("fullname");
// const email = document.getElementById("email");
// const phone = document.getElementById("phone");
// const form = document.querySelector("form");
// const errorMessage = document.getElementById("errorMessage");
// const errorMessage1 = document.getElementById("errorMessage1");


// form.addEventListener("submit", (e) => {
//   const errors =[];

//   if(fullname.value.trim() === ""){
//     errors.push("Full Name is required")
//   }

//   if(phone.value.trim() == ""){
//     errors.push("Phone number is required")
//   } else if(!right()){
//     errors.push("Invalid phone number")
//   }

//   if (email.value.trim() === ""){
//     errors.push("Email address is required");
    

//   }else if (!validate()){
//     errors.push("Invalid Email");
   
//   }

//   if (errors.length > 0){

//     if (errors.includes("Invalid Email") || errors.includes("Email address is required")){
//       email.style.borderColor = "red";
//     } else{
//       email.style.borderColor = "green";
//     }

//     if (errors.includes("Full Name is required")){
//       fullname.style.borderColor = "red";
//     } else{
//       fullname.style.borderColor = "green";
//     }

//     if (errors.includes("Phone number is required") || errors.includes("Invalid phone number")){
//       phone.style.borderColor = "red";
//     } else{
//       phone.style.borderColor = "green";
//     }


//     e.preventDefault();
//     errorMessage.toggleAttribute('hidden');
//     errorMessage.innerHTML = errors.join(', ');
//   } 
// })

// function validate(){

//   let regEx = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;
//   ;
//   if (regEx.test(email.value)){
//     // document.getElementById('message').innerHTML = 'Valid email address';
//     return true;

//   } else{
    
//     // document.getElementById('errorMessage').innerHTML = 'Invalid email address';
//     return false;
//   }

// }

// function right(){
//   let exp =  /^[0-9]\d{9}$/;

//   if (exp.test(phone.value)){
//     return true;
//   } else{
//     return false
//   }

// }


// /*second form */

// form.addEventListener("submit1", (e) => {
//   const errors1 =[];


//   if(first.value.trim() === ""){
//     errors1.push("First name is required")
//   }

//   if(last.value.trim() === ""){
//     errors1.push("Last name is required")
//   }

//   if(phone1.value.trim() == ""){
//     errors1.push("Phone number is required")
//   } else if(!right1()){
//     errors1.push("Invalid phone number")
//   }

//   if (email1.value.trim() === ""){
//     errors1.push("Email address is required");
    

//   }else if (!validate1()){
//     errors1.push("Invalid Email");
   
//   }

//   if (errors1.length > 0){

//     if (errors1.includes("Invalid Email") || errors1.includes("Email address is required")){
//       email1.style.borderColor = "red";
//     } else{
//       email1.style.borderColor = "green";
//     }

//     if (errors1.includes("First name is required")){
//       first.style.borderColor = "red";
//     } else{
//       first.style.borderColor = "green";
//     }

//     if (errors1.includes("Last name is required")){
//       last.style.borderColor = "red";
//     } else{
//       last.style.borderColor = "green";
//     }

//     if (errors1.includes("Phone number is required") || errors1.includes("Invalid phone number")){
//       phone1.style.borderColor = "red";
//     } else{
//       phone1.style.borderColor = "green";
//     }


//     e.preventDefault();
//     errorMessage1.toggleAttribute('hidden');
//     errorMessage1.innerHTML = errors1.join(', ');
//   } 
// })

// function validate1(){

//   let regEx = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;
//   ;
//   if (regEx.test(email1.value)){
//     // document.getElementById('message').innerHTML = 'Valid email address';
//     return true;

//   } else{
    
//     // document.getElementById('errorMessage').innerHTML = 'Invalid email address';
//     return false;
//   }

// }

// function right1(){
//   let exp =  /^[0-9]\d{9}$/;

//   if (exp.test(phone1.value)){
//     return true;
//   } else{
//     return false
//   }

// }







const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
} );

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = ()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};



const btn1 = document.getElementById('btn1');

btn1.addEventListener('click', function handleClick() {
    const initialText = 'SEE MORE';

    if (btn1.textContent === 'SEE MORE'){
        btn1.textContent = 'LESS';
    } else{
        btn1.textContent = 'SEE MORE'
    }
    
  });



const btn2 = document.getElementById('btn2');

btn2.addEventListener('click', function handleClick() {
    const initialText = 'SEE MORE';

    if (btn2.textContent === 'SEE MORE'){
        btn2.textContent = 'LESS';
    } else{
        btn2.textContent = 'SEE MORE'
    }
    
  });

  

  const btn3 = document.getElementById('btn3');

  btn3.addEventListener('click', function handleClick() {
      const initialText = 'SEE MORE';
  
      if (btn3.textContent === 'SEE MORE'){
          btn3.textContent = 'LESS';
      } else{
          btn3.textContent = 'SEE MORE'
      }
      
    });
  
  
