
function validate() {
  //event.preventDefault();

var val=[ ];
var nameVar = document.form1.name.value;


var nationalID = document.form1.Nid.value;

var insuranceCompany = document.form1.InCom.value;

var address = document.form1.address.value;

var mobileNumber = document.form1.mobileNo.value;
var SecMobileNumber = document.form1.SecMobileNo.value;

var emailVar = document.form1.email.value;

var file = document.getElementById("photo");

if(nameVar.length == 0) {
val.push("Please enter the name!");
}

var letters =/^[a-zA-Z]+$/;
if(!letters.test(nameVar) && !nameVar.length == 0) {
val.push("Enter correct name!");
}



if(nationalID.length == 0) {
val.push("Please enter the National ID!");
}

var numbers =/^[0-9]{10}$/;
if(!numbers.test(nationalID.value)) {
val.push("Enter correct National ID , should be 10 digits");
}

if(insuranceCompany.length ==0) {
val.push("Please enter the insurance-company!");
}

if(address.length ==0) {
val.push("Please enter the address!");
}

if(mobileNumber.length ==0) {
val.push("Please enter the mobile Number!");
}

var mobNum =/^[0-9]{10}$/;
if(!mobNum.test(mobileNumber)&& !mobileNumber.length ==0 ) {
val.push("Enter correct Mobile number, should be 10 digits ");
}


if(SecMobileNumber.length ==0 && !mobNum.test(SecMobileNumber)) {
val.push("Please enter the Secondary Mobile Number!");
}


if(emailVar.length ==0) {
val.push("Please enter Email!");
}



var emailPattren =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
if(!emailPattren.test(emailVar.value) && !emailVar.length ==0) {
val.push("Enter correct Email");
}

if(file.files.length == 0 ){
    val.push("Please select the patient photo!");
  }

if(val.length > 0) {

  var errorMessage = "";
  for(var i = 0 ; i<val.length ; i++) 
     errorMessage+= val[i]+"\n";
     
     }
    
  alert(errorMessage);
  return false;
  

}



