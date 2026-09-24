/**
 * prototype 2
 * antonyhatem
 *
 * This is the second out of three prototypes for the Instructions assignment. This second one is
 * a more abstract concept prototype.
 */

"use strict";

/**
 * Making the background/Canvas that stretches 
 * to the full window for immersion.
*/
function setup() {
  createCanvas(600, 600);
  background(250, 0, 127);
  noStroke();
}


/**
 * Giving background some color.
*/
function draw() {
  background(102, 0, 207);

  drawSquare1();
  drawSquare2();
  drawSquare3();
  drawCircle1();
  drawCircle2();
  drawCircle3();

}

function drawSquare1() {
  push();
  fill(255, 0, 0);
  rect(50, 50, 100, 100);
  pop();
}

function drawSquare2() {
  push();
  fill(0, 255, 0);
  rect(200, 50, 100, 100);
  pop();
}

function drawSquare3() {
  push();
  fill(0, 0, 255);
  rect(350, 50, 100, 100);
  pop();
}

function drawCircle1() {
  push();
  fill(255, 255, 0);
  ellipse(100, 300, 100, 100);
  pop();
}

function drawCircle2() {
  push();
  fill(255, 0, 255);
  ellipse(300, 300, 100, 100);
  pop();
}

function drawCircle3() {
  push();
  fill(0, 255, 255);
  ellipse(500, 300, 100, 100);
  pop();
}