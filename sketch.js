let clickbait = ["8 Harry Potter Mistakes You Won't Believe You Missed ", "Can 6 Married People Find The Liar?", "Do All Vegans Think The Same?", "How This Guy Made the World's Hottest Peppers", "The right way to kill a fish", "The bizarre physics of fire ants", "Why Megalodon (Definitely) Went Extinct", "8 Strange New Deep Sea Creatures", "How Croissants Are Made", "How To Count Past Infinity", " Watch Me Make A Giant 20-Pound Grilled Cheese", "Dove Cameron Tries 9 Things She's Never Done Before", "Kids Try 100 Years of the Most Expensive Foods", "100 People Tell Us If They Have Tattoos", "This Man Protects the World's Rarest Colors"];
let randomIndex;
let checkbox;
let button;
let sColor = 200;
let sWait = 1;
let rot = 1;
function setup() {
  randomIndex = int(random(clickbait.length));
  createCanvas(windowWidth, windowHeight);

  for (i = 0; i < 15; i++) {
    button = createButton(clickbait[i]);
    button.mousePressed(buttonPressed);
    button.position(random(windowWidth), random(windowHeight))
    button.style('font-size', '20px');
  }


}

function buttonPressed() {
  console.log('Pressed!');
  sColor = sColor -30;


  //rot = rot + 1;
}

function draw() {
  translate(windowWidth / 2, windowHeight / 2);
  stroke(sColor);
  strokeWeight(sWait);
  for (l = 0; l < 45; l++) {
    line(0, 0, windowWidth + l, windowHeight + l);
    rotate(rot);
  }

  if (buttonPressed) {
    rot = rot + 1;
  }
}
