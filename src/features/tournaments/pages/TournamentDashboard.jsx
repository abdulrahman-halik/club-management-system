import React from 'react';
import { useParams, Routes, Route, Link, useLocation } from 'react-router-dom';
import { TOURNAMENTS, TEAMS, PLAYERS, FIXTURES, POINTS_TABLE, PLAYER_STATS } from '../data/mockData';
import { Trophy, Calendar, Users, BarChart2, Table, MapPin, FileText } from 'lucide-react';
import MatchFixtureCard from '../components/MatchFixtureCard';
import PointsTable from '../components/PointsTable';
import LeaderboardCard from '../components/LeaderboardCard';
import SquadList from '../components/SquadList';

const TournamentDashboard = () => {
    const { tournamentId } = useParams();
    const location = useLocation();

    // Find data
    const tournament = TOURNAMENTS.find(t => t.id === tournamentId);

    if (!tournament) {
        return <div className="p-8 text-center text-red-500">Tournament not found</div>;
    }

    const tournamentTeams = TEAMS.filter(t => tournament.teams.includes(t.id));
    const tournamentFixtures = FIXTURES.filter(f => f.tournamentId === tournamentId);
    const tournamentTable = POINTS_TABLE.filter(t => t.tournamentId === tournamentId)
        .map(entry => {
            const team = TEAMS.find(t => t.id === entry.teamId);
            return { ...entry, teamName: team?.name, logo: team?.logo };
        });

    const tournamentStats = PLAYER_STATS.filter(s => s.tournamentId === tournamentId)
        .map(stat => {
            const player = PLAYERS.find(p => p.id === stat.playerId);
            const team = TEAMS.find(t => t.id === player?.teamId);
            return {
                ...stat,
                name: player?.name,
                teamName: team?.name,
                avatar: player?.avatar,
                id: player?.id
            };
        });

    const topRunScorers = [...tournamentStats].sort((a, b) => b.runs - a.runs).map(p => ({ ...p, value: p.runs }));
    const topWicketTakers = [...tournamentStats].sort((a, b) => b.wickets - a.wickets).map(p => ({ ...p, value: p.wickets }));

    // Navigation tabs
    const tabs = [
        { name: 'Overview', path: '', icon: Trophy },
        { name: 'Fixtures', path: 'fixtures', icon: Calendar },
        { name: 'Points Table', path: 'table', icon: Table },
        { name: 'Stats', path: 'stats', icon: BarChart2 },
        { name: 'Teams', path: 'teams', icon: Users },
        { name: 'Rules', path: 'rules', icon: FileText },
    ];

    const currentPath = location.pathname.split('/').pop();
    const isOverview = currentPath === tournamentId || currentPath === ''; // Handle trailing slash

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-12">
            {/* Hero Banner */}
            <div className="relative h-64 md:h-80 w-full bg-gray-900">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <img
                    src={tournament.banner || 'https://via.placeholder.com/1200x400'}
                    alt={tournament.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full z-20 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent pt-20 px-4 md:px-8 pb-6">
                    <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                            <div>
                                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 bg-primary-500 text-white">
                                    {tournament.season} Season
                                </span>
                                <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{tournament.name}</h1>
                                <div className="flex items-center text-gray-300 text-sm md:text-base space-x-6">
                                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {new Date(tournament.startDate).toLocaleDateString()} - {new Date(tournament.endDate).toLocaleDateString()}</span>
                                    <span className="flex items-center"><Trophy className="w-4 h-4 mr-2" /> {tournament.format}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs Navigation */}
            <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-16 z-30 shadow-sm">
                <div className="container mx-auto px-4 overflow-x-auto">
                    <nav className="flex space-x-8 min-w-max">
                        {tabs.map((tab) => {
                            // Check if active based on URL
                            const isActive = tab.path === ''
                                ? (location.pathname.endsWith(tournamentId) || location.pathname.endsWith(tournamentId + '/'))
                                : location.pathname.includes(tab.path);

                            return (
                                <Link
                                    key={tab.name}
                                    to={tab.path}
                                    className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors ${isActive
                                        ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                                        }`}
                                >
                                    <tab.icon className="w-4 h-4 mr-2" />
                                    {tab.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <Routes>
                    <Route index element={
                        <div className="space-y-8">
                            {/* Overview Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Latest Matches - Left col spanning 2 */}
                                <div className="lg:col-span-2 space-y-6">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Latest Matches</h2>
                                        <Link to="fixtures" className="text-primary-600 text-sm hover:underline">View All</Link>
                                    </div>
                                    <div className="grid grid-cols-1 gap-4">
                                        {tournamentFixtures.slice(0, 3).map(match => (
                                            <MatchFixtureCard
                                                key={match.id}
                                                match={match}
                                                team1={TEAMS.find(t => t.id === match.team1Id)}
                                                team2={TEAMS.find(t => t.id === match.team2Id)}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Standings Snippet - Right Col */}
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Standings</h2>
                                        <Link to="table" className="text-primary-600 text-sm hover:underline">Full Table</Link>
                                    </div>
                                    <PointsTable data={tournamentTable.slice(0, 5)} />
                                </div>
                            </div>

                            {/* Top Performers */}
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">Top Performers</h2>
                                    <Link to="stats" className="text-primary-600 text-sm hover:underline">View Stats</Link>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <LeaderboardCard title="Most Runs" type="runs" data={topRunScorers.slice(0, 5)} />
                                    <LeaderboardCard title="Most Wickets" type="wickets" data={topWicketTakers.slice(0, 5)} />
                                </div>
                            </div>
                        </div>
                    } />

                    <Route path="fixtures" element={
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Fixtures & Results</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                {tournamentFixtures.map(match => (
                                    <MatchFixtureCard
                                        key={match.id}
                                        match={match}
                                        team1={TEAMS.find(t => t.id === match.team1Id)}
                                        team2={TEAMS.find(t => t.id === match.team2Id)}
                                    />
                                ))}
                            </div>
                        </div>
                    } />

                    <Route path="table" element={
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Points Table</h2>
                            <PointsTable data={tournamentTable} />
                        </div>
                    } />

                    <Route path="stats" element={
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Tournament Statistics</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <LeaderboardCard title="Orange Cap (Most Runs)" type="runs" data={topRunScorers} />
                                <LeaderboardCard title="Purple Cap (Most Wickets)" type="wickets" data={topWicketTakers} />
                            </div>
                        </div>
                    } />

                    <Route path="teams" element={
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Participating Teams</h2>
                            <SquadList teams={tournamentTeams} players={PLAYERS} />
                        </div>
                    } />

                    <Route path="rules" element={
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Rules & Regulations</h2>
                                <button className="flex items-center text-primary-600 hover:text-primary-700 font-medium">
                                    <FileText className="w-4 h-4 mr-2" /> Download Rulebook PDF
                                </button>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 space-y-6">
                                <section>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">1. Match Format</h3>
                                    <p className="text-gray-600 dark:text-gray-300">All matches will be played in the {tournament.format} format. Each innings consists of {tournament.format === 'T20' ? '20' : '10'} overs.</p>
                                </section>
                                <section>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">2. Powerplay Rules</h3>
                                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                                        <li><strong>Powerplay 1:</strong> Overs 1-6 (Only 2 fielders outside 30 yards)</li>
                                        <li><strong>Non-Powerplay:</strong> Overs 7-20 (Maximum 5 fielders outside 30 yards)</li>
                                    </ul>
                                </section>
                                <section>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">3. Super Over</h3>
                                    <p className="text-gray-600 dark:text-gray-300">In case of a tie, a Super Over will be played to determine the winner. If the Super Over is also tied, the team with more boundaries (Fours + Sixes) in the main match wins.</p>
                                </section>
                                <section>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">4. Squad Composition</h3>
                                    <p className="text-gray-600 dark:text-gray-300">Teams must field a playing XI. A maximum of 4 overseas/guest players are allowed per playing XI if applicable.</p>
                                </section>
                            </div>
                        </div>
                    } />
                </Routes>
            </div>
        </div>
    );
};

export default TournamentDashboard;
