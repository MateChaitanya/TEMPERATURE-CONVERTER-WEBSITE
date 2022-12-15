var lastEdited = "celsius";  // initialize the lastEdited flag to any of the three input fields.

//button listeners
document.getElementById("submit").onclick = convert;
document.getElementById("reset").onclick = reset;

//picks up on if and when an input field changes, then sets the lastEdited flag to the input field that was changed.
document.getElementById("celsius").onchange = function() {
  lastEdited = "celsius";
};
document.getElementById("fahrenheit").onchange = function() {
  lastEdited = "fahrenheit";
};
document.getElementById("kelvin").onchange = function() {
  lastEdited = "kelvin";
};
function convert(temp) {

    //initialize local variables
    var celsius = document.getElementById("celsius").value;
    celsius = parseFloat(celsius);
  
    var fahrenheit = document.getElementById("fahrenheit").value;
    fahrenheit = parseFloat(fahrenheit);
  
    var kelvin = document.getElementById("kelvin").value;
    kelvin = parseFloat(kelvin);
  
    //temp values
    var conversionC;
    var conversionF;
    var conversionK;
    //if the celsius field changes, convert the fahrenheit and kelvin values
  if (lastEdited === "celsius") {
    conversionF = celsius * 9 / 5 + 32;
    conversionK = celsius + 273;
    //round the converted fahrenheit and kelvin values
    document.getElementById("fahrenheit").value = Math.round(conversionF);
    document.getElementById("kelvin").value = Math.round(conversionK);
  } 
    //if the fahrenheit field changes, convert the celsius and kelvin values
    else if (lastEdited === "fahrenheit") {
    conversionC = (fahrenheit - 32) * 5 / 9;
    conversionK = conversionC + 273;
    //round the converted celsius and kelvin values
    document.getElementById("celsius").value = Math.round(conversionC);
    document.getElementById("kelvin").value = Math.round(conversionK);
  } 
   //if the kelvin field changes, convert the celsius and fahrenheit values
   else if (lastEdited === "kelvin") {
    conversionC = kelvin - 273;
    conversionF = conversionC * 9 / 5 + 32;
    //round the converted celsius and fahrenheit values
    document.getElementById("celsius").value = Math.round(conversionC);
    document.getElementById("fahrenheit").value = Math.round(conversionF);
  }

  //get the current conversion temp values and store them in the input fields
  document.getElementById("celsius").innerHTML = conversionC;
  document.getElementById("fahrenheit").innerHTML = conversionF;
  document.getElementById("kelvin").innerHTML = conversionK;
}
//reset function for the reset button to reset all current values
function reset() {
    document.getElementById("celsius").value = 0;
    document.getElementById("fahrenheit").value = 0;
    document.getElementById("kelvin").value = 0;
  }
