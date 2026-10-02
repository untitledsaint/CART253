/**
 * VARIABLES ASSIGNMENT prototype 2 of 3
 * antonyhatem
 *
 * This second prototype is a clock with a moving dial
 */
  let hourHand = 0;
    let minutesHand = 0;

function setup() {
  createCanvas(600, 800);
}

function draw() {
  background(102, 51, 0);


// front of the clock that will show the dials
    fill(255, 255, 200);
    stroke(0);
    strokeWeight(2);
    ellipse(300, 300, 400, 400);


// displaying clock numbers (12 3 6 9)
textSize(50);
fill(0);
noStroke();

text("12", 270, 150);
text("3", 470, 310);
text("6", 290, 480);
text("9", 110, 310);

//making the first clock hand. this is hours.
push();
translate(300, 300);
rotate(hourHand);
stroke(1);
strokeWeight(10);
line(0, 0, 0, -100);
pop();

//minutes clock hand.
push();
translate(300, 300);
rotate(minutesHand);

stroke(1);
strokeWeight(5);
line(0, 0, 0, -140);
pop();

// making so that the hands move correspondingly. 
hourHand = hourHand + 0.0005;
minutesHand = minutesHand + 0.01;

}