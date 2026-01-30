'use client';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Reemplaza estos valores con tus propios IDs de EmailJS
    // Service ID, Template ID, Public Key
    const SERVICE_ID = 'service_6a22nai';
    const TEMPLATE_ID = 'template_8faoa8r';
    const PUBLIC_KEY = 'WacJ1P8h2wmKBE7nx';

    if (form.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
          console.log(result.text);
          setStatus('success');
          // Opcional: limpiar el formulario
          if (form.current) form.current.reset();
        }, (error) => {
          console.error(error.text);
          setStatus('error');
        });
    }
  };

  return (
    <section className="py-16 bg-gray-900" id="contacto">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Contáctanos</h2>
        <form ref={form} onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-8 rounded-xl shadow-md border border-gray-700">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Nombre</label>
            <input
              type="text"
              name="user_name" // Name attribute for EmailJS template variable
              required
              className="w-full p-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Teléfono</label>
            <input
              type="tel"
              name="user_phone" // Name attribute for EmailJS
              className="w-full p-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="user_email" // Name attribute for EmailJS
              required
              className="w-full p-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Mensaje</label>
            <textarea
              name="message" // Name attribute for EmailJS
              required
              rows={4}
              className="w-full p-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-700 text-white"
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
