import React from 'react';
import { User } from 'lucide-react';

const LeaderboardCard = ({ title, type, data }) => {
    // data is an array of { player, value, teamId }
    // type is 'runs' or 'wickets' for styling

    const colorClass = type === 'runs'
        ? 'bg-orange-500 text-white'
        : 'bg-purple-600 text-white';

    if (!data || data.length === 0) return null;

    const topPlayer = data[0];
    const restPlayers = data.slice(1);

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
            <div className={`p-4 ${colorClass}`}>
                <h3 className="font-bold text-lg flex items-center">
                    {title}
                </h3>
            </div>

            {/* Top Player Highlight */}
            <div className="p-6 text-center border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                <div className="relative inline-block">
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mb-3 mx-auto overflow-hidden border-4 ${type === 'runs' ? 'border-orange-500' : 'border-purple-600'}`}>
                        {topPlayer.avatar ? (
                            <img src={topPlayer.avatar} alt={topPlayer.name} className="w-full h-full object-cover" />
                        ) : (
                            <span className="text-gray-400 bg-gray-200 w-full h-full flex items-center justify-center">
                                <User size={32} />
                            </span>
                        )}
                    </div>
                    <div className="absolute -bottom-2 -right-0 bg-yellow-400 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-sm">
                        #1
                    </div>
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white text-lg">{topPlayer.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{topPlayer.teamName}</p>
                <div className={`text-3xl font-extrabold ${type === 'runs' ? 'text-orange-500' : 'text-purple-600'}`}>
                    {topPlayer.value} <span className="text-sm font-normal text-gray-500">{type === 'runs' ? 'Runs' : 'Wickets'}</span>
                </div>
            </div>

            {/* List for others */}
            <div className="max-h-64 overflow-y-auto">
                {restPlayers.map((player, index) => (
                    <div key={player.id} className="flex items-center justify-between p-3 border-b border-gray-50 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                        <div className="flex items-center space-x-3">
                            <span className="font-mono font-bold text-gray-400 w-6 text-center">{index + 2}</span>
                            <div>
                                <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm">{player.name}</p>
                                <p className="text-xs text-gray-500">{player.teamName}</p>
                            </div>
                        </div>
                        <div className="font-bold text-gray-700 dark:text-gray-300">
                            {player.value}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LeaderboardCard;
