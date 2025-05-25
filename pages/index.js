import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location = `mailto:trymsolevaag@gmail.com?subject=Melding fra ${formData.name}&body=${formData.message}%0A%0AFra: ${formData.email}`;
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-b from-green-100 to-blue-100 text-gray-800'} min-h-screen flex flex-col items-center p-4 sm:p-6 font-[Comic Sans MS] relative`}>
      <Head>
        <title>SoleTrym – Komiker og innholdsskaper</title>
        <meta name="description" content="Hei! Jeg heter Trym Solevåg. Jeg er komiker, innholdsskaper, snart pappa og Liverpool-fan. Følg meg på Snapchat og TikTok for humor, gaming og hverdagsmoro!" />
        <meta property="og:image" content="/trym12.jpg" />
        <meta property="og:url" content="https://soletrym.no" />
      </Head>

      {/* Mørk modus-knapp */}
      <button onClick={toggleDarkMode} className="absolute top-4 right-4 text-2xl">
        {darkMode ? '☀️' : '🌙'}
      </button>

      {/* Hjelp til middag-knapp */}
      <button
        onClick={() => document.getElementById('middagseksjon')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded shadow hover:bg-green-700 text-sm sm:text-base"
      >
        🍽️ Hjelp til middag
      </button>

      <img src="/trym12.jpg" alt="Trym Solevåg" className="mb-4 w-48 h-48 rounded-full shadow-lg object-cover" />
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-center">SoleTrym</h1>
      <p className="max-w-xl text-center mb-6 text-base sm:text-lg px-2">
        Jeg heter Trym Solevåg og er komiker på deltid. Jeg elsker morsomme ting og ønsker å skape en plattform hvor vi kan ha det gøy og le sammen. Jeg har en herlig hund som heter Fam og skal bli pappa for første gang i august! Jeg elsker naturen, fotball og Liverpool, og jeg gamer en del – men jeg er spent på om det blir mindre tid til gaming når jeg blir pappa. Følg meg på Snapchat og TikTok for mer moro og innhold!
      </p>

      {/* Snapchat */}
      <h2 className="text-xl sm:text-2xl font-bold mb-2">Her kan du følge meg på Snapchat</h2>
      <a href="https://www.snapchat.com/add/soletrym" target="_blank" rel="noopener noreferrer">
        <img src="/snapkode.jpg" alt="Snapchat kode" className="mb-2 w-40 sm:w-48 h-40 sm:h-48 rounded shadow-lg" />
      </a>
      <p className="mb-6 underline text-blue-400">
        <a href="https://www.snapchat.com/add/soletrym" target="_blank" rel="noopener noreferrer">Legg meg til på Snapchat</a>
      </p>

      {/* TikTok */}
      <h2 className="text-xl sm:text-2xl font-bold mb-2">Her kan du følge meg på TikTok</h2>
      <a href="https://www.tiktok.com/@soletrym" target="_blank" rel="noopener noreferrer">
        <img src="/tiktokkode.jpg" alt="TikTok kode" className="mb-2 w-40 sm:w-48 h-40 sm:h-48 rounded shadow-lg" />
      </a>
      <p className="mb-6 underline text-blue-400">
        <a href="https://www.tiktok.com/@soletrym" target="_blank" rel="noopener noreferrer">Følg meg på TikTok</a>
      </p>

      {/* Kontaktskjema */}
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white text-black p-4 rounded-xl shadow-lg mt-6">
        <h3 className="text-xl font-bold mb-4 text-center">Send meg en melding</h3>
        <input type="text" name="name" placeholder="Navn" value={formData.name} onChange={handleChange} className="w-full mb-2 p-2 rounded border" required />
        <input type="email" name="email" placeholder="E-post" value={formData.email} onChange={handleChange} className="w-full mb-2 p-2 rounded border" required />
        <textarea name="message" placeholder="Melding" value={formData.message} onChange={handleChange} className="w-full mb-2 p-2 rounded border" required />
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">Send melding</button>
      </form>

      {/* AI-produktseksjon */}
      <div id="middagseksjon" className="w-full max-w-2xl mt-12 bg-white text-black p-6 rounded-xl shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">🍽️ AI-hjelper for middagstips</h2>
        <p className="mb-4 text-center">
          Usikker på hva du skal ha til middag? Med denne AI-assistenten får du forslag basert på smak, tid, eller hva du har i kjøleskapet!
        </p>
        <ul className="list-disc px-6 mb-4">
          <li>Få forslag til middager på sekunder</li>
          <li>Full oppskrift med ingredienser og fremgangsmåte</li>
          <li>Tilpasset dine preferanser – raskt, sunt, barnevennlig osv.</li>
        </ul>
        <div className="flex justify-center gap-4">
          <a
            href="/AI-hjelper_PROMPTER_KOMPLETT.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            📄 Last ned PDF
          </a>
          <a
            href="https://massive-nautilus-cc9.notion.site/AI-hjelper-for-hverdagens-sm-problemer-1fed2053c48380b097f8cb3f18825990"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            🔗 Bruk i Notion
          </a>
        </div>
      </div>
    </div>
  );
}
