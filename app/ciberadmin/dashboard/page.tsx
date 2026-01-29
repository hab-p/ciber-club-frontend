'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'events' | 'records' | 'rankings'>('events');
  const [token, setToken] = useState('');

  useEffect(() => {
    const t = localStorage.getItem('token');
    if (!t) {
      router.push('/ciberadmin');
    } else {
      setToken(t);
    }
  }, [router]);

  if (!token) return null;

  return (
    <div className="min-h-screen bg-gray-950 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Panel de Administración</h1>
          <button
            onClick={() => {
              localStorage.removeItem('token');
              router.push('/ciberadmin');
            }}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Cerrar Sesión
          </button>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700">
          <div className="flex border-b border-gray-700">
            <button
              className={`px-6 py-4 font-semibold ${activeTab === 'events' ? 'bg-gray-700 text-blue-400 border-b-2 border-blue-500' : 'text-gray-400 hover:bg-gray-700'}`}
              onClick={() => setActiveTab('events')}
            >
              Gestionar Eventos
            </button>
            <button
              className={`px-6 py-4 font-semibold ${activeTab === 'records' ? 'bg-gray-700 text-purple-400 border-b-2 border-purple-500' : 'text-gray-400 hover:bg-gray-700'}`}
              onClick={() => setActiveTab('records')}
            >
              Gestionar Récords
            </button>
            <button
              className={`px-6 py-4 font-semibold ${activeTab === 'rankings' ? 'bg-gray-700 text-green-400 border-b-2 border-green-500' : 'text-gray-400 hover:bg-gray-700'}`}
              onClick={() => setActiveTab('rankings')}
            >
              Gestionar Ranking
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'events' && <EventsManager token={token} />}
            {activeTab === 'records' && <RecordsManager token={token} />}
            {activeTab === 'rankings' && <RankingManager token={token} />}
          </div>
        </div>
      </div>
    </div>
  );
}

function RankingManager({ token }: { token: string }) {
  const [rankings, setRankings] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState({
    game: '',
    season: '',
    type: 'RANKING', // RANKING | ACHIEVEMENT
    category: 'INDIVIDUAL', // INDIVIDUAL | GRUPAL
    map: '',
    name: '',
    score: '',
    description: '',
    imageUrl: ''
  });
  const [file, setFile] = useState<File | null>(null);

  const fetchRankings = () => {
    axios.get('http://localhost:4000/ranking').then(res => setRankings(res.data));
  };

  useEffect(fetchRankings, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let imageUrl = form.imageUrl;
      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        const res = await axios.post('http://localhost:4000/upload', formData);
        imageUrl = res.data.url;
      }

      const dataToSubmit = { ...form, imageUrl };

      if (editingId) {
        await axios.patch(`http://localhost:4000/ranking/${editingId}`, dataToSubmit, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setEditingId(null);
      } else {
        await axios.post('http://localhost:4000/ranking', dataToSubmit, {
          headers: { Authorization: `Bearer ${token}` }
        });
      }
      fetchRankings();
      setForm({ ...form, name: '', score: '', description: '', imageUrl: '' }); 
      setFile(null);
    } catch (err) {
      alert('Error al guardar ranking');
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('¿Eliminar?')) return;
    try {
      await axios.delete(`http://localhost:4000/ranking/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchRankings();
    } catch (err) {
      alert('Error al eliminar');
    }
  };

  const handleEdit = (ranking: any) => {
    setForm({
      game: ranking.game,
      season: ranking.season || '',
      type: ranking.type,
      category: ranking.category || 'INDIVIDUAL',
      map: ranking.map || '',
      name: ranking.name,
      score: ranking.score || '',
      description: ranking.description || '',
      imageUrl: ranking.imageUrl || ''
    });
    setEditingId(ranking.id);
    setFile(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm({ ...form, name: '', score: '', description: '', imageUrl: '' });
    setFile(null);
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-white">{editingId ? 'Editar Ranking/Logro' : 'Agregar Nuevo Ranking/Logro'}</h3>
      <form onSubmit={handleSubmit} className="mb-8 bg-gray-700 p-6 rounded-lg space-y-4 border border-gray-600">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-300">Juego</label>
            <input 
              className="w-full p-2 rounded bg-gray-600 text-white border border-gray-500" 
              value={form.game} 
              onChange={e => setForm({...form, game: e.target.value})} 
              required
              placeholder="Ej: Counter-Strike"
            />
          </div>
          <div>
            <label className="block text-gray-300">Temporada</label>
            <input 
              className="w-full p-2 rounded bg-gray-600 text-white border border-gray-500" 
              value={form.season} 
              onChange={e => setForm({...form, season: e.target.value})} 
              placeholder="Ej: 2024 - Q1"
            />
          </div>
          <div>
            <label className="block text-gray-300">Tipo</label>
            <select 
              className="w-full p-2 rounded bg-gray-600 text-white border border-gray-500"
              value={form.type}
              onChange={e => setForm({...form, type: e.target.value})}
            >
              <option value="RANKING">Ranking Competitivo</option>
              <option value="ACHIEVEMENT">Logro / Misión</option>
            </select>
          </div>

          {form.type === 'RANKING' ? (
            <>
              <div>
                <label className="block text-gray-300">Categoría</label>
                <select 
                  className="w-full p-2 rounded bg-gray-600 text-white border border-gray-500"
                  value={form.category}
                  onChange={e => setForm({...form, category: e.target.value})}
                >
                  <option value="INDIVIDUAL">Individual</option>
                  <option value="GRUPAL">Grupal</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-300">Mapa</label>
                <input 
                  className="w-full p-2 rounded bg-gray-600 text-white border border-gray-500" 
                  value={form.map} 
                  onChange={e => setForm({...form, map: e.target.value})} 
                  placeholder="Ej: Dust 2"
                />
              </div>
              <div>
                <label className="block text-gray-300">Nombre Jugador/Team</label>
                <input 
                  className="w-full p-2 rounded bg-gray-600 text-white border border-gray-500" 
                  value={form.name} 
                  onChange={e => setForm({...form, name: e.target.value})} 
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-300">Puntaje / Tiempo</label>
                <input 
                  className="w-full p-2 rounded bg-gray-600 text-white border border-gray-500" 
                  value={form.score} 
                  onChange={e => setForm({...form, score: e.target.value})} 
                  required
                />
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="block text-gray-300">Título del Logro</label>
                <input 
                  className="w-full p-2 rounded bg-gray-600 text-white border border-gray-500" 
                  value={form.name} 
                  onChange={e => setForm({...form, name: e.target.value})} 
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-300">Descripción</label>
                <textarea 
                  className="w-full p-2 rounded bg-gray-600 text-white border border-gray-500" 
                  value={form.description} 
                  onChange={e => setForm({...form, description: e.target.value})} 
                  required
                />
              </div>
            </>
          )}

          <div className="md:col-span-2">
            <label className="block text-gray-300">Imagen del Evento</label>
            <input 
              type="file" 
              className="w-full p-2 rounded bg-gray-600 text-white border border-gray-500"
              onChange={e => setFile(e.target.files ? e.target.files[0] : null)}
            />
            {form.imageUrl && <p className="text-xs text-green-400 mt-1">Imagen actual cargada</p>}
          </div>
        </div>

        <div className="flex gap-2">
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-semibold">
            {editingId ? 'Actualizar' : 'Agregar'}
          </button>
          {editingId && (
            <button type="button" onClick={cancelEdit} className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 font-semibold">
              Cancelar
            </button>
          )}
        </div>
      </form>

      <div className="bg-gray-700 rounded-lg overflow-hidden shadow-sm border border-gray-600">
        <h3 className="text-xl font-bold p-4 text-white border-b border-gray-600">Lista de Rankings</h3>
        <table className="w-full text-left text-gray-300">
          <thead className="bg-gray-600 text-white uppercase text-sm">
            <tr>
              <th className="p-4">Juego</th>
              <th className="p-4">Tipo</th>
              <th className="p-4">Detalle</th>
              <th className="p-4">Valor</th>
              <th className="p-4">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {rankings.map(r => (
              <tr key={r.id} className="border-b border-gray-600 hover:bg-gray-600">
                <td className="p-4">
                  {r.game}
                  {r.season && <span className="block text-xs text-gray-400">{r.season}</span>}
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs ${r.type === 'RANKING' ? 'bg-purple-900 text-purple-300' : 'bg-pink-900 text-pink-300'}`}>
                    {r.type === 'RANKING' ? 'RANKING' : 'LOGRO'}
                  </span>
                </td>
                <td className="p-4">
                  {r.type === 'RANKING' ? (
                    <div>
                      <div className="font-bold text-white">{r.name}</div>
                      <div className="text-xs text-gray-400">{r.category} - {r.map || 'General'}</div>
                    </div>
                  ) : (
                    <div>
                      <div className="font-bold text-white">{r.name}</div>
                      <div className="text-xs text-gray-400 truncate w-48">{r.description}</div>
                    </div>
                  )}
                </td>
                <td className="p-4">
                   {r.type === 'RANKING' ? <span className="text-yellow-400 font-mono">{r.score}</span> : '-'}
                </td>
                <td className="p-4 flex gap-2">
                  <button 
                    onClick={() => handleEdit(r)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-sm"
                  >
                    Editar
                  </button>
                  <button 
                    onClick={() => handleDelete(r.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
            {rankings.length === 0 && (
              <tr>
                <td colSpan={5} className="p-4 text-center text-gray-500">No hay rankings registrados.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function EventsManager({ token }: { token: string }) {
  const [events, setEvents] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState({ title: '', description: '', date: '', imageUrl: '' });
  const [file, setFile] = useState<File | null>(null);

  const fetchEvents = () => {
    axios.get('http://localhost:4000/events').then(res => setEvents(res.data));
  };

  useEffect(fetchEvents, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let imageUrl = form.imageUrl;
      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        const res = await axios.post('http://localhost:4000/upload', formData);
        imageUrl = res.data.url;
      }

      const dataToSubmit = { ...form, imageUrl };

      if (editingId) {
        await axios.patch(`http://localhost:4000/events/${editingId}`, dataToSubmit, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setEditingId(null);
      } else {
        await axios.post('http://localhost:4000/events', dataToSubmit, {
          headers: { Authorization: `Bearer ${token}` }
        });
      }
      fetchEvents();
      setForm({ title: '', description: '', date: '', imageUrl: '' });
      setFile(null);
    } catch (err) {
      alert('Error al guardar evento');
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('¿Seguro que deseas eliminar este evento?')) return;
    try {
      await axios.delete(`http://localhost:4000/events/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchEvents();
    } catch (err) {
      alert('Error al eliminar');
    }
  };

  const handleEdit = (event: any) => {
    const date = new Date(event.date);
    const offset = date.getTimezoneOffset();
    const localDate = new Date(date.getTime() - (offset * 60 * 1000));
    const formattedDate = localDate.toISOString().slice(0, 10);

    setForm({
      title: event.title,
      description: event.description,
      date: formattedDate,
      imageUrl: event.imageUrl || ''
    });
    setEditingId(event.id);
    setFile(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm({ title: '', description: '', date: '', imageUrl: '' });
    setFile(null);
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-white">{editingId ? 'Editar Evento' : 'Agregar Nuevo Evento'}</h3>
      <form onSubmit={handleSubmit} className="grid gap-4 mb-8 bg-gray-700 p-4 rounded border border-gray-600 text-white">
        <input
          placeholder="Título"
          className="p-2 border border-gray-500 rounded bg-gray-600 text-white placeholder-gray-400"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Descripción"
          className="p-2 border border-gray-500 rounded bg-gray-600 text-white placeholder-gray-400"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
          required
        />
        <input
          type="date"
          className="p-2 border border-gray-500 rounded bg-gray-600 text-white placeholder-gray-400"
          value={form.date}
          onChange={e => setForm({ ...form, date: e.target.value })}
          required
          style={{ colorScheme: 'dark' }}
          lang="es"
        />
        <div>
          <label className="block text-gray-300 mb-1">Imagen del Evento</label>
          <input 
            type="file" 
            className="w-full p-2 rounded bg-gray-600 text-white border border-gray-500"
            onChange={e => setFile(e.target.files ? e.target.files[0] : null)}
          />
          {form.imageUrl && <p className="text-xs text-green-400 mt-1">Imagen actual cargada</p>}
        </div>
        <div className="flex gap-2">
          <button className="bg-green-600 text-white p-2 rounded hover:bg-green-700 font-semibold flex-grow">
            {editingId ? 'Actualizar Evento' : 'Crear Evento'}
          </button>
          {editingId && (
            <button type="button" onClick={cancelEdit} className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600 font-semibold">
              Cancelar
            </button>
          )}
        </div>
      </form>

      <h3 className="text-xl font-bold mb-4 text-white">Lista de Eventos</h3>
      <div className="space-y-4">
        {events.map(e => (
          <div key={e.id} className="flex justify-between items-center bg-gray-700 p-4 border border-gray-600 rounded shadow-sm">
            <div className="flex gap-4 items-center">
              {e.imageUrl && <img src={e.imageUrl} alt="" className="w-16 h-16 object-cover rounded" />}
              <div>
                <p className="font-bold text-lg text-white">{e.title}</p>
                <p className="text-sm text-gray-300">{new Date(e.date).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'UTC' })}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(e)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(e.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RecordsManager({ token }: { token: string }) {
  const [records, setRecords] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState({ gameName: '', playerName: '', score: '', date: '', imageUrl: '' });
  const [file, setFile] = useState<File | null>(null);

  const fetchRecords = () => {
    axios.get('http://localhost:4000/records').then(res => setRecords(res.data));
  };

  useEffect(fetchRecords, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let imageUrl = form.imageUrl;
      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        const res = await axios.post('http://localhost:4000/upload', formData);
        imageUrl = res.data.url;
      }

      const dataToSubmit = { ...form, imageUrl };

      if (editingId) {
        await axios.patch(`http://localhost:4000/records/${editingId}`, dataToSubmit, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setEditingId(null);
      } else {
        await axios.post('http://localhost:4000/records', dataToSubmit, {
          headers: { Authorization: `Bearer ${token}` }
        });
      }
      fetchRecords();
      setForm({ gameName: '', playerName: '', score: '', date: '', imageUrl: '' });
      setFile(null);
    } catch (err) {
      alert('Error al guardar récord');
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('¿Seguro que deseas eliminar este récord?')) return;
    try {
      await axios.delete(`http://localhost:4000/records/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchRecords();
    } catch (err) {
      alert('Error al eliminar');
    }
  };

  const handleEdit = (record: any) => {
    const date = new Date(record.date);
    const offset = date.getTimezoneOffset();
    const localDate = new Date(date.getTime() - (offset * 60 * 1000));
    const formattedDate = localDate.toISOString().slice(0, 10);

    setForm({
      gameName: record.gameName,
      playerName: record.playerName,
      score: record.score,
      date: formattedDate,
      imageUrl: record.imageUrl || ''
    });
    setEditingId(record.id);
    setFile(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm({ gameName: '', playerName: '', score: '', date: '', imageUrl: '' });
    setFile(null);
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-white">{editingId ? 'Editar Récord' : 'Agregar Nuevo Récord'}</h3>
      <form onSubmit={handleSubmit} className="grid gap-4 mb-8 bg-gray-700 p-4 rounded border border-gray-600 text-white">
        <input
          placeholder="Nombre del Juego"
          className="p-2 border border-gray-500 rounded bg-gray-600 text-white placeholder-gray-400"
          value={form.gameName}
          onChange={e => setForm({ ...form, gameName: e.target.value })}
          required
        />
        <input
          placeholder="Individual o Grupal"
          className="p-2 border border-gray-500 rounded bg-gray-600 text-white placeholder-gray-400"
          value={form.playerName}
          onChange={e => setForm({ ...form, playerName: e.target.value })}
          required
        />
        <input
          placeholder="Mapa y/o Puntaje"
          className="p-2 border border-gray-500 rounded bg-gray-600 text-white placeholder-gray-400"
          value={form.score}
          onChange={e => setForm({ ...form, score: e.target.value })}
          required
        />
        <input
          type="date"
          className="p-2 border border-gray-500 rounded bg-gray-600 text-white placeholder-gray-400"
          value={form.date}
          onChange={e => setForm({ ...form, date: e.target.value })}
          required
          style={{ colorScheme: 'dark' }}
          lang="es"
        />
        <div>
          <label className="block text-gray-300 mb-1">Imagen (Opcional)</label>
          <input 
            type="file" 
            className="w-full p-2 rounded bg-gray-600 text-white border border-gray-500"
            onChange={e => setFile(e.target.files ? e.target.files[0] : null)}
          />
          {form.imageUrl && <p className="text-xs text-green-400 mt-1">Imagen actual cargada</p>}
        </div>
        <div className="flex gap-2">
          <button className="bg-green-600 text-white p-2 rounded hover:bg-green-700 font-semibold flex-grow">
            {editingId ? 'Actualizar Récord' : 'Crear Récord'}
          </button>
          {editingId && (
            <button type="button" onClick={cancelEdit} className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600 font-semibold">
              Cancelar
            </button>
          )}
        </div>
      </form>

      <h3 className="text-xl font-bold mb-4 text-white">Lista de Récords</h3>
      <div className="space-y-4">
        {records.map(r => (
          <div key={r.id} className="flex justify-between items-center bg-gray-700 p-4 border border-gray-600 rounded shadow-sm">
            <div className="flex gap-4 items-center">
              {r.imageUrl && <img src={r.imageUrl} alt="" className="w-16 h-16 object-cover rounded" />}
              <div>
                <p className="font-bold text-lg text-white">{r.gameName} - {r.score}</p>
                <p className="text-sm text-gray-300">{r.playerName}</p>
                <p className="text-xs text-gray-400">{new Date(r.date).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'UTC' })}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(r)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(r.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
