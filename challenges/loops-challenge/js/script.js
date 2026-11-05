/**
 * Lines
 * antony anum alissa
 * 
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background("green");
    
//variables of x y axis strokes
    let x = 0;
    let y = 0;
    let stroke1 = 0;


    while(x<=width) {
        stroke(stroke1);
        line(x,y,x,height);
        
        x += 1;
        stroke1 += 0.5;
    }


    while(y<=height) {
        stroke(stroke1);
        line(x,y,0,height);
        
        y += 50;
        stroke1 += 25;
    }

    while(y<=height) {
        stroke(stroke1);
        line(0,y,width,height);

        y += 50;
        stroke1 += 25;
    }

}
