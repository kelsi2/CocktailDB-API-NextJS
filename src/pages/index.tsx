import Modal from "@/components/Modal/Modal";
import getIngredientsAndMeasures from "@/utils/getIngredientsAndMeasures";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import usePreventScroll from "@/hooks/usePreventScroll";

interface indexProps {
  allCocktailsData: {
    drinks: [
      {
        idDrink: string;
        strDrinkThumb: string;
        strInstructions: string;
      }
    ];
  };
}

interface drink {
  strDrinkThumb: string;
  strInstructions: string;
}

export default function Home({ allCocktailsData }: indexProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [openDrink, setOpenDrink] = useState<drink>();

  const { ingredients, measures } = getIngredientsAndMeasures(openDrink!);

  const onModalOpen = (drink: drink) => {
    setModalOpen(!modalOpen);
    setOpenDrink(drink);
  };

  // prevent background scroll when open modal
  usePreventScroll(modalOpen);

  return (
    <>
      <Head>
        <title>CocktailDB API | NextJS</title>
        <meta
          name="description"
          content="A single page display of entries from CocktailDB API using NextJS and TailwindCSS.app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="regular-width-container">
          <div className="text-container">
            <h1 className="welcome-message-header">
              Welcome to the CocktailDB API!
            </h1>
            <p className="welcome-message-paragraph">
              🍹 Here you can find a list of cocktails pulled from the
              CocktailDB API along with recipes, click on the images to open the
              recipe. Enjoy! 🍹
            </p>
          </div>
          <div className="drinks-container">
            {allCocktailsData.drinks.map((drink) => {
              return (
                <div key={drink.idDrink} className="thumbnail-image-container">
                  <Image
                    src={`${drink.strDrinkThumb}/preview`}
                    alt="Drink thumbnail"
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
        </div>
        {/* modal is hidden by default */}
        {modalOpen && (
          <div className="regular-width-container">
            <Modal openModal={modalOpen} setOpenModal={setModalOpen}>
              <div className="modal-content-container">
                <Image
                  src={openDrink!.strDrinkThumb}
                  alt="Image of the cocktail"
                  width="400"
                  height="400"
                  className="rounded-[2.5rem]"
                />
                <div className="modal-text-container">
                  <h2 className="mb-4 text-xl sm:mt-4 md:mt-0">Ingredients:</h2>
                  {ingredients.map((ingredient, i) => {
                    return (
                      <div key={i} className="mb-2">
                        {measures[i]} {ingredient}
                      </div>
                    );
                  })}

                  <h2 className="my-4 text-xl">Instructions:</h2>
                  <p className="sm:mb-4 md:mb-0">
                    {openDrink!.strInstructions}
                  </p>
                </div>
              </div>
            </Modal>
          </div>
        )}
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const resAllCocktails = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
  );

  const allCocktailsData = await resAllCocktails.json();

  return {
    props: {
      allCocktailsData,
    },
  };
};
