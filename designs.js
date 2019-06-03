// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
//makeGrid inputs = user inputs

function makeGrid(event) {
  event.preventDefault();
  console.log('makeGrid firing'); //for debugging
  var rows = Number(inputHeight.value);
  var columns = Number(inputWidth.value);
  var pixelGrid = document.querySelector('#pixelCanvas'); //get correct object
  var pixelGridRowConstructor = ''; //initialize constructors
  var pixelGridColumnConstructor = '';
  pixelGrid.innerHTML = '';
  for (var i = 1; i <= rows; i++ ) { //build columns
    pixelGridColumnConstructor += '<td></td>';
  }
  for (var y = 1; y <= columns; y++) { //stack rows
    pixelGridRowConstructor += '<tr>' + pixelGridColumnConstructor + '</tr>';
  }
  pixelGrid.innerHTML = pixelGridRowConstructor; //insert grid to doc
}
// User input monitoring for makeGrid function
//define makeGrid inputs
var inputHeight = document.querySelector('#inputHeight');
var inputWidth = document.querySelector('#inputWidth');
var form = document.querySelector('#sizePicker');

//make eventListener to look for input updates
form.addEventListener('submit', makeGrid);
