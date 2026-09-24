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
  fill(255);
  rect(300, 300, 300, 300);
  pop();
}

function drawFlamebase() {
  push();
  fill(255, 0, 0);
  ellipse(450, 300, 150, 50);
  pop();
}

function drawFlametip() {
  push();
  fill(255, 255, 0);
  triangle(450, 250, 425, 300, 475, 300);
  pop();
}

function drawString() {
  push();
  stroke(0);
  strokeWeight(2);
  line(450, 0, 450, 250);
  pop();
}
