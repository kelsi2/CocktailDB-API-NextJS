import Image from 'next/image'
import { modalContentProps } from '@/interfaces/interfaces';
import getIngredientsAndMeasures from "@/utils/getIngredientsAndMeasures";

const ModalContent = ({ openDrink }: modalContentProps) => {
  const { ingredients, measures } = getIngredientsAndMeasures(openDrink!);

  return (
    <div className="modal-content-container">
      <Image
        src={`${openDrink!.strDrinkThumb}/preview`}
        alt="Image of the cocktail"
        width="300"
        height="300"
        className="rounded-[2.5rem]"
      />
      <div className="modal-text-container">
        <h2 className="modal-h2-ingredients">Ingredients:</h2>
        {ingredients.map((ingredient, i) => {
          return (
            <div key={i} className="mb-2">
              {measures[i]} {ingredient}
            </div>
          );
        })}

        <h2 className="modal-h2-instructions">Instructions:</h2>
        <p className="modal-p">{openDrink!.strInstructions}</p>
      </div>
    </div>
  );
}

export default ModalContent