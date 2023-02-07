/*
function validate() {
var nameVar = document.form1.name;
var nationalID = document.form1.id;
var insuranceCompany = document.form1.InCom;
var address = document.form1.address;
var mobileNumber = document.form1.mobileNo;
var SecMobileNumber = document.form1.SecMobileNo;
var emailVar = document.form1.email;
var file = document.getElementById("photo");

if(nameVar.value.length <=0) {
alert("Please enter the name");
nameVar.focus();
return false;
}

if(nationalID.value.length <=0) {
alert("Please enter the National ID");
nameVar.focus();
return false;
}



if(insuranceCompany.value.length <=0) {
alert("Please enter the insurance-company");
nameVar.focus();
return false;
}


if(address.value.length <=0) {
alert("Please enter the address");
nameVar.focus();
return false;
}
if(mobileNumber.value.length <=0) {
alert("Please enter the mobile Number");
nameVar.focus();
return false;
}

if(SecMobileNumber.value.length <=0) {
alert("Please enter the Secondary Mobile Number");
nameVar.focus();
return false;
}

if(emailVar.value.length <=0) {
alert("Please enter Email");
nameVar.focus();
return false;
}

if(file.files.length == 0 ){
    errors.push("Please select the patient photo!");
    return false;

  }


}

function validateString(id) {
var element = document.getElementById(id);
var letters =/^[a-zA-Z ]+$/;
if(!letters.test(element.value)) {
alert("Enter correct name");
element.focus();
return false;
}
}

function validateNumber(id) {
var element = document.getElementById(id);
var letters =/^[0-9]{10}$/;
if(!letters.test(element.value)) {
alert("Enter correct National ID , should be 10 digits");
element.focus();
return false;
}
}


function validateMobileNumber(id) {
var element = document.getElementById(id);
var letters =/^[0-9]{10}$/;
if(!letters.test(element.value)) {
alert("Enter correct Mobile number, should be 10 digits ");
element.focus();
return false;
}
}

function validateSecMobileNumber(id) {
var mobileNo = document.form1.mobileNo;
var secMobileNo = document.getElementById(id);
if(mobileNo!=secMobileNo) {
alert("Enter correct Secondary Mobile Number");
element.focus();
return false;
}
}

function validateEmail(id) {
var element = document.getElementById(id);
var letters =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
if(!letters.test(element.value)) {
alert("Enter correct Email");
element.focus();
return false;
}
}


window.addEventsListener('load' ,function()){

//check if image uploaded

if(this.files && this.files[0]){

document.querySelector('input[type="file"]').addEventListener('change',function()){

var img = document.getElementById("printImg");
img.src=URL.createObjectURL(this.files[0]);
img.onload = imgLoaded;
}
}

}

function imageIsLoaded(e){
alert(e);
}


*/


/*
function imageDis() {
const image = document.querySelector("#display_image");
var uploaded_image = "";

var m = image.addEventListener("change", function(){
const reader = new FileReader();

reader.addEventListener("load", () => {
uploaded_image = reader.result;
document.querySelector("#display_image").style.backgroundImage = 'url(${uploaded_image})';
});
return reader.readAsDataURL(this.files[0]);
})
return false;
}

*/
function func() {
  var x = document.getElementById("formID");

//display image

  
 
 //document.getElementById("display_image").innerHTML="Photo:"+imageDis();
document.getElementById("displayName").innerHTML="Name:"+x.nameid.value;

document.getElementById("displayID").innerHTML="National ID:"+x.id.value;

document.getElementById("displayDOB").innerHTML="Date Of Birth:"+x.dob.value;
document.getElementById("displayGender").innerHTML="Gender:"+x.gender.value;
document.getElementById("displayMS").innerHTML="Marital status:"+x.Mstatus.value;
document.getElementById("displayIC").innerHTML="Insurance company:"+x.InCom.value;
document.getElementById("displayAddress").innerHTML="Address:"+x.address.value;
document.getElementById("displayMobileNum").innerHTML="Primary Mobile Number:"+x.mobileNo.value;
document.getElementById("displaySecondaryNum").innerHTML="Secondary Mobile Number:"+x.SecMobileNo.value;
document.getElementById("displayEmail").innerHTML="Email address:"+x.email.value;


}



function validate() {
var val = [];
var nameVar = document.form1.name.value;
var nationalID = document.form1.id.value;
var insuranceCompany = document.form1.InCom.value;
var address = document.form1.address.value;
var mobileNumber = document.form1.mobileNo.value;
var SecMobileNumber = document.form1.SecMobileNo.value;
var emailVar = document.form1.email.value;
//var file = document.getElementById("photo");

if(nameVar.length <0) {
val.push("Please enter the name!");
}
var letters =/^[a-zA-Z ]+$/;
if(!letters.test(nameVar)) {
val.push("Enter correct name!");
}

if(nationalID.length <=0) {
val.push("Please enter the National ID!");
}
var numbers =/^[0-9]{10}$/;
if(!numbers.test(nationalID)) {
val.push("Enter correct National ID , should be 10 digits");
}

if(insuranceCompany.length <=0) {
val.push("Please enter the insurance-company!");
}

if(address.length <=0) {
val.push("Please enter the address!");
}

if(mobileNumber.length <=0) {
val.push("Please enter the mobile Number!");
}

var mobNum =/^[0-9]{10}$/;
if(!mobNum.test(mobileNumber)) {
val.push("Enter correct Mobile number, should be 10 digits ");
}

if(SecMobileNumber.length <=0) {
val.push("Please enter the Secondary Mobile Number!");
}
if(mobileNo!=secMobileNo) {
val.push("Enter correct Secondary Mobile Number!");
}

if(emailVar.length <=0) {
val.push("Please enter Email!");
}

var emailPattren =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
if(!emailPattren.test(emailVar)) {
val.push("Enter correct Email");
}

if(file.files.length == 0 ){
    val.push("Please select the patient photo!");
  }
  
  var errorMessage = " ";
  
  for(var i = 0; i<val.length; i++) {
  errorMessage+=val[i]+"\n";
  alert(errorMessage);
  }

  return false;

}



