//Basic JavaScript Programs

//Library Functions

let numericalInput = function () {
  let input = prompt("Enter a number: ");
  return input;
}

let stringInput = function() {
  let input = prompt("Enter a string: ");
  return input;
}

let clearOutput = function(id) {
  document.getElementById(id).innerHTML = "";
}


//End Library Functions


//FizzBuzz
let projectOne = function() {
  let input = numericalInput();
  if (input != null) {
    document.getElementById("project1-output").innerHTML = fizzBuzz(input);
  }
}

let fizzBuzz = function(input) {
  let output = "";
  for(let i = 1; i <= input;i++){
    output+= i + " ";
    if(i%3 == 0){
      output += "Fizz";
    }
    if(i%5 == 0){
      output+= "Buzz";
    }
    output += "<br />";
  }
  return output;
}
//End FizzBuzz Program


//Reverse String
let projectTwo = function(){
  let input = stringInput();
  if(input != null) {
    document.getElementById("project2-output").innerHTML = reverseString(input);
  }
}

let reverseString = function(input) {
  let output = "";
  for(let i = input.length-1;i>=0;i--){
    output += input.charAt(i);
  }
  return output;
}
//End Reverse String


//Pig Latin
let projectThree = function() {
  let input = stringInput();
  if(input != null) {
    document.getElementById("project3-output").innerHTML = pigLatin(input);
  }
}

let pigLatin = function(input) {
  words = input.split(" ");
  let output = "";
  for(let i=0;i<words.length;i++){
    output += words[i].slice(1) + "-" + words[i].charAt(0) + "ay" + " ";
  }
  return output;
}
//End Pig Latin


//Count Vowels
let projectFour = function() {
  let input = stringInput();
  if(input != null) {
    document.getElementById("project4-output").innerHTML = countVowels(input);
  }
}

let countVowels = function(input) {
  let aCount = 0;
  let eCount = 0;
  let iCount = 0;
  let oCount = 0;
  let uCount = 0;
  for(let i=0;i<input.length-1;i++){
    switch(input.toLowerCase().charAt(i)){
      case 'a':
        aCount++;
        break;

      case 'e':
        eCount++;
        break;

      case 'i':
        iCount++;
        break;

      case 'o':
        oCount++;
        break;

      case 'u':
        uCount++;
        break;

      default:
        ;
    }
  }

  return "A's: " + aCount + "<br />" +
         "E's: " + eCount + "<br />" +
         "I's: " + iCount + "<br />" +
         "O's: " + oCount + "<br />" +
         "U's: " + uCount + "<br />";
}
//End Count Vowels



//Word Count
let projectFive = function() {
  let inputFile = document.getElementById("projectFiveInputFile");
  document.getElementById("project5-output").innerHTML = countWords(inputFile);
}
let countWords = function(inputFile){
  return inputFile.substr(0,inputFile.length);
}

let readSingleFile = function(evt) {
    //Retrieve the first (and only!) File from the FileList object
    var f = evt.target.files[0];

    if (f) {
      var r = new FileReader();
      r.onload = function(e) {
	      var contents = e.target.result;
        alert( "Got the file.n"
              +"name: " + f.name + "n"
              +"type: " + f.type + "n"
              +"size: " + f.size + " bytesn"
              + "starts with: " + contents.substr(0, contents.length)
        );
      }
      r.readAsText(f);
    } else {
      alert("Failed to load file");
    }
  }
document.getElementById('projectFiveInputFile').addEventListener('change', readSingleFile, false);

//End Word Count
