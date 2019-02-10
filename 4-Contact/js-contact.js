"use strict";// JavaScript Document

window.addEventListener("load", function() {
	document.getElementById("submit").onclick = runSubmit;
	document.getElementById("fname").oninput = validatefName;
	document.getElementById("lname").oninput = validatelName;
	document.getElementById("email").oninput = validateEmail;
	document.getElementById("phone").oninput = validatePhone;
	document.getElementById("message").oninput = validateMessage;
});


function runSubmit() {
	validatefName();
	validatelName();
	validateEmail();
	validatePhone();
	validateMessage();
	
}

//function validateSubmit(){
//	 var validateSubmit = document.getElementById("submit");
//      if (validateSubmit.validity.valueMissing){
//          alert("Fields must be filled to Submit");
//          return false;
//      } else
//    return true;
//}

function validatefName() {
   var fName = document.querySelector("#fname");
   if (fName.validity.valueMissing) {
      fName.setCustomValidity("Enter your First Name");
   } else {
      fName.setCustomValidity("");
   }
}

function validatelName() {
   var lName = document.querySelector("#lname");
   if (lName.validity.valueMissing) {
      lName.setCustomValidity("Enter your Last Name");
   } else {
      lName.setCustomValidity("");
   }
}

function validateEmail() {
   var eMail = document.querySelector("#email");
   if (eMail.validity.valueMissing) {
      eMail.setCustomValidity("Enter a valid Email Address");
   }  else if ((/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(eMail.value)) === false) {
		eMail.setCustomValidity("Enter a valid Email Address");
	} else {
		eMail.setCustomValidity("");
	}
}

function validatePhone() {
   var phone = document.querySelector("#phone");
   if (phone.validity.valueMissing) {
      phone.setCustomValidity("Enter a valid Phone Number");
   }  else if ((/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/.test(phone.value)) === false) {
		phone.setCustomValidity("Enter a valid Phone Number");
	} else {
		phone.setCustomValidity("");
	}
}

function validateMessage() {
   var message = document.querySelector("#message");
   if (message.validity.valueMissing) {
      message.setCustomValidity("Enter your Message");
   } else {
      message.setCustomValidity("");
   }
}