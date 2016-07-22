function validate(){
		var emailerror=checkemail();
		var day=checkday();
		var month=checkmonth();
		var year=checkyear();
		var gender=checksex();
		var e=checkeducation();
		var n=checkcountry() ;
		var i=checkid(document.from.id);
		}
function checkemail(){
	
		var e=document.from.email.value;
		 
		if(e==""){
		document.getElementById("email_error").innerHTML = "No Email Address";
        return false;
		}
		else{
		document.getElementById("email_error").innerHTML = "";
        return true;
		}
		}
function checkday()
		{
		var day=document.from.day.value;
		if(day<1 || day>31)
		{
		document.getElementById("day_error").innerHTML = "Must be 1-31 number";
        return false;
		}
		else{
		document.getElementById("day_error").innerHTML = "";
        return true;
		}
		
		}
function checkmonth()
		{
		var month=document.from.month.value;
		if(month< 1 || month>12)
		{
		document.getElementById("month_error").innerHTML = "Must be 1-12 number";
        return false;
		}
		else{
		document.getElementById("month_error").innerHTML = "";
        return true;
		}
		
		}
function checkyear()
		{
		var year=document.from.year.value;
     		
		if(year<1 || year>1996)
		{
		document.getElementById("year_error").innerHTML = "Must be 18 year";
        return false;
		}
		else{
		document.getElementById("year_error").innerHTML = "";
        return true;
		}
		
		}
function checksex(){
		var sex="";
		var len = document.from.sex.length;
		for(var i=0;i<len;i++){
		if(document.from.sex[i].checked){
		sex=document.from.sex[i].value;
		break;
		}
		}
		if(sex==""){
		document.getElementById("gender_error").innerHTML = "Must be Check gender";
        return false;
		}
		else{
		document.getElementById("gender_error").innerHTML = "";
        return true;
		}
		}
function checkeducation(){
		var edu="";
		var len = document.from.education.length;
		for(var i=0;i<len;i++){
		if(document.from.education[i].selected){
		edu=document.from.education[i].value;
		break;
		}
		}
		if(edu=="None"){
		document.getElementById("e_error").innerHTML = "Must be chosen education";
        return false;
		}
		else{
		document.getElementById("e_error").innerHTML = "";
        return true;
		}
		}
		
function checkcountry() 
      { 

    var country = document.getElementById('country').value;
    var myArray = ['Bangladeshi', 'American', 'Pakistani','Indian','Canadian','Arabian','Brazilian','Afghanistan'];
    if(myArray.indexOf(country) == -1)
    {
			document.getElementById("country_error").innerHTML = "Must be use correct country";
        return false;
    }
    else{
		document.getElementById("country_error").innerHTML = "";
        return true;
		}
}
function checkid(inputtxt)
{
  var id = /^\d{8}$/;
  if(inputtxt.value.match(id))
       {
		document.getElementById("id_error").innerHTML = "";
        return true;
    }
    else{
		document.getElementById("id_error").innerHTML = "Must be use 8 digite id number";
        return false;
		}     
}	
		
		