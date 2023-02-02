function date(){
var curr = new Date; 
var first = curr.getDate() - curr.getDay();
var firstday = new Date(curr.setDate(first)).toString();
//document.write(firstday);
document.getElementById("date").innerHTML = firstday;
//alert(firstday);
//document.write(firstday);
//return firstday;
}

//document.write(date());

//var val = document.getElementById("date");
//val.innerHTML = date();

//var val = date();
//document.getElementById("date").innerHTML = val;
//document.write(val);