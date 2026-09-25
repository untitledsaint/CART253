/**
 * prototype 2
 * antonyhatem
 *
 * This is the second out of three prototypes for the Instructions assignment. This second one is
 * a more abstract concept prototype.
 */

"use strict";

/**
 * Making the canvas rectangular to make it so that it looks
 * like a TV screen
*/
function setup() {
  createCanvas(700, 600);
  background(250, 0, 127);
  noStroke();
  
}


/**
 * Giving background some color.
*/
function draw() {
  background(0, 0, 0);

  drawSquare1();
  drawSquare2();
  drawSquare3();
  drawSquare4();
  drawSquare5();
  drawSquare6();
  drawSquare7();
  drawRectangle1();
  drawRectangle2();
  drawRectangle3();
  drawRectangle4();
  



}

  
function drawSquare1() {
  push();
  fill(255, 0, 0);
  rect(500, -200, 100, 600);
  pop();
}

function drawSquare2() {
  push();
  fill(255, 255, 255);
  rect(0, -200, 100, 600);
  pop();
}

function drawSquare3() {
  push();
  fill(255, 255, 0);
  rect(100, -200, 100, 600);
  pop();
}

function drawSquare4() {
  push();
  fill(0, 255, 255);
  rect(200, -200, 100, 600);
  pop();
}

function drawSquare5() {
  push();
  fill(0, 255, 0);
  rect(300, -200, 100, 600);
  pop();
}

function drawSquare6() {
  push();
  fill(255, 0, 255);
  rect(400, -200, 100, 600);
  pop();
}
function drawSquare7() {
  push();
  fill(0, 0, 250);
  rect(600, -200, 100, 600);
  pop();
}
function drawRectangle1() {
  push();
  fill(0, 0, 255);
  rect(0, 400, 100, 40);
  pop();
}
function drawRectangle2() {
  push();
  fill(255, 0, 255);
  rect(200, 400, 100, 40);
  pop();
}

function drawRectangle3() {
  push();
  fill(0, 255, 255);
  rect(400, 400, 100, 40);
  pop();
}
function drawRectangle4() {
  push();
  fill(255, 255, 255);
  rect(600, 400, 100, 40);
  pop();
}


