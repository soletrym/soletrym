import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [text, setText] = useState('');
  const [link, setLink] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();

  function generateId(length = 6) {
    return Math.random().toString(36).substr(2, length);
  }

  const handleSave = () => {
    const id = generateId();
    localStorage.setItem(id, text);
    setLink(`${window.location.origin}/${id}`);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-b from-gray-100 to-gray-200'} min-h-screen flex flex-col items-center justify-center p-6`}>
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
      >
        {darkMode ? '☀️ Lys modus' : '🌙 Mørk modus'}
      </button>
      <h1 className="text-4xl font-extrabold mb-6">🚀 Soletrym 🚀</h1>
      <textarea
        className="w-full max-w-xl h-64 p-4 border-2 rounded-xl shadow-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Skriv inn teksten her..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleSave}
        className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition duration-200"
      >
        💾 Lagre
      </button>
      {link && (
        <div className="mt-6 text-center">
          <p className="text-lg font-medium">Linken din:</p>
          <a href={link} className="text-blue-400 underline break-all">{link}</a>
        </div>
      )}
    </div>
  );
}
