import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-pink-100 text-gray-800'} min-h-screen flex flex-col items-center p-4 sm:p-6 font-[Comic Sans MS]`}>
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 text-2xl"
        title={darkMode ? 'Lys modus' : 'Mørk modus'}
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
      <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 text-center">Velkommen!</h1>
      <p className="max-w-xl text-center mb-6 text-base sm:text-lg px-2">
        Jeg heter Trym Solevåg og er komiker på deltid. Jeg elsker morsomme ting og ønsker å skape en plattform hvor vi kan ha det gøy og le sammen. Jeg har en herlig hund som heter Fam og skal bli pappa for første gang i august! Jeg elsker naturen, fotball og Liverpool, og jeg gamer en del – men jeg er spent på om det blir mindre tid til gaming når jeg blir pappa. Følg meg på Snapchat og TikTok for mer moro og innhold!
      </p>

      <div className="mb-6 w-full max-w-xl">
        <video controls className="w-full rounded shadow-lg">
          <source src="/a6K117m_460svh265.MP4" type="video/mp4" />
          Nettleseren din støtter ikke video-taggen.
        </video>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold mb-2">Her kan du følge meg på Snapchat</h2>
      <a href="https://www.snapchat.com/add/soletrym" target="_blank" rel="noopener noreferrer">
        <img src="/snapkode.jpg" alt="Snapchat kode" className="mb-2 w-40 sm:w-48 h-40 sm:h-48 rounded shadow-lg" />
      </a>
      <p className="mb-6 underline text-blue-400">
        <a href="https://www.snapchat.com/add/soletrym" target="_blank" rel="noopener noreferrer">Legg meg til på Snapchat</a>
      </p>
      <h2 className="text-xl sm:text-2xl font-bold mb-2">Her kan du følge meg på TikTok</h2>
      <a href="https://www.tiktok.com/@soletrym" target="_blank" rel="noopener noreferrer">
        <img src="/tiktokkode.jpg" alt="TikTok kode" className="mb-2 w-40 sm:w-48 h-40 sm:h-48 rounded shadow-lg" />
      </a>
      <p className="mb-6 underline text-blue-400">
        <a href="https://www.tiktok.com/@soletrym" target="_blank" rel="noopener noreferrer">Følg meg på TikTok</a>
      </p>
      <button
        onClick={() => window.location = 'mailto:trymsolevaag@gmail.com'}
        className="mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-green-500 text-white font-semibold rounded-xl shadow-md hover:bg-green-600 text-sm sm:text-base"
      >
        💌 Kontakt meg: trymsolevaag@gmail.com
      </button>
    </div>
  );
}
