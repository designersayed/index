function validate(){
		if(checkemail()){
		if(checkday()){
		if(checkmonth()){
		if(checkyear()){
		if(checkeducation()){
		if(checksex()){
		if(checkcountry()){
		if(checkid()){
		}
		}
		}
		}
		}
		}
		}
		}
		return false;
		}
function checkemail(){
		var e=document.from.email.value;
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if((e=="")||(!e.match(emailReg))){
		document.getElementById("email_error").innerHTML = "Enter valide Email Address";
        return false;
		}
		else{
		document.getElementById("email_error").innerHTML = "";
        return true;
		}
		}
function checkday(day)
		{
		var day=document.from.day.value;
		if(isNaN(day) || day<1 || day>31)
		{
		document.getElementById("day_error").innerHTML = "Must be 1-31 number";
        return false;
		} 
		else{
		document.getElementById("day_error").innerHTML = "";
        return true;
		}		
		}
function checkmonth(month)
		{
		var month = document.from.month.value;
		if(isNaN(month) ||month< 1 || month>12)
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
		if(isNaN(year) ||year<1 || year>1996)
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
    var country=document.from.country.value;
    var Array = ['Bangladeshi', 'American', 'Pakistani','Indian','Canadian','Arabian','Brazilian','Afghanistan'];
    if(Array.indexOf(country) == -1)
    {
		document.getElementById("country_error").innerHTML = "Must be use correct country";
        return false;
    }
    else{
		document.getElementById("country_error").innerHTML = "";
        return true;
		}
}
function checkid(){	
		var p=document.from.id.value;
		var id = /^\d{8}$/;		 
		if((p=="")||(!p.match(id))){
		document.getElementById("id_error").innerHTML = "Must 8 degite number";
        return false;
		}
		else{
		document.getElementById("id_error").innerHTML = "";
        return true;
		}
		}	
		
		