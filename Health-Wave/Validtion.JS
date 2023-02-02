function validate() {
var nameVar = document.form1.name;
var nationalID = document.form1.id;
var insuranceCompany = document.form1.InCom;
var address = document.form1.address;
var mobileNumber = document.form1.mobileNo;
var SecMobileNumber = document.form1.SecMobileNo;
var emailVar = document.form1.email;

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


function func() {
  var x = document.getElementById("formID");
  alert("Name:"+x.nameid.value+"\nNational ID:"+x.id.value+"\nDate Of Birth:"+x.dob.value+"\nGender:"+
  x.gender.value+"\nMarital status:"+x.Mstatus.value+"\nInsurance company:"+x.InCom.value+"\nAddress:"+
  x.address.value+"\nPrimary Mobile Number:"+x.mobileNo.value+"\nSecondary Mobile Number:"+x.SecMobileNo.value+
  "\nEmail address:"+x.email.value);


}
