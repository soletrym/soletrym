import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-b from-green-100 to-blue-100 text-gray-800'} min-h-screen flex flex-col items-center p-6 font-sans relative`}>
      <Head>
        <title>SoleTrym</title>
        <meta name="description" content="Digitale plakater og AI-verktøy for foreldre og barnehager – av Trym Solevåg." />
        <meta property="og:url" content="https://soletrym.no" />
      </Head>

      {/* Mørk modus-knapp */}
      <button onClick={() => setDarkMode(!darkMode)} className="absolute top-4 right-4 text-2xl">
        {darkMode ? '☀️' : '🌙'}
      </button>

      {/* Velkomst */}
      <h1 className="text-4xl sm:text-5xl font-extrabold mt-10 mb-4 text-center">Velkommen til SoleTrym</h1>

      <p className="max-w-2xl text-center text-base sm:text-lg mb-6">
        På denne siden finner du innhold for deg som har barn – og som setter pris på humor, varme og små pauser i hverdagen.
        <br /><br />
        Jeg lager digitale plakater med pedagogisk innhold, og AI-verktøy som hjelper deg med middag, gaveidéer og hverdagens små utfordringer.
        <br /><br />
        Har du spørsmål eller bare vil si hei? 
        <span className="text-blue-600 underline ml-1">
          <a href="mailto:trymsolevaag@gmail.com">Send meg en e-post</a>
        </span>
        <br /><br />
        Håper du finner noe du liker 🌿
      </p>

      {/* Produkt-knapper */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <a
          href="https://solevaag.gumroad.com/l/eermfs"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-5 py-3 rounded-xl text-lg hover:bg-green-700 shadow"
        >
          🤖 AI-hjelper for hverdagen
        </a>
        <a
          href="https://solevaag.gumroad.com/l/cseok"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-rose-600 text-white px-5 py-3 rounded-xl text-lg hover:bg-rose-700 shadow"
        >
          🌸 Plakat: 5 ting barnet ditt trenger å høre
        </a>
      </div>

      {/* Snapchat-seksjon */}
      <div className="w-full max-w-md text-center bg-white text-black p-4 rounded-xl shadow-lg mb-10">
        <h2 className="text-xl font-bold mb-2">Følg meg på Snapchat</h2>
        <img src="/snapkode.jpg" alt="Snapchat kode" className="mx-auto w-48 h-48 rounded shadow" />
        <p className="mt-2 underline text-blue-600">
          <a href="https://www.snapchat.com/add/soletrym" target="_blank" rel="noopener noreferrer">
            @soletrym
          </a>
        </p>
      </div>

      {/* Kontaktseksjon */}
      <footer className="text-center text-sm text-gray-600 dark:text-gray-300 mt-auto mb-4">
        Har du spørsmål? Kontakt meg på <a href="mailto:trymsolevaag@gmail.com" className="underline text-blue-400">trymsolevaag@gmail.com</a>
      </footer>
    </div>
  );
}
