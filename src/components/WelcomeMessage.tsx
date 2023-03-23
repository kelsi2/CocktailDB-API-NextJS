const WelcomeMessage = () => {
  return (
    <div className="text-container">
      <h1 className="welcome-message-header">Welcome to the CocktailDB API!</h1>
      <p className="welcome-message-paragraph">
        Here you can find a list of cocktails pulled from the CocktailDB API
        along with recipes, click on the images to open the recipe. Enjoy!
      </p>
    </div>
  );
}

export default WelcomeMessage