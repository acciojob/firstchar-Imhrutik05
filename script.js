function firstChar(text) {
  // your code here
	let result = '';
	text = text.trim();
	if (text.length > 0){
		return text.charAt(0);
	}
	return result;
	
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
//alert(firstChar(text));
