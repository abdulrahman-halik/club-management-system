import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const MatchFixtureCard = ({ match, team1, team2 }) => {

    if (!team1 || !team2) return null;

    const isCompleted = match.status === 'Completed';

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-3 text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold">
                <span>Match {match.matchNumber}</span>
                <span className={isCompleted ? 'text-green-600' : 'text-blue-500'}>{match.status}</span>
            </div>

            <div className="flex justify-between items-center mb-4">
                <div className="flex flex-col items-center w-5/12 text-center">
                    <div className="w-12 h-12 rounded-full bg-gray-100 mb-2 overflow-hidden items-center justify-center flex">
                        {team1.logo ? <img src={team1.logo} alt={team1.name} className="w-full h-full" /> : <span className="text-xs">{team1.name[0]}</span>}
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm line-clamp-1">{team1.name}</h4>
                    {isCompleted && match.scores && (
                        <p className="text-gray-600 dark:text-gray-300 font-mono font-medium mt-1">
                            {match.scores.team1.runs}/{match.scores.team1.wickets} <span className="text-xs text-gray-400">({match.scores.team1.overs})</span>
                        </p>
                    )}
                </div>

                <div className="w-2/12 flex flex-col items-center justify-center text-center">
                    <span className="text-gray-300 font-bold text-xl my-1">VS</span>
                </div>

                <div className="flex flex-col items-center w-5/12 text-center">
                    <div className="w-12 h-12 rounded-full bg-gray-100 mb-2 overflow-hidden items-center justify-center flex">
                        {team2.logo ? <img src={team2.logo} alt={team2.name} className="w-full h-full" /> : <span className="text-xs">{team2.name[0]}</span>}
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm line-clamp-1">{team2.name}</h4>
                    {isCompleted && match.scores && (
                        <p className="text-gray-600 dark:text-gray-300 font-mono font-medium mt-1">
                            {match.scores.team2.runs}/{match.scores.team2.wickets} <span className="text-xs text-gray-400">({match.scores.team2.overs})</span>
                        </p>
                    )}
                </div>
            </div>

            <div className="border-t border-gray-100 dark:border-gray-700 pt-3">
                {isCompleted ? (
                    <p className="text-center text-sm font-medium text-gray-800 dark:text-gray-200">
                        {match.result}
                    </p>
                ) : (
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                        <div className="flex items-center">
                            <Calendar className="w-3.5 h-3.5 mr-1" />
                            {new Date(match.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                            <Clock className="w-3.5 h-3.5 mr-1" />
                            {new Date(match.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                        <div className="flex items-center">
                            <MapPin className="w-3.5 h-3.5 mr-1" />
                            {match.venue}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MatchFixtureCard;
