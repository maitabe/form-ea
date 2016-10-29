$(document).ready(function(){



	$('button').click(function(e){
		e.preventDefault();

//========= email field ===========

		var email = $('#email_txt').val();

		//var atSymbol = false;

		var emailValid = false;

		//is there an @ symbol?
		for (var i = 0; i < email.length; i++) {
			console.log(email[i]);
			//brandon@gmail.com
			if(email[i] === '@'){
				//atSymbol = true;
				emailValid = true;
				console.log('this is an email');
				console.log('here is the atSymbol var from inside the for loop', emailValid);
				break;
			}
		}

		//if there is not
		if(emailValid === false){
			console.log('here is the atSymbol outsode the for loop', emailValid);
			console.log('this is not an email');
			$('#email_field').append('<p class="t-color">the email address should have @ </p>');
			$('input#email_txt').addClass('red-border');
		}

		// remove red color input when writing again
		$('input#email_txt').focus(function() {
			$('input#email_txt').removeClass('red-border');
			$('#email_field p').remove();
		});

// ========= gender field ===========
		var genderSel = $('#gender_user :selected').attr('value');

		var genderValid = true;

		if(genderSel === '') {
			genderValid =  false;
			$('#gender_user').append('<p class="t-color">Gender needs to be selected</p>');
			$('select').addClass('red-border');
		}

		// remove red color input when writing again
		$('select').focus(function() {
			$('select').removeClass('red-border');
			$('#gender_user p').remove();
		});


// ========= age field ===========
		var age = $('#age_txt').val();

		var ageValid = true;

		if(age < 18){
			ageValid = false;
			$('#age_field').append('<p class="t-color">You still a kid come back when you are 18 yrs old</p>');
			$('input#age_txt').addClass('red-border');
		}

		// remove red color input when writing again
		$('input#age_txt').focus(function() {
			$('input#age_txt').removeClass('red-border');
			$('#age_field p').remove();
		});

// ========= name field ===========
		var fullName = $('#name_txt').val();

		var nameValid = false;

		// var name_valid = false;
		var indSpace = fullName.indexOf(" ");
		if(indSpace === 0){
			$('#name_field').append('<p class="t-color">delete space at the beginning of your name</p>');
		}
		else if (indSpace > 0 ){
			nameValid = true;
			console.log('name is full name');
			// var spaceLttr = indSpace + 1;
		}else{
			$('#name_field').append('<p class="t-color">write your name and last name</p>');
			$('input#name_txt').addClass('red-border');
		}


		// remove red color input when writing again
		$('input#name_txt').focus(function() {
			$('input#name_txt').removeClass('red-border');
			$('#name_field p').remove();
		});

		//create condition to submit form
		if (emailValid && genderValid && ageValid && nameValid){

			// $('form p').append('<p>Successful!!!</p>');

		}else{
			emailValid = false;
			genderValid = false;
			ageValid = false;
			nameValid = false;

			// $('form p').remove('<p>Successful!!!</p>');
		}
		console.log(test);

	});


});