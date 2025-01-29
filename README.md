# workshop 8
 Website link:
https://harn475.github.io/workshop-8/

## Overview

This p5.js sketch fetches a random cocktail recipe from the CocktailDB API and displays it on the canvas. The display includes the cocktail name, a list of ingredients, and the instructions for making the drink. The background color of the canvas changes randomly each time the sketch is loaded.

## Features

- **Random Cocktail Fetching**: The sketch fetches a random cocktail recipe from the CocktailDB API when the page loads.
- **Dynamic Display**: The cocktail name, ingredients, and instructions are displayed on the canvas in an organized manner.
- **Background Color**: The background color changes to a random color each time the sketch is initialized, providing a dynamic visual experience.
- **Text Wrapping**: The instructions are wrapped to fit within the canvas width, preventing text from overflowing off the screen.

## Progress (Problem Solving/Code)

- **Fetching Cocktail Data**: I used the `fetch()` method to retrieve data from the CocktailDB API. The API returns a JSON object with the cocktail's name, ingredients, and instructions.
- **Text Wrapping for Instructions**: To ensure the instructions fit within the canvas, I implemented a `wrapText()` function that breaks the text into multiple lines if it exceeds a predefined width.
- **Displaying Ingredients**: I looped through up to 15 ingredients (if available) and displayed each ingredient in a list format.
- **Dynamic Background**: The background color of the canvas is set randomly each time the sketch is loaded, creating a fresh visual effect on each page load.

## Issues Faced

The main challenge was ensuring the text wrapped correctly for the instructions. p5.js doesn't have built-in support for multi-line text wrapping with the `text()` function, so I had to manually implement a solution to break the text into lines that fit within the canvas width. This involved calculating the width of each line before drawing it to the screen.

## Final Coding Comments

- **Dynamic and Engaging UI**: The random background color adds a fun and dynamic element to the UI. The text wrapping works well, ensuring that the instructions are always fully visible, regardless of their length.
- **Smooth Integration with API**: The sketch integrates seamlessly with the CocktailDB API, pulling random drink data and displaying it with minimal delay.
- **User-Friendly Interface**: The text is easy to read, and the ingredients and instructions are well-organized for the user to follow.

## Future Development

- **Drink Image Display**: In the future, I would like to add an image of the cocktail along with its recipe to make the interface more visually appealing.
- **Error Handling**: Implementing error handling for the API request would ensure that if the API call fails, the user sees an error message instead of a blank screen or incomplete data.
- **Search Functionality**: Adding the ability to search for specific cocktails based on the user's input would increase the functionality of the application.

## Reflection

This project provided a good opportunity to practice working with external APIs and displaying dynamic content in p5.js. I particularly enjoyed implementing the text wrapping function, as it required me to think about how to handle text in a way that adapts to the size of the canvas. 

Certainly! Here's a reference list along with a declaration of your help sources:

---

**Reference List:**

1. p5.js Reference - 2D Primitives. (n.d.). Retrieved from [https://p5js.org/reference/#2D%20Primitives](https://p5js.org/reference/#2D%20Primitives)
   
2. p5.js Discourse Forum. (n.d.). Retrieved from [https://discourse.processing.org/c/p5js/10](https://discourse.processing.org/c/p5js/10)
   
3. Reddit User. (2021, March 9). Is getting stuck in corners a known problem with? Reddit. Retrieved from [https://www.reddit.com/r/gamemaker/comments/mpgw2y/is_getting_stuck_in_corners_a_know_problem_with/](https://www.reddit.com/r/gamemaker/comments/mpgw2y/is_getting_stuck_in_corners_a_know_problem_with/)

---

**Declaration:**

I declare that I received help with my coding from my flatmate, who is experienced with programming. Additionally, I conducted several quick Google searches to resolve issues encountered during the development process. These searches helped in understanding how to implement specific features and troubleshoot problems, especially related to p5.js, as well as getting advice from relevant forums and communities.
