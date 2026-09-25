/**
 * prototype 3
 * antonyhatem
 *
 * This is the third out of my prototypes for the Instructions assignment. 
 * This third one is a more weird one compared to the rest.
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
  background(0, 0, 0);


  drawLine();
  drawLine2();
  drawLine3();
  drawLine4();
  drawLine5();
  drawWeirdShape();
  drawWeirdShape2();
  drawWeirdShape3();
  drawWeirdShape4();
  drawWeirdShape5();

noStroke();


}

function drawLine() {
  stroke(255, 0, 0);
  line(0, 0, width, height);
}
function drawLine2() {
  stroke(255, 0, 0);
  line(0, height, width, 0);
}

function drawLine3() {
  stroke(255, 0, 0);
  strokeWeight(10);
  line(width / 2, 0, width / 2, height);
}

function drawLine4() {
  stroke(255, 0, 0);
  line(0, height / 2, width, height / 2);
}
function drawLine5() {
  stroke(255);
  line(0, height, width, height);
}

function drawWeirdShape() {
  push();
  fill(255, 0, 0);
  triangle(300, 300, 200, 900, 300, 800);
  pop();
}

function drawWeirdShape2() {
  push();
  fill(0, 255, 0);
  triangle(600, 50000, 550, 50, 600, 100);
  pop();
}

function drawWeirdShape3() {
  push();
  fill(0, 0, 255);
  triangle(700, 900, 200, 250, 300, 300);
  pop();
}

function drawWeirdShape4() {
  push();
  fill(255, 255, 0);
  triangle(400, 300, 100, 250, 600, 300);
  endShape(CLOSE);
  pop();
}

function drawWeirdShape4() {
  push();
  fill(255, 255, 0);
  triangle(10, -890, 100, 20, 300, 900);
  pop();
}

function drawWeirdShape5() {
  push();
  fill(255, 0, 255);
  triangle(800, 900, 200, 450, 1000, 500);
  pop();
}

function drawWeirdShape5() {
  push();
  fill(255, 0, 255);
  triangle(7000, 500, 200, 450, 300, 500);
  pop();
}
