//
// grid and color selector setup
//

function createGrid () {
  var section = document.createElement('section');
  var numberOfSquares = 2500;
  section.id = 'grid';
  for (var i = 0; i < numberOfSquares; i++) {
      var div = document.createElement('div');
      section.appendChild(div);
  }
  document.body.appendChild(section);
}
function createColors () {
  var aside = document.createElement('aside');
  var colorChoice = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  var numberOfColors = 7  ;
  aside.id = 'colors';
  for (var i = 0; i < numberOfColors; i++) {
      var div = document.createElement('div');
      div.style.backgroundColor =  colorChoice[i];
      div.className = 'color' + i;
      aside.appendChild(div);
  }
  document.body.appendChild(aside);
}

createGrid();
createColors();


//
// event listeners
//

function eventListeners () {
  var section = document.getElementById('grid');
  var aside = document.getElementById('colors');
  var div = section.getElementsByTagName('div');
  var newColor;
  var mouseDown = false;
  section.addEventListener('click', function () {
    for (let i = 0; i < div.length; i++) {
      if (event.target == div[i]) {
        event.target.style.backgroundColor = newColor;
      }
  }
  });

  aside.addEventListener('click', function () {
    if (event.target.className === 'color6') {
      newColor = document.getElementsByTagName('input')[0].value;
      aside.getElementsByClassName('color6')[0].style.backgroundColor = newColor;
    } else {
      newColor = event.target.style.backgroundColor;
      console.log(event.target.style.backgroundColor);
    }
  });

  section.addEventListener('mousedown', function () {
    mouseDown = true;
  });

  section.addEventListener('mouseup', function () {
    mouseDown = false;
  });

  section.addEventListener('mouseleave', function () {
    mouseDown = false;
  });


  section.addEventListener('mouseover', function () {
    if (mouseDown) {
      event.target.style.backgroundColor = newColor;
      event.stopPropagation();
    }
  });


}



eventListeners();

//
// reset button
//

// function reset () {
//   var button = document.getElementById('reset');
//   console.log(button);
//   // button.addEventListener('click', function () {
//   //   var answer = confirm('Are you sure you want to clear your work?');
//   //
//   // });
// }
// reset();
