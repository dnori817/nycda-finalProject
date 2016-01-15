$("#banner img").velocity({ 
  scale: 1.1},
  {delay: 800
});



$(".col-md-3").mouseover(function(){
		$(this).velocity({fontSize: "35px"});
	});	

$(".col-md-3").mouseleave(function(){
		$(this).velocity({fontSize: "30px"});
	});



$(document).ready(function(){

	
	var firstName;
	var lastName;
	var street;
	var city;
	var state;
	var zip;
	var option;
	var email;


	//user click submit
	$("#submitButton").click(function(){
		//grabs first name
		firstName = $("#firstName").val();
		//grabs last name
		lastName = $("#lastName").val();
		//grabs street
		street = $("#street").val();
		//grabs city
		city = $("#city").val();
		//grabs state
		state = $("#state").val();
		//grabs zip
		zip = $("#zip").val();
		//grabs email address
		email = $("#email").val();
		//grab radio buttons
		$('input[name="options"]:checked').each( function() {
		   
		   console.log(this.value);
		   
		   option = this.value;
		});


		console.log("FIRST NAME: " + firstName);
		console.log("LAST NAME: " + lastName);
		console.log("STREET: " + street);
		console.log("CITY: " + city);
		console.log("STATE: " + state);
		console.log("ZIP: " + zip);
		console.log("EMAIL: " + email);
		console.log("FAVE MOVIE: " + option);

		//shows alert if any fields are left empty
		//goes to payment page when all fields are filled in
		// if(( firstName == "")||( lastName == "")||( street == "")||( city == "")||( state == "null")||( zip == "")||( email == "")){
		// 	alert("PLEASE COMPLETE ALL FIELDS")
		// }
		 
		if ($('#options2').is(':checked')) {
    		 location.href="deny.html";
		  }
		else if ($('#options3').is(':checked')) {
    		 location.href="deny.html";
		  }

		else if ($('#options4').is(':checked')) {
    		 location.href="deny.html";
		  } 

		else if(( firstName != "")&&( lastName != "")&&( street != "")&&( city != "")&&( state != "null")&&( zip != "")&&( email != "")){
			window.location.href = "signup.html";
		}
		else {
			alert("PLEASE COMPLETE ALL FIELDS")
		}


		
	});

	var user
	var pass1
	var pass2



	//user click submit
	$("#submitButton2").click(function(){
		//grabs user name
		user = $("#user").val();
		//grabs password
		pass1 = $("#pass1").val();
		//grabs retypedpassword
		pass2 = $("#pass2").val();
		


		console.log("USERNAME: " + user);
		console.log("PASSWORD: " + pass1);

		if (pass1!=pass2){
			alert("PASSWORDS MUST MATCH");
		}
		else if ((user=="")||(pass1=="")||(pass2=="") ){
			alert("PLEASE COMPLETE ALL FIELDS");
		}

		else {
			window.location.href = "member.html";
		}
		
		
	
	});
});

function check(form) { /*function to check userid & password*/
                /*the following code checkes whether the entered userid and password are matching*/
                if(form.userid.value == "test123" && form.pswrd.value == "12345") {
                    window.open('member.html')/*opens the target page while Id & password matches*/
                }
                else {
                    alert("Incorrect Password or Username")/*displays error message*/
                }
            }


function checkPass()
{
    //Store the password field objects into variables ...
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    //Store the Confimation Message Object ...
    var message = document.getElementById('confirmMessage');
    //Set the colors we will be using ...
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    //Compare the values in the password field 
    //and the confirmation field
    if(pass1.value == pass2.value){
        //The passwords match. 
        //Set the color to the good color and inform
        //the user that they have entered the correct password 
        pass2.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Passwords Match!"
    }else{
        //The passwords do not match.
        //Set the color to the bad color and
        //notify the user.
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Passwords Do Not Match!"
    }
}  

