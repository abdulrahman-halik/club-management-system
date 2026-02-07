import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Trophy, Users } from 'lucide-react';

const TournamentCard = ({ tournament }) => {
    return (
        <Link
            to={`/tournaments/${tournament.id}`}
            className="block group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
        >
            <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                    src={tournament.banner || 'https://via.placeholder.com/600x400?text=Tournament+Banner'}
                    alt={tournament.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20">
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-2 ${tournament.status === 'Ongoing' ? 'bg-green-500 text-white' :
                            tournament.status === 'Completed' ? 'bg-gray-600 text-white' : 'bg-blue-500 text-white'
                        }`}>
                        {tournament.status}
                    </span>
                    <h3 className="text-xl font-bold text-white shadow-sm">{tournament.name}</h3>
                </div>
            </div>

            <div className="p-4 space-y-3">
                <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-primary-500" />
                    <span>{new Date(tournament.startDate).toLocaleDateString()} - {new Date(tournament.endDate).toLocaleDateString()}</span>
                </div>

                <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <Trophy className="w-4 h-4 mr-1" />
                        <span>{tournament.format}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{tournament.teams.length} Teams</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default TournamentCard;
