let number = 0;
for (let i = 0; i < 100; i++) {
  number++;
  if (number % 3 == 0) {
    if (number % 5 == 0) {
      console.log("fizzBuzz");
    } else {
      console.log("fizz");
    }
  } else if (number % 5 == 0) {
    if (number % 3 == 0) {
      console.log("fizzBuzz");
    } else {
      console.log("buzz");
    }
  } else {
    console.log(number);
  }
}

/*
let number = 0;
		for (let i = 0; i < 100; i++){
		    number++;
		    if(number % 3 == 0){
		        if(number % 5 == 0){
		            document.write("fizzBuzz<br>");
		        } 
		        else{
		            document.write("fizz<br>");
		        }
		    }
		    else if (number % 5 == 0){
		        if(number % 3 == 0){
		            document.write("fizzBuzz<br>");
		        } 
		        else {
		            document.write("buzz<br>");
		        }
		    } 
		    else { 
		        document.write(number + "<br>");
		    }
		}
        */
