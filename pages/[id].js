
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ViewPage() {
  const router = useRouter();
  const { id } = router.query;
  const [text, setText] = useState('');

  useEffect(() => {
    if (id) {
      const savedText = localStorage.getItem(id);
      if (savedText) {
        setText(savedText);
      } else {
        setText('Fant ingen tekst for denne lenken.');
      }
    }
  }, [id]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">SoleTrym</h1>
      <div className="w-full max-w-xl p-4 border rounded bg-white whitespace-pre-wrap">
        {text}
      </div>
    </div>
  );
}
