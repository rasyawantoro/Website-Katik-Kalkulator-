document.getElementById('calculate').addEventListener('click', function() {
    var side = document.getElementById('side').value;
    var area = side * side;
    var perimeter = 4 * side;
    document.getElementById('area').value = area;
    document.getElementById('perimeter').value = perimeter;
  });

  