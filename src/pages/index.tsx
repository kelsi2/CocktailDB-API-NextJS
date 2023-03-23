import Head from "next/head";
import { useState } from "react";
import WelcomeMessage from "@/components/WelcomeMessage";
import DrinksGrid from "@/components/DrinksGrid";
import Modal from "@/components/Modal/Modal";
import ModalContent from "@/components/Modal/ModalContent";
import usePreventScroll from "@/hooks/usePreventScroll";
import { indexProps, drinkInterface } from "@/interfaces/interfaces";

export default function Home({ allCocktailsData }: indexProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [openDrink, setOpenDrink] = useState<drinkInterface>();

  const onModalOpen = (drink: drinkInterface) => {
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
          <WelcomeMessage />
          <DrinksGrid
            onModalOpen={onModalOpen}
            allCocktailsData={allCocktailsData}
          />
        </div>

        {/* modal is hidden by default */}
        {modalOpen && (
          <div className="regular-width-container">
            <Modal openModal={modalOpen} setOpenModal={setModalOpen}>
              <ModalContent openDrink={openDrink!} />
            </Modal>
          </div>
        )}
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  // fetch 25 entries from the cocktail DB
  const resAllCocktails = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=&limit=25"
  );

  const allCocktailsData = await resAllCocktails.json();

  return {
    props: {
      allCocktailsData,
    },
  };
};
