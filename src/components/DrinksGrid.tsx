import Image from "next/image";
import { drinksGridInterface } from "@/interfaces/interfaces";

const DrinksGrid = ({ onModalOpen, allCocktailsData }: drinksGridInterface) => {
  return (
    <div className="drinks-container">
      {allCocktailsData.drinks.map((drink) => {
        return (
          <div key={drink.idDrink} className="thumbnail-image-container">
            <Image
              src={`${drink.strDrinkThumb}/preview`}
              alt="Image of the cocktail"
              fill
              sizes="(max-width: 17.5rem) 100vw,
              (max-width: 48rem) 50vw,
              33vw"
              className="rounded-[2.5rem]"
              onClick={(e) => {
                onModalOpen(drink);
                // prevent closing the modal when the modal itself is clicked
                e.stopPropagation();
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default DrinksGrid;
