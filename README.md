# The CocktailDB API

This project pulls cocktail data from the CocktailDB API and displays it in a web page. The page shows the first 25 cocktails for performance reasons, given more time to work on the project I would like to implement pagination. When the user clicks on an image, a modal opens to display the ingredients and instructions for making the cocktail.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
  - [Responsiveness](#responsiveness)
  - [Performance](#performance)
  - [Accessibility](#accessibility)
  - [Interactivity](#interactivity)
  - [Visual Layout and Design](#visual-layout-and-design)
- [Installation](#installation)
- [Usage](#usage)

### Tech Stack

This project was built with the following technologies:

- TypeScript
- Next.js
- Tailwind CSS
- CocktailDB API

### Features

#### Responsiveness

The application is fully responsive using Tailwind CSS. I have added three breakpoints for mobile (17.5rem), tablet (48rem), and desktop (66rem). I chose to work with rems instead of pixels because of the responsive benefits of using rems.

#### Performance

As mentioned above, for performance reasons I only rendered 25 cocktails instead of all cocktails from the database. Performance can be improved by adding pagination so that all cocktails be displayed, with 25 cocktails per page. I also used the small version of the cocktail image (100 x 100 thumbnail size) to improve performance. Finally, I used Next.js `getServerSideProps` to fetch data using server side rendering instead of client side rendering. This will also improve performance because the fetch can be done before the user interacts with the page, the page is already rendered when it is loaded.

#### Accessibility

All images have been given alt tags, unfortunately many of the alternative text fields coming from the API are null so I have used a generic alt text of "Image of the cocktail". Headings have also been used properly, there is one H1 on the page, and one H2 in the modal.

#### Interactivity

The interactive element I chose to build is a modal. The images on the main page will scale up slightly and have a drop shadow when hovered, the cursor will also become a pointer to show that the user can click on it to open a modal. 

Features I would like to add in future given more time to work on this website include pagination, search for cocktail by name, and a button to search for a random cocktail.

#### Visual Layout and Design

I went with a fairly simple minimalistic design for this website. The cocktails are laid out in a three column grid, which shrinks to two columns on tablet, and one column on mobile. The modal is scrollable on mobile but all content is displayed on tablet and desktop.

### Installation

- Clone this repository: git clone https://github.com/kelsi2/CocktailDB-API-NextJS.git
- Navigate to the project directory: cd [YOUR PROJECT DIRECTORY]/CocktailDB-API-NextJS
- Install the dependencies: npm install

### Usage

To start the project, run npm run dev. This will start the development server and open the application in your browser at http://localhost:3000.

On the home page, you will see a grid of the first 25 cocktails from the CocktailDB API. Clicking on an image will open a modal displaying the ingredients and instructions for making the cocktail.