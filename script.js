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
  var div = document.getElementsByClassName('pixel');
  var newColor;

  section.addEventListener('click', function () {
    event.target.className = newColor;
    console.log(event.target)
  });

  aside.addEventListener('click', function () {
    var chosen = event.target;
    newColor = event.target.className;
    document.querySelector(event.target.className)
  })
}
eventListeners();
