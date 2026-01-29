'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface Record {
  id: number;
  gameName: string;
  playerName: string;
  score: string;
  date: string;
}

export default function RecordsPage() {
  const [records, setRecords] = useState<Record[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:4000/records')
      .then(res => setRecords(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-10 text-center text-white">Cargando récords...</div>;

  return (
    <div className="min-h-screen bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-10 text-center text-purple-500">Tabla de Récords</h1>

        <div className="overflow-x-auto bg-gray-800 rounded-xl shadow-lg border border-gray-700">
          <table className="min-w-full text-left">
            <thead className="bg-purple-900 text-purple-100 uppercase text-sm font-bold">
              <tr>
                <th className="px-6 py-4">Juego</th>
                <th className="px-6 py-4">Individual o Grupal</th>
                <th className="px-6 py-4">Mapa y Puntaje</th>
                <th className="px-6 py-4">Fecha</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {records.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-gray-400">
                    No hay récords registrados aún.
                  </td>
                </tr>
              ) : (
                records.map((record) => (
                  <tr key={record.id} className="hover:bg-gray-700 transition">
                    <td className="px-6 py-4 font-medium text-white">{record.gameName}</td>
                    <td className="px-6 py-4 text-gray-300">{record.playerName}</td>
                    <td className="px-6 py-4 text-white font-bold">{record.score}</td>
                    <td className="px-6 py-4 text-gray-400 text-sm">
                      {format(new Date(record.date), 'dd/MM/yyyy')}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
