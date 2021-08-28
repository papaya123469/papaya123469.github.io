// Write JavaScript here 
function doMath() {
          var numOne = document.getElementById('1st').value;
          var numTwo = document.getElementById('2nd').value;
          var theProduct = parseInt(numOne) * parseInt(numTwo);
          document.getElementById("result").innerHTML = "Result = " + theProduct;
            }