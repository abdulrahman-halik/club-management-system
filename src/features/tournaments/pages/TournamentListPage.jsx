import React from 'react';
import { TOURNAMENTS } from '../data/mockData';
import TournamentCard from '../components/TournamentCard';

const TournamentListPage = () => {
    // Sort tournaments: Ongoing first, then Upcoming, then Completed
    const sortedTournaments = [...TOURNAMENTS].sort((a, b) => {
        const statusOrder = { 'Ongoing': 1, 'Upcoming': 2, 'Completed': 3 };
        return statusOrder[a.status] - statusOrder[b.status];
    });

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Tournaments & Leagues</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Follow the latest action from our internal leagues and tournaments. Check scores, leaderboards, and match schedules.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedTournaments.map(tournament => (
                    <TournamentCard key={tournament.id} tournament={tournament} />
                ))}
            </div>
        </div>
    );
};

export default TournamentListPage;
