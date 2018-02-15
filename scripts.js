function getTriangleArea(a, h) {
  if ( a <= 0  ||  h <= 0 ) {
  alert('Nieprawidłowe dane!')
  } else {
  return a*h/2;
  }
}
console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, 15);
conole.log(triangle1Area);
var triangle2Area = getTriangleArea(10, 10);
conole.log(triangle2Area);
var triangle3Area = getTriangleArea(9, 8);
conole.log(triangle3Area);
