var insects = [
  {
    name: 'Ant Nest Beetle',
    image: 'ant-nest-beetle.jpg',
    family: 'Carabidae',
    min size: '6',
    max size: '20',
    eats insects: 'Yes',
    eats dung: 'No',
    eats plants: 'No'
  },
  {
    name: '',
    image: '',
    family: '',
    min size: '',
    max size: '',
    eats insects: '',
    eats dung: '',
    eats plants: ''
  },
  {
    name: '',
    image: '',
    family: '',
    min size: '',
    max size: '',
    eats insects: '',
    eats dung: '',
    eats plants: ''
  },
  {
    name: '',
    image: '',
    family: '',
    min size: '',
    max size: '',
    eats insects: '',
    eats dung: '',
    eats plants: ''
  },
  {
    name: '',
    image: '',
    family: '',
    min size: '',
    max size: '',
    eats insects: '',
    eats dung: '',
    eats plants: ''
  },
]


// ##########################################################
// START DO NOT CHANGE ZONE
// ##########################################################

var writeInsects = function (bugs) {
  document.write('<h1>Insects</h1>');

  document.write('<ol>');

  bugs.forEach(function (bug) {
    document.write('<li>');
    document.write('<h2>' + bug.name + '</h2>');
    document.write('<img src="images/' + bug.img + '" alt="">');
    document.write('<dl>');
    document.write('<dt>Family</dt>');
    document.write('<dd><i>' + bug.family + '</i></dd>');
    document.write('<dt>Size</dt>');
    document.write('<dd>' + bug.size[0] + '–' + bug.size[1] + ' mm</dd>');
    document.write('<dt>Eats</dt>');

    document.write('<dd>');

    if (bug.food.eatsInsects) {
      document.write('Insects');
    }

    if (bug.food.eatsDung) {
      document.write('Dung');
    }

    if (bug.food.eatsPlants) {
      document.write('Plants');
    }

    document.write('</dd>');

    document.write('</dl>');
    document.write('</li>');
  });

  document.write('</ol>');
};

writeInsects(insects);

// ##########################################################
// END DO NOT CHANGE ZONE
// ##########################################################
