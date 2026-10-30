/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let circleX = 500;
let circleY = 500;

let originalX = 500;
let originalY = 500;

let circleSpeed = 0.04;


function setup() {
  createCanvas(1000, 1000);
}


function draw() {
  background(15);

  let distance = dist(mouseX, mouseY, circleX, circleY);

  // attracts the circle when the cursor is close
  if (distance < 200) {
    circleX = lerp(circleX, mouseX, circleSpeed);
    circleY = lerp(circleY, mouseY, circleSpeed);
  } else {

    circleX = lerp(circleX, originalX, circleSpeed);
    circleY = lerp(circleY, originalY, circleSpeed);
  }

  fill(255);
  noStroke();
  ellipse(circleX, circleY, 15);
} 
