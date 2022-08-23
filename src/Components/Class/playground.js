<<<<<<< HEAD
// JS Class - blueprint (template)

class Color {
  constructor(red, green, blue) {
    this.red = red;
    this.green = green;
    this.blue = blue;
  }
  paint() {
    console.log('painting');
  }
}

const color1 = new Color(255, 0, 150);
const color2 = new Color(255, 0, 150);
const color3 = new Color(255, 0, 150);

console.log(color1.red); //255
color3.paint(); // painting

class Rectangle {
  constructor(height, len) {
    this.height = height;
    this.len = len;
  }
  area() {
    return this.height * this.len;
=======
// Class in JS? - template / blueprint

class Rectangle {
  constructor(len, width) {
    this.len = len;
    this.width = width;
  }
  area() {
    return this.len * this.width;
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
  }
}

class Cube extends Rectangle {
<<<<<<< HEAD
  constructor(height, len, width) {
    super(height, len);
    this.width = width;
  }
  volume() {
    return this.area() * this.width;
  }
}

const cube1 = new Cube(2, 3, 5);
console.log(cube1.volume());
=======
  constructor(len, width, heigth) {
    super(len, width);
    this.heigth = heigth;
  }
  volume() {
    return this.area() * this.heigth;
  }
}

const rect1 = new Rectangle(2, 3);
rect1.area(); //6
const rect2 = new Rectangle(4, 5);
// rect1.length; //2
// rect2.length; //4
const cube1 = new Cube(3, 4, 5);
cube1.volume(); //
console.log('volume', cube1.volume());
console.log('area', cube1.area());
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
