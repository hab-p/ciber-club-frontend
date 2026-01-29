'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
}

export default function CronogramaPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:4000/events')
      .then(res => setEvents(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const now = new Date();
  const futureEvents = events.filter(e => new Date(e.date) >= now);
  const pastEvents = events.filter(e => new Date(e.date) < now);

  if (loading) return <div className="p-10 text-center text-white">Cargando eventos...</div>;

  return (
    <div className="min-h-screen bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-10 text-center text-blue-500">Cronograma de Eventos</h1>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-2">Próximos Eventos</h2>
          {futureEvents.length === 0 ? (
            <p className="text-gray-400 italic">No hay eventos próximos programados.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {futureEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-2">Eventos Pasados</h2>
          {pastEvents.length === 0 ? (
            <p className="text-gray-400 italic">No hay eventos pasados registrados.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-75">
              {pastEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function EventCard({ event }: { event: Event }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition border border-gray-700 flex flex-col h-full">
      <div className="h-48 bg-gray-700 relative overflow-hidden">
        {event.imageUrl ? (
          <img 
            src={event.imageUrl} 
            alt={event.title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" 
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-semibold bg-gray-800">
             {event.title}
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <p className="text-sm text-blue-400 font-semibold mb-2">
          {format(new Date(event.date), 'PPP', { locale: es })}
        </p>
        <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
        <p className="text-gray-300 text-sm flex-grow">{event.description}</p>
      </div>
    </div>
  );
}
