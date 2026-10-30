/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let circle = {
  x: 500,
  y: 500,
  originalX: 500,
  originalY: 500,
  size: 15,
  speed: 0.04
};

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(15);

  updateCircle(circle);
  drawCircle(circle);
}


// updates circle position
function updateCircle(circle) {
  let distance = dist(mouseX, mouseY, circle.x, circle.y);

  if (distance < 300) {
    circle.x = lerp(circle.x, mouseX, circle.speed);
    circle.y = lerp(circle.y, mouseY, circle.speed);
  } else {
    circle.x = lerp(circle.x, circle.originalX, circle.speed);
    circle.y = lerp(circle.y, circle.originalY, circle.speed);
  }
}


// draws circle
function drawCircle(circle) {
  fill(255);
  noStroke();
  ellipse(circle.x, circle.y, circle.size);
}