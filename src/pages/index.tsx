import Head from "next/head";
import Image from "next/image";

interface indexProps {
  allCocktailsData: {
    drinks: [
      {
        idDrink: string;
        strDrinkThumb: string;
      }
    ];
  };
}

export default function Home({ allCocktailsData }: indexProps) {
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
              🍹 Here you can find a list of cocktails pulled along with
              recipes, click on the images to open the recipe. Enjoy! 🍹
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
                  />
                </div>
              );
            })}
          </div>
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
