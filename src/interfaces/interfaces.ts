export interface indexProps {
  allCocktailsData: {
    drinks: cocktailsDataInterface[];
  };
}

interface cocktailsDataInterface {
  idDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
}

export interface drinkInterface {
  strDrinkThumb: string;
  strInstructions: string;
}

export interface modalContentProps {
  openDrink: drinkInterface
}

export interface drinksGridInterface {
  onModalOpen: (drink: drinkInterface) => void;
  allCocktailsData: { drinks: cocktailsDataInterface[] };
}