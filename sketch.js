let drink;
let ingredients = [];
let instructions = '';
let drink_api = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
let bgColour;

async function getDrink() {
  let data = await fetch(drink_api);
  let j_data = await data.json();
  drink = j_data.drinks[0].strDrink; // Cocktail name
  instructions = j_data.drinks[0].strInstructions; // Instructions

  // Extract ingredients (up to 15 ingredients)
  for (let i = 1; i <= 15; i++) {
    let ingredient = j_data.drinks[0]['strIngredient' + i];
    if (ingredient) {
      ingredients.push(ingredient);
    }
  }
}

function setup() {
  createCanvas(windowWidth, 600);
  getDrink();
  bgColour = color(random(255), random(255), random(255));
}

function draw() {
  background(bgColour);
  textSize(16);
  let xOffset = 20;
  let yOffset = 60;
  let textWidthLimit = width - 40;  // Prevent text from going off-screen
  
  // Display drink name
  text("Drink: " + (drink || "Fetching..."), xOffset, yOffset);
  yOffset += 30;
  
  // Display ingredients
  text("Ingredients:", xOffset, yOffset);
  yOffset += 30;
  for (let ingredient of ingredients) {
    text("- " + ingredient, xOffset, yOffset);
    yOffset += 20;
  }

  // Display instructions with wrapping
  textSize(14);
  text("Instructions:", xOffset, yOffset + 20);
  yOffset += 40;

  // Wrap text for instructions to fit within the canvas
  let wrappedInstructions = wrapText(instructions, xOffset, yOffset, textWidthLimit);
  for (let line of wrappedInstructions) {
    text(line, xOffset, yOffset);
    yOffset += 20;
  }
}

// Function to wrap text
function wrapText(text, x, y, maxWidth) {
  let words = text.split(' ');
  let lines = [];
  let currentLine = '';
  
  for (let i = 0; i < words.length; i++) {
    let testLine = currentLine + words[i] + ' ';
    let testWidth = textWidth(testLine);
    
    if (testWidth > maxWidth && currentLine.length > 0) {
      lines.push(currentLine);
      currentLine = words[i] + ' ';
    } else {
      currentLine = testLine;
    }
  }
  
  lines.push(currentLine); // Add the last line
  return lines;
}
