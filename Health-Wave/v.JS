
/*
function validate() {
  //event.preventDefault();

var val=[];
var nameVar = document.form1.nameid;
var nationalID = document.form1.id;
var insuranceCompany = document.form1.InCom;
var address = document.form1.address;
var mobileNumber = document.form1.mobileNo;
var SecMobileNumber = document.form1.SecMobileNo;
var emailVar = document.form1.email;
//var file = document.getElementById("photo");

if(nameVar.value.length <=0) {
val.push("Please enter the name!");
}

var letters =/^[a-zA-Z ]+$/;
if(!letters.test(nameVar.value)) {
val.push("Enter correct name!");
}



if(nationalID.value.length <=0) {
val.push("Please enter the National ID!");
}

var numbers =/^[0-9]{10}$/;
if(!numbers.test(nationalID.value)) {
val.push("Enter correct National ID , should be 10 digits");
}

if(insuranceCompany.value.length <=0) {
val.push("Please enter the insurance-company!");
}

if(address.value.length <=0) {
val.push("Please enter the address!");
}

if(mobileNumber.value.length <=0) {
val.push("Please enter the mobile Number!");
}

var mobNum =/^[0-9]{10}$/;
if(!mobNum.test(mobileNumber.value)) {
val.push("Enter correct Mobile number, should be 10 digits ");
}

if(SecMobileNumber.value.length <=0) {
val.push("Please enter the Secondary Mobile Number!");
}
if(mobileNo.value!=secMobileNo.value) {
val.push("Enter correct Secondary Mobile Number!");
}

if(emailVar.value.length <=0) {
val.push("Please enter Email!");
}



var emailPattren =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
if(!emailPattren.test(emailVar.value)) {
val.push("Enter correct Email");
}

if(file.files.length == 0 ){
    val.push("Please select the patient photo!");
  }

if(val.length>=0) {
/*
 var i = 0
  var errorMessage = "";
  for(i; i<val.length ; i++) {
     errorMessage+=val[i]+"\n";
     */
     */
 /*    
displayError(val);
  }
    
 // alert(errorMessage);
  return false;
  

}


function displayError(arr) {
  var errorMessage = "";
for(var i = 0; i<arr.length;i++)
     errorMessage+=val[i]+"\n";
     
     alert(errorMessage);

}
 
*/
function validationFunc() {
  event.preventDefault();
  var errors=[];
  var ffname=document.form1.nameid.value;
  var fsname=document.form1.id.value;
  
   
  if(ffname=="" || ffname==null) 
  {
    errors.push("Please provide the First name!");
  }
  if(fsname==""|| fsname==null) 
  {
    errors.push("Please provide last name!");
  }
     if(/^[0-9]/.test(ffname)) 
     {
      errors.push("Error: First name can't include invalid characters!");
     }
     if(/^[0-9]/.test(fsname)) 
     {
      errors.push("Error: Last name can't include invalid characters!");
     }
   if(fnid=="" || fnid==null)
   {
    errors.push("Please provide the National ID!");
   }
   if(!fnid ==null || !fnid =="" && !/^\d{10}$/.test(fnid)) 
     {
      errors.push("Error: National ID must include 10 digits!");
     }
    
   if(errors.length > 0)
   {
    var i=0;
    var msgAlert="";
    for (i; i<errors.length; i++)
    msgAlert +=errors[i]+"\n";
    alert(msgAlert);
    return false;
   }
