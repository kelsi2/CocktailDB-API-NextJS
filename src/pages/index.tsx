import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ allCocktailsData }) {
  console.log(allCocktailsData.drinks.map((drink) => drink.strDrinkThumb));
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
        <div className="regular-width-container h-screen">
          {allCocktailsData.drinks.map((drink) => {
            return (
              <div key={drink.idDrink}>
                <Image
                  src={drink.strDrinkThumb}
                  alt="Drink thumbnail"
                  width="100"
                  height="100"
                />
              </div>
            );
          })}
        </div>
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
