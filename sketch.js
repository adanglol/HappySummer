


let clouds = []; // Array to store cloud objects

function setup() {
    createCanvas(windowWidth, windowHeight);
    let color1 = color(51, 153, 255); // Slightly Darker Blue Sunset Sky Color (RGBA)
    let color2 = color(255, 230, 128); // White Color (RGBA)
    setGradient(0, 0, width, height, color1, color2);

    // Create initial clouds
    for (let i = 0; i < 3; i++) {
        clouds.push(new Cloud(random(width), random(height * 0.3), random(50, 150)));
    }
}

function draw() {
    // Draw gradient background
    let color1 = color(51, 153, 255);
    let color2 = color(255, 230, 128);
    setGradient(0, 0, width, height, color1, color2);

    // Draw and move clouds
    for (let i = clouds.length - 1; i >= 0; i--) {
        clouds[i].display();
        clouds[i].move();

        // Remove clouds when they move out of screen
        if (clouds[i].x > width + 100) {
            clouds.splice(i, 1);
        }
    }

    // Once clouds are gone, draw text
    if (clouds.length === 0) {
    
        fill(0);
        textFont('papyrus');
        textSize(60);
        text("Happy Summer!", width * 0.35, height * 0.5);
    }
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


// Cloud class definition
class Cloud {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = random(1, 3);
    }

    display() {
        fill(255);
        ellipse(this.x, this.y, this.size, this.size * 0.6);
        ellipse(this.x + this.size * 0.4, this.y - this.size * 0.2, this.size * 0.8, this.size * 0.6);
        ellipse(this.x + this.size * 0.8, this.y, this.size, this.size * 0.6);
    }

    move() {
        this.x += this.speed;
    }
}



