# The CocktailDB API

This project pulls cocktail data from the CocktailDB API and displays it in a web page. The page shows the first 25 cocktails for performance reasons, given more time to work on the project I would like to implement pagination. When the user clicks on an image, a modal opens to display the ingredients and instructions for making the cocktail.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tech Stack](#tech-stack)

### Installation

Clone this repository: git clone https://github.com/kelsi2/CocktailDB-API-NextJS.git
Navigate to the project directory: cd [YOUR PROJECT DIRECTORY]/CocktailDB-API-NextJS
Install the dependencies: npm install

### Usage

To start the project, run npm run dev. This will start the development server and open the application in your browser at http://localhost:3000.

On the home page, you will see a grid of the first 25 cocktails from the CocktailDB API. Clicking on an image will open a modal displaying the ingredients and instructions for making the cocktail.

### Tech Stack

This project was built with the following technologies:

- TypeScript
- Next.js
- Tailwind CSS
- CocktailDB API