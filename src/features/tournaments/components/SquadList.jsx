import React, { useState } from 'react';
import { ChevronDown, ChevronUp, User } from 'lucide-react';

const SquadList = ({ teams, players }) => {
    // players is flat list, need to filter by team

    // State to toggle team view
    const [expandedTeam, setExpandedTeam] = useState(null);

    const toggleTeam = (teamId) => {
        if (expandedTeam === teamId) {
            setExpandedTeam(null);
        } else {
            setExpandedTeam(teamId);
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teams.map(team => {
                const teamPlayers = players.filter(p => p.teamId === team.id);
                const isExpanded = expandedTeam === team.id;

                return (
                    <div key={team.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                        <div
                            className="p-4 flex items-center justify-between cursor-pointer bg-gray-50 dark:bg-gray-800/80 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            onClick={() => toggleTeam(team.id)}
                        >
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center overflow-hidden">
                                    {team.logo ? <img src={team.logo} alt={team.name} className="w-full h-full" /> : <span className="font-bold">{team.name[0]}</span>}
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white">{team.name}</h3>
                                    <p className="text-xs text-gray-500">{teamPlayers.length} Players</p>
                                </div>
                            </div>
                            {isExpanded ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                        </div>

                        {isExpanded && (
                            <div className="divide-y divide-gray-100 dark:divide-gray-700 border-t border-gray-100 dark:border-gray-700">
                                {teamPlayers.map(player => (
                                    <div key={player.id} className="p-3 flex items-center space-x-3 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500">
                                            <User size={16} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                                {player.name} {team.captain === player.id && <span className="text-xs bg-yellow-400 text-black px-1.5 rounded font-bold ml-1">C</span>}
                                            </p>
                                            <p className="text-xs text-gray-500">{player.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default SquadList;
