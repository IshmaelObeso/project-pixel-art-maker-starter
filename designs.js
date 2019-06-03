// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
//makeGrid inputs = user inputs

function makeGrid(rows, columns) {
  var pixelGrid = document.querySelector('#pixelCanvas'); //get correct object
  var pixelGridRowConstructor = ''; //initialize constructors
  var pixelGridColumnConstructor = '';
  for (var i = 1; i <= rows; i++ ) { //build columns
    pixelGridColumnConstructor += '<td></td>';
  };
  for (var i = 1; i <= columns; i++) { //stack rows
    pixelGridRowConstructor += '<tr>' + pixelGridColumnConstructor + '</tr>';
  };
  pixelGrid.innerHTML = pixelGridRowConstructor; //insert grid to doc
}
// User input monitoring for makeGrid function
//define makeGrid inputs
var inputHeight = document.querySelector('#inputHeight');
var inputWidth = document.querySelector('#inputWidth');
var rows = Number(inputHeight.value);
var columns = Number(inputWidth.value);
