import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('Takk for meldingen! Jeg svarer snart.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Noe gikk galt. Prøv igjen senere.');
      }
    } catch (error) {
      setStatus('Noe gikk galt. Prøv igjen senere.');
    }
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-b from-green-100 to-blue-100 text-gray-800'} min-h-screen flex flex-col items-center p-4 sm:p-6 font-[Comic Sans MS]`}>
      <button onClick={toggleDarkMode} className="fixed top-4 right-4 text-2xl" title={darkMode ? 'Lys modus' : 'Mørk modus'}>
        {darkMode ? '☀️' : '🌙'}
      </button>
      <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 text-center">Velkommen!</h1>
      {/* --- Resten av innholdet beholdes som før --- */}
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white text-black p-4 rounded-xl shadow-lg mt-6">
        <h3 className="text-xl font-bold mb-4 text-center">Send meg en melding</h3>
        <input type="text" name="name" placeholder="Navn" value={formData.name} onChange={handleChange} className="w-full mb-2 p-2 rounded border" required />
        <input type="email" name="email" placeholder="E-post" value={formData.email} onChange={handleChange} className="w-full mb-2 p-2 rounded border" required />
        <textarea name="message" placeholder="Melding" value={formData.message} onChange={handleChange} className="w-full mb-2 p-2 rounded border" required />
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">Send melding</button>
        {status && <p className="mt-2 text-center text-sm">{status}</p>}
      </form>
    </div>
  );
}
