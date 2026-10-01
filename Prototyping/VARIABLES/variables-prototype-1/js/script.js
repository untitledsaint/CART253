/**
 * VARIABLES ASSIGNMENT prototype 1 of 3
 * antonyhatem
 *
 * This will maybe be a bird flying...
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

}