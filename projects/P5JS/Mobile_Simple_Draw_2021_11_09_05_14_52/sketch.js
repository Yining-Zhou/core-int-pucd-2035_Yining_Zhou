/*
 * @name Simple Draw
 * @description Touch to draw on the screen using mouseX, mouseY, pmouseX, and pmouseY values.
 */

function setup() {
  createCanvas(displayWidth, displayHeight);
  strokeWeight(60);
  stroke(6,21);
}

function touchMoved() {
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}
