import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
          <h1>HELLO</h1>
        </div>
      </main>
    </>
  );
}
