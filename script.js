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
  var numberOfColors = 7  ;
  aside.id = 'colors';
  for (var i = 0; i < numberOfColors; i++) {
      var div = document.createElement('div');
      div.className =  'color' + i;
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
  // var div = section.getElementsByTagName('div')
  var newColor;
  var mousePosition = false;

  section.addEventListener('click', function () {
    event.target.className = newColor;
  });

  aside.addEventListener('click', function () {
    var chosen = event.target;
    newColor = event.target.className;
    document.querySelector(event.target.className)
  })

  section.addEventListener('mousedown', function () {
    mousePosition = true;
  });

  section.addEventListener('mouseup', function () {
    mousePosition = false;
  });

  section.addEventListener('mouseover', function () {
    if (mousePosition) {
      event.target.className = newColor;
    }
  });


}


eventListeners();
