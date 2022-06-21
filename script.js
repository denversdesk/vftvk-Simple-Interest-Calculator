//Function to computer the interest
function compute()
{
    //Get variable from principal input tag
	var principal = document.getElementById("principal").value;
		//Validate principal value to make sure it is positive
		if(principal<=0){
			alert('Enter a positive number');
			document.getElementById("principal").focus();
			return false;
		}
		
	//Get variable from rate & years input tags
	var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;
	
	//Formula to calculate the interest
	var interest = principal * years * rate /100;
	
	//Calculate the year from current year interest to be paid out
	var year = new Date().getFullYear()+parseInt(years);
	
	//Output the result
	document.getElementById("result").innerHTML="If you deposit \<span\>"+principal+"\<\/span\>,\<br\>at an interest rate of \<span\>"+rate+"%\<\/span\>\<br\>You will receive an amount of \<span\>"+interest+"\<\/span\>,\<br\>in the year \<span\>"+year+"\<\/span\>\<br\>"
}

//Function to update the rate when the slider changes
function updateRate() 
{
    //Get value of rate slider when it changes on the slider
	var rateval = document.getElementById("rate").value;
	
	//Insert the value to the rate_val span tag
    document.getElementById("rate_val").innerText=rateval;
}
