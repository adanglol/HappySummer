
console.log("Hello World!");


function setup() {
  createCanvas(windowWidth,windowHeight);
//   background('rgba(102, 204, 255, 255)');
    // background(51, 153, 255, 255); // Slightly Darker Blue Sunset Sky Color (RGBA)

    // Define Colors for gradient background for
    let color1 = color(51, 153, 255); // Slightly Darker Blue Sunset Sky Color (RGBA)
    let color2 = color(255, 230, 128); // White Color (RGBA)
    setGradient(0, 0, width, height, color1, color2);

}

function draw() {
  // background(200);
//   fill(255, 0, 0);
//   ellipse(mouseX, mouseY, 50, 50);
    // noFill();
    // stroke(255, 102, 0);
    // line(85, 20, 10, 10);
    // line(90, 90, 15, 80);
    // stroke(0, 0, 0);
    // bezier(85, 20, 10, 10, 90, 90, 15, 80);



    // noFill();
    // stroke(0);
    // let curveWidth = width * 0.5; // 50% of screen width
    // let curveHeight = height * 0.5; // 50% of screen height
    // let controlPoint1X = width * 0.1; // Adjust as needed
    // let controlPoint1Y = height * 0.1; // Adjust as needed
    // let controlPoint2X = width * 0.9; // Adjust as needed
    // let controlPoint2Y = height * 0.9; // Adjust as needed
    // bezier(width * .9, 20, controlPoint1X, controlPoint1Y, controlPoint2X, controlPoint2Y, curveWidth, curveHeight);

    // x y w h 
    noStroke();
    fill(255, 200, 0,10);
    ellipse(width * .2, height * .2, width * .1, height * .15); // Left eye
}


// taking input
function keyPressed() {

}

// Function to create gradient background
function setGradient(x, y, w, h, color1, color2) {
    noFill();
    // Loop through each vertical pixel and draw a rectangle with interpolated color
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(color1, color2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  }