// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
//makeGrid inputs = user inputs


function makeGrid(event) {
  //console.log('makeGrid fired'); //debug
  event.preventDefault();
  //defining variables
  var pixelGrid = document.querySelector('#pixelCanvas');
  pixelGrid.innerHTML = '';
  var rows = inputHeight.value;
  var columns = inputWidth.value;
  //initialize constructors
  for (var y = 1; y <= rows; y++) { //stack row
    //debug messages
    //console.log('loop1 firing'); //debug
    var pixelGridRow = document.createElement('tr');
    for (var i = 1; i <= columns; i++ ) { //build columns
      //debug messages
      //console.log('loop2 firing'); //debug
      var pixelGridColumn = document.createElement('td');
      pixelGridColumn.addEventListener('click', colorSquares);
      pixelGridRow.appendChild(pixelGridColumn);
    }
    pixelGrid.appendChild(pixelGridRow);
  }//insert grid to doc

}

// User input monitoring for makeGrid function
//define makeGrid inputs
var inputHeight = document.querySelector('#inputHeight');
var inputWidth = document.querySelector('#inputWidth');
var form = document.querySelector('#sizePicker');


//make eventListener to look for input updates
form.addEventListener('submit', makeGrid);


//User can change color of squares
function colorSquares(event) {
  //console.log('colorSquares fired'); //debug
  var colorInput = document.querySelector('#colorPicker');
  var colorValue = colorPicker.value;
  //console.log(colorValue); //debug
  event.target.style.backgroundColor = colorValue;

}
