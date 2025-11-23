let length;
let width;

function calculateArea() {
  // 1. Fetch values from input fields and convert them to numbers
  length = parseFloat(document.getElementById('length').value);
  width = parseFloat(document.getElementById('width').value);

  // 2. Calculate the area
  let area = length * width;

  // 3. Display the calculated result in the 'result' paragraph
  document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}
function calculateArea() {
    // ... only calculation happens here ...
    let area = length * width;
  } // Function ends here
  // The line below is outside the function!
  document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;