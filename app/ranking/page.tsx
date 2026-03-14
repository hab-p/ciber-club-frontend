'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Ranking {
  id: number;
  game: string;
  season?: string;
  type: string;
  category?: string;
  map?: string;
  name: string;
  score?: string;
  description?: string;
  imageUrl?: string;
}

export default function RankingPage() {
  const [rankings, setRankings] = useState<Ranking[]>([]);
  const [games, setGames] = useState<string[]>([]);
  const [activeGame, setActiveGame] = useState<string>('');
  const laCuevaDelHonguitoInstagramUrl = 'https://www.instagram.com/REEMPLAZAR_LA_CUEVA_DEL_HONGUITO/';
  const leChatNoirInstagramUrl = 'https://www.instagram.com/REEMPLAZAR_LE_CHAT_NOIR/';

  useEffect(() => {
    axios.get('http://localhost:4000/ranking')
      .then(res => {
        setRankings(res.data);
        const uniqueGames = Array.from(new Set(res.data.map((r: Ranking) => r.game))) as string[];
        setGames(uniqueGames);
        if (uniqueGames.length > 0) setActiveGame(uniqueGames[0]);
      })
      .catch(err => console.error(err));
  }, []);

  // Filter rankings for active game
  const gameRankings = rankings.filter(r => r.game === activeGame);
  
  // Group by type
  const competitiveRankings = gameRankings.filter(r => r.type === 'RANKING');
  const achievementRankings = gameRankings.filter(r => r.type === 'ACHIEVEMENT');

  // Group competitive by map
  const rankingsByMap: Record<string, Ranking[]> = {};
  competitiveRankings.forEach(r => {
    const map = r.map || 'General';
    if (!rankingsByMap[map]) rankingsByMap[map] = [];
    rankingsByMap[map].push(r);
  });

  return (
     <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-500">Ranking</h1>

        <div className="mb-10 flex justify-center">
          <div className="w-full max-w-[720px]">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-white">
              Premios Tempoarada de Verano 2026
            </h2>

            <div className="relative w-full">
              <img
                src="/Flyer-Premio-Final-Temporada-Verano.jpeg"
                alt="Flyer Premio Final Temporada Verano"
                className="w-full h-auto rounded-xl border border-gray-700 shadow-xl"
              />

              <a
                href={laCuevaDelHonguitoInstagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram La Cueva del Honguito"
                title="Ir al Instagram del Sponsor"
                className="group absolute z-20 block rounded-full cursor-pointer outline-none focus:outline-none focus-visible:outline-none"
                style={{ top: '2%', left: '54%', width: '30%', height: '30%', transform: 'translate(5%, 10%)', clipPath: 'circle(50% at 50% 50%)' }}
              >
                <span className="pointer-events-none absolute left-1/2 top-0 z-30 -translate-x-1/2 -translate-y-[120%] whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-xs text-white opacity-0 shadow transition-opacity group-hover:opacity-100 group-focus:opacity-100">
                  Ir al Instagram del Sponsor
                </span>
              </a>

              <a
                href={leChatNoirInstagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Le Chat Noir"
                title="Ir al Instagram del Sponsor"
                className="group absolute z-20 block rounded-full cursor-pointer outline-none focus:outline-none focus-visible:outline-none"
                style={{ top: '33%', left: '54%', width: '30%', height: '30%', transform: 'translate(5%, 10%)', clipPath: 'circle(50% at 50% 50%)' }}
              >
                <span className="pointer-events-none absolute left-1/2 top-0 z-30 -translate-x-1/2 -translate-y-[120%] whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-xs text-white opacity-0 shadow transition-opacity group-hover:opacity-100 group-focus:opacity-100">
                  Ir al Instagram del Sponsor
                </span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Game Tabs */}
        {games.length > 0 ? (
          <div className="flex justify-center space-x-4 mb-8 overflow-x-auto pb-2">
            {games.map(game => (
              <button
                key={game}
                onClick={() => setActiveGame(game)}
                className={`px-6 py-2 rounded-full font-semibold transition whitespace-nowrap ${
                  activeGame === game 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {game}
              </button>
            ))}
          </div>
        ) : (
           <div className="text-center text-gray-500 mt-20">
             <p className="text-xl">No hay rankings disponibles.</p>
           </div>
        )}

        {/* Content */}
        {activeGame && (
          <div className="space-y-12">
            
            {/* Competitive Rankings */}
            {Object.keys(rankingsByMap).length > 0 && (
              <div className="space-y-8">
                {Object.entries(rankingsByMap).map(([mapName, items]) => (
                  <div key={mapName} className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
                    <h2 className="text-2xl font-bold mb-4 text-purple-400 border-b border-gray-700 pb-2">
                      {mapName !== 'General' ? `Mapa: ${mapName}` : 'Ranking General'}
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Individual */}
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-green-400 flex items-center gap-2">
                          👤 Individual
                        </h3>
                        <ul className="space-y-2">
                          {items.filter(r => r.category === 'INDIVIDUAL').length > 0 ? (
                            items.filter(r => r.category === 'INDIVIDUAL').map(r => (
                               <li key={r.id} className="flex justify-between items-center bg-gray-700 p-3 rounded hover:bg-gray-600 transition">
                                 <div className="flex items-center gap-3">
                                   {r.imageUrl && (
                                     <img 
                                       src={r.imageUrl} 
                                       alt={r.name} 
                                       className="w-10 h-10 object-cover rounded-full border border-gray-500" 
                                     />
                                   )}
                                   <div>
                                      <span className="font-medium block">{r.name}</span>
                                      {r.season && <span className="text-xs text-gray-400">({r.season})</span>}
                                   </div>
                                 </div>
                                 <span className="font-mono text-yellow-400 font-bold">{r.score}</span>
                               </li>
                            ))
                          ) : (
                            <p className="text-gray-500 italic text-sm">No hay registros individuales.</p>
                          )}
                        </ul>
                      </div>

                      {/* Group */}
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-orange-400 flex items-center gap-2">
                          👥 Grupal
                        </h3>
                        <ul className="space-y-2">
                           {items.filter(r => r.category === 'GRUPAL').length > 0 ? (
                            items.filter(r => r.category === 'GRUPAL').map(r => (
                               <li key={r.id} className="flex justify-between items-center bg-gray-700 p-3 rounded hover:bg-gray-600 transition">
                                 <div className="flex items-center gap-3">
                                    {r.imageUrl && (
                                     <img 
                                       src={r.imageUrl} 
                                       alt={r.name} 
                                       className="w-10 h-10 object-cover rounded-full border border-gray-500" 
                                     />
                                   )}
                                   <div>
                                      <span className="font-medium block">{r.name}</span>
                                      {r.season && <span className="text-xs text-gray-400">({r.season})</span>}
                                   </div>
                                 </div>
                                 <span className="font-mono text-yellow-400 font-bold">{r.score}</span>
                               </li>
                            ))
                           ) : (
                            <p className="text-gray-500 italic text-sm">No hay registros grupales.</p>
                           )}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Achievements */}
            {achievementRankings.length > 0 && (
               <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
                 <h2 className="text-2xl font-bold mb-4 text-pink-400 border-b border-gray-700 pb-2">🏆 Logros</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {achievementRankings.map(r => (
                     <div key={r.id} className="bg-gray-800 p-6 rounded-lg shadow border border-gray-700 hover:border-pink-500 transition">
                       {r.imageUrl && (
                         <div className="mb-4">
                           <img src={r.imageUrl} alt={r.name} className="w-full h-32 object-cover rounded-lg border border-gray-600" />
                         </div>
                       )}
                       <div className="flex justify-between items-start mb-1">
                         <h4 className="font-bold text-lg text-white">
                           {r.name}
                           {r.season && <span className="text-xs text-gray-400 ml-2 font-normal">({r.season})</span>}
                         </h4>
                       </div>
                       <p className="text-gray-400 text-sm">{r.description}</p>
                     </div>
                   ))}
                 </div>
               </div>
            )}
            
            {gameRankings.length === 0 && (
                <p className="text-center text-gray-400">No hay información para mostrar de este juego.</p>
            )}

          </div>
        )}

      </div>
     </div>
  );
}
