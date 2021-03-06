/*
 * @name Input and Button
 * @description Input text and click the button to see it affect the the canvas.
 */
let input, button, greeting;

function setup() {
  // create canvas
  createCanvas(1400, 800);

  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);

  greeting = createElement('h2', 'what is your name?');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(80);
}

function greet() {
  const name = input.value();
  greeting.html('hello ' + name + '! P5js-2');
  input.value('');

  for (let i = 0; i < 200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random(2 * PI));
    text(name, 0, 0);
    pop();
  }
}
