'use client';
import { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await axios.post('http://localhost:4000/contact', formData);
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section className="py-16 bg-gray-900" id="contacto">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Contáctanos</h2>
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-8 rounded-xl shadow-md border border-gray-700">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Nombre</label>
            <input
              type="text"
              required
              className="w-full p-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-700 text-white"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Teléfono</label>
            <input
              type="tel"
              className="w-full p-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-700 text-white"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full p-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-700 text-white"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Mensaje</label>
            <textarea
              required
              rows={4}
              className="w-full p-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-700 text-white"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 font-semibold"
          >
            {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
          </button>
          {status === 'success' && (
            <p className="text-green-600 text-center font-medium">¡Mensaje enviado con éxito!</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-center font-medium">Hubo un error al enviar el mensaje.</p>
          )}
        </form>
      </div>
    </section>
  );
}
