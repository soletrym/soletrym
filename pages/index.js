
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [text, setText] = useState('');
  const [link, setLink] = useState('');
  const router = useRouter();

  function generateId(length = 6) {
    return Math.random().toString(36).substr(2, length);
  }

  const handleSave = () => {
    const id = generateId();
    localStorage.setItem(id, text);
    setLink(`${window.location.origin}/${id}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">SoleTrym</h1>
      <textarea
        className="w-full max-w-xl h-64 p-2 border rounded"
        placeholder="Skriv inn teksten her..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleSave}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Lagre
      </button>
      {link && (
        <div className="mt-4">
          <p>Linken din:</p>
          <a href={link} className="text-blue-600 underline">{link}</a>
        </div>
      )}
    </div>
  );
}
