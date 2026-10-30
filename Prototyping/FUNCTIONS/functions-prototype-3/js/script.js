/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
//stores circles
let circles = [];
let circleAmount = 300;

function setup() {
  createCanvas(1000, 1000);

  //should make circles in random spots everywhere in accordance with circleAmount
  for (let i = 0; i < circleAmount; i++) {
    circles.push(createCircle());
  }
  circle = createCircle();
}

function draw() {
  background(200);

  for (let circle of circles) {
  updateCircle(circle);
  drawCircle(circle);
    }
}


// updates circle position
function updateCircle(circle) {
  let distance = dist(mouseX, mouseY, circle.x, circle.y);

  if (distance < 180) {
    circle.x = lerp(circle.x, mouseX, circle.speed);
    circle.y = lerp(circle.y, mouseY, circle.speed);
  } else {
    circle.x = lerp(circle.x, circle.originalX, circle.speed);
    circle.y = lerp(circle.y, circle.originalY, circle.speed);
  }
}


// draws circle
function drawCircle(circle) {
  fill(0);
  noStroke();
  ellipse(circle.x, circle.y, circle.size);
}
//makes circle object function
function createCircle() {
    let x = random(20, 980);
    let y = random(20, 980);

    return {
        x: x,
        y: y,
        originalX: x,
        originalY: y,
        size: random(5, 12),
        speed: 0.04

    };
}