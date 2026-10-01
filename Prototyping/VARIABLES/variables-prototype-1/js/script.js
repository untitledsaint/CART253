/**
 * VARIABLES ASSIGNMENT prototype 1 of 3
 * antonyhatem
 *
 * This is the prequel to the bird making mr.furious furious. this time the bird follows mr.enraged
 */

//simple sky and ground

function setup() {
  createCanvas(800, 600);
}
function draw(){
  background(120, 200, 255);

  fill(80, 150, 80);
  rect(0, 500, 800, 100);


//adding a cloud
  fill(255);
  ellipse(150, 130, 80, 50);
  ellipse(200, 130, 100, 60);
  ellipse(250, 130, 80, 50);


  //cloud number 2
  ellipse(550, 220, 70, 40);
  ellipse(600, 220, 100, 60);
  ellipse(650, 220, 70, 40);

  //the one and only bird
  fill(100)
  stroke(10);
  strokeWeight(2);
  ellipse(mouseX, mouseY, 40, 30);
  ellipse(mouseX + 10, mouseY - 5, 50, 30);
  ellipse(mouseX + 10, mouseY + 5, 50, 30);

//last but not least mr. enraged
  fill(230, 50, 50);
  rect(385, 400, 30, 60);
  rect(385, 460, 10, 60);
  rect(405, 460, 10, 60);
  ellipse(400, 400, 50, 50);
}
