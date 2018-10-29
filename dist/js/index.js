//See if js is here
console.log("index.js is online :)");


//Sample data to fill the Form
var testUserArr = [
	{ 	name: "firstname",	value: "Emanuel" },
	{	name: "lastname",	value: "Harms"	}, 
	{	name: "email", 		value: "emu@euphory.de"},
	{	name: "companyName", value: "textmetzgerei" },
	{	name: "phoneNumber", value: "01719592370" },
	{	name: "username", value: "Rakete3000" },
	{	name: "password", value: "123abc" },
	{	name: "registrationReason", value: "Google" },
	{	name: "message", value:"Ich will die Weltherrschaft an mich reißen"},
	{	name: "tohuwabohu", value:"Mr. Bean" }
];


//Log testUser Out
//Delete once running
function logTestUser(arr) {
	
	for(let i = 0; i < arr.length; i += 1) {
		console.log(arr[i].name +": " + arr[i].value);
	}

}


//Formular mit testUser befüllen
function fillFormWithTestUser(arr) {
	
	for(let i = 0; i < arr.length; i += 1) {
		console.log(arr[i].name +": " + arr[i].value);
		
		var element = document.getElementById(arr[i].name);
		if(element) {
			element.value = arr[i].value;
		} else {
			console.log(`Leider kein Element: '${arr[i].name}' gefunden`);
		}
	}

}

//Formular einlesen
function getFormFields(formId) {
	
	console.log('fu:getFormfields running...');
	
	var form = document.getElementById(formId);
	var formElementsCol = form.elements;
	var formValues = [];
	
	for( let i = 0; i < formElementsCol.length; i += 1) {
		let obj = {name: formElementsCol[i].value};
		formValues.push(obj);
	}
	
	console.log(`fu:getFormFields:`);
	console.log(formValues);
}


//Formuler absenden sendForm()
function sendForm(url) {
	
	//1. Formularfelder auslesen -> getFormFields()
	getFormFields("registrationForm");
	
	//2. Formularfelder prüfen -> validateForm()
	
	//3. Formulardaten senden
	
}


//Test Email 
function isEmail(email) {
	
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
	
}


$(document).ready(function() {
	
	//1. Funktionstest
	console.log("jquery: document is ready :)");

	//2. Event auf FillBtn legen -> fillFormWithTestUser(testUserArr)	
	$('#fillFormBtn').click( function( e ) {
	  console.log( "fillFormBtn: Handler for .click() called." );
	  
	  fillFormWithTestUser(testUserArr);	  
	  
	  e.preventDefault();
	  
	});
	
	//3. Event auf sendBtn legen -> sendForm(e)
	$('#sendBtn').click( function(e) {
		e.preventDefault();
		console.log('fu sendBtn was clicked');
		
		/*2. Versuch, Formular mit jQuery auslesen
		var formValues = [];
		$('registrationForm').each( function(elem) {
			formValues.push(elem.val());
		});
		
		console.log(formValues);
		*/
		const url = "https://192.168.62.64/CustomerRegistration/api/Registration/";
		sendForm(url);
		
		
	});


});

