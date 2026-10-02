/**
 * VARIABLES ASSIGNMENT prototype 3 of 3
 * antonyhatem
 *
 * this third prototype is a planet with moving asteroids orbiting around it.
 *  * project made for CART 253 taught by Pippin Barr.
 */ 
 
// variables defining the main planet on the x y axis + size
let planetX = 300;
let planetY = 300;
let planetSize = 200;

// making variables for first asteroid
let asteroidSmallerAngle = 0;
let asteroidSmallerDistance = 170;
// making variables for bigger second asteroid

function setup(){

    createCanvas(600, 600);
}

function draw(){
//empty space background
    background(15, 30, 35);
 
// main planet itself
fill(200, 100, 190);
ellipse(planetX, planetY, planetSize);

push()
// first small asteroid (smaller) with rotation 

translate(planetX, planetY)
rotate(asteroidSmallerAngle);

fill(205, 0, 127);
ellipse(asteroidSmallerDistance, 0, 30, 20);

pop();

asteroidSmallerAngle = asteroidSmallerAngle + 0.003;

}