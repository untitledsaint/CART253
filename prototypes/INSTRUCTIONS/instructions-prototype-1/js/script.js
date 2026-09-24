/**
 * prototype 1
 * antonyhatem
 *
 * This is one out of three prototypes for the Instructions assignment. This first one is
 * a straightforward concept, not abstract or odd in any way.
 */

"use strict";

/**
 * Making the background/Canvas that stretches 
 * to the full window for immersion.
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}


/**
 * Giving background some color.
*/
function draw() {
  background(87, 3, 3);

  drawCandle();
  drawFlamebase();
  drawFlametip();
  drawString();
}

function drawCandle() {
  push();
  fill(252, 245, 187);
  rect(300, 300, 300, 500);
  pop();
}

function drawFlamebase() {
  push();
  fill(255, 150, 51);
  ellipse(450, 225, 80,150);
  pop();
}

function drawFlametip() {
  push();
  fill(255, 255, 0);
  triangle(475, 220, 425, 300, 475, 300);
  pop();
}

function drawString() {
  push();
  stroke(0);
  strokeWeight(2);
  line(450, 0, 450, 250);
  pop();
}
