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

const MOCK_EVENTS: Event[] = [
  { 
    id: 1, 
    title: "Torneo Mensual CSGO", 
    description: "Competencia 5v5 con premios en efectivo. Inscripción gratuita para miembros.", 
    date: new Date(new Date().setDate(new Date().getDate() + 5)).toISOString() 
  },
  { 
    id: 2, 
    title: "Noche Retro: Quake III", 
    description: "Revive los clásicos en nuestra noche de arena shooter. Pizza y bebidas incluidas.", 
    date: new Date(new Date().setDate(new Date().getDate() + 12)).toISOString() 
  },
  { 
    id: 3, 
    title: "Maratón Left 4 Dead 2", 
    description: "Supervivencia cooperativa. ¿Podrá tu equipo llegar al final de la campaña?", 
    date: new Date(new Date().setDate(new Date().getDate() + 20)).toISOString() 
  },
  { 
    id: 4, 
    title: "Workshop de Estrategia", 
    description: "Clase maestra con jugadores profesionales sobre tácticas en mapas competitivos.", 
    date: new Date(new Date().setDate(new Date().getDate() + 25)).toISOString() 
  },
  { 
    id: 5, 
    title: "Copa Amateur COD 2", 
    description: "Torneo abierto para equipos nuevos. Formato eliminación directa en Toujane.", 
    date: new Date(new Date().setDate(new Date().getDate() + 30)).toISOString() 
  },
  { 
    id: 6, 
    title: "LAN Party de Fin de Mes", 
    description: "24 horas de gaming ininterrumpido. Trae tu PC o usa las nuestras.", 
    date: new Date(new Date().setDate(new Date().getDate() + 35)).toISOString() 
  },
  { 
    id: 7, 
    title: "Clínica de Hardware", 
    description: "Aprende a montar y mantener tu PC gamer con expertos de la industria.", 
    date: new Date(new Date().setDate(new Date().getDate() + 40)).toISOString() 
  },
  { 
    id: 8, 
    title: "Desafío Streamer vs Subs", 
    description: "Juega contra tus creadores de contenido favoritos en partidas amistosas.", 
    date: new Date(new Date().setDate(new Date().getDate() + 45)).toISOString() 
  },
  { 
    id: 9, 
    title: "Torneo 1v1 CS 1.6", 
    description: "Demuestra tu habilidad individual en mapas aim_. Premio: Periféricos Gaming.", 
    date: new Date(new Date().setDate(new Date().getDate() + 50)).toISOString() 
  },
  { 
    id: 10, 
    title: "Exhibición Half Life", 
    description: "Speedruns en vivo y partidas deathmatch en Crossfire.", 
    date: new Date(new Date().setDate(new Date().getDate() + 55)).toISOString() 
  }
];

export default function EventsSection() {
  const [events, setEvents] = useState<Event[]>(MOCK_EVENTS);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);
    axios.get('http://localhost:4000/events')
      .then(res => {
        if (res.data && res.data.length > 0) {
          setEvents(res.data);
        }
      })
      .catch(err => {
        console.log('Using mock data for events');
      })
      .finally(() => setLoading(false));
  }, []);

  const now = new Date();
  const futureEvents = events.filter(e => new Date(e.date) >= now);

  return (
    <section id="cronograma" className="py-20 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center text-blue-500">Cronograma de Eventos</h2>
        
        {loading ? (
          <div className="text-center text-gray-400">Cargando eventos...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {futureEvents.length === 0 ? (
              <p className="text-gray-400 italic col-span-full text-center">No hay eventos próximos programados.</p>
            ) : (
              futureEvents.map(event => (
                <div key={event.id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition border border-gray-700">
                  <div className="h-40 bg-gray-700 relative flex items-center justify-center">
                    <span className="text-gray-400 font-bold text-lg px-4 text-center">{event.title}</span>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-blue-400 font-semibold mb-2">
                      {format(new Date(event.date), 'PPP', { locale: es })}
                    </p>
                    <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
                    <p className="text-gray-300 text-sm">{event.description}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
}
