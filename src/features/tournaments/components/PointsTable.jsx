import React from 'react';

const PointsTable = ({ data }) => {
    // data: Array of team stats objects

    if (!data || data.length === 0) {
        return <div className="p-4 text-center text-gray-500">No data available</div>;
    }

    // Sort logic usually handled by parent or data, but ensuring here: Points desc, then NRR desc
    const sortedData = [...data].sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        return b.nrr - a.nrr;
    });

    return (
        <div className="overflow-hidden bg-white dark:bg-gray-800 shadow-sm rounded-xl border border-gray-100 dark:border-gray-700">
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 font-medium uppercase text-xs">
                        <tr>
                            <th className="px-4 py-3">Pos</th>
                            <th className="px-4 py-3">Team</th>
                            <th className="px-4 py-3 text-center">P</th>
                            <th className="px-4 py-3 text-center">W</th>
                            <th className="px-4 py-3 text-center">L</th>
                            <th className="px-4 py-3 text-center hidden md:table-cell">T</th>
                            <th className="px-4 py-3 text-center hidden md:table-cell">NR</th>
                            <th className="px-4 py-3 text-center">NRR</th>
                            <th className="px-4 py-3 text-center font-bold">Pts</th>
                            <th className="px-4 py-3 text-center">Form</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                        {sortedData.map((team, index) => (
                            <tr key={team.teamId} className={`hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors ${index < 4 ? 'bg-green-50/30 dark:bg-green-900/10' : ''}`}>
                                <td className="px-4 py-3 font-semibold text-gray-600 dark:text-gray-400">
                                    {index + 1}
                                </td>
                                <td className="px-4 py-3 font-medium text-gray-900 dark:text-white flex items-center space-x-2">
                                    {team.logo && <img src={team.logo} alt="" className="w-6 h-6 rounded-full" />}
                                    <span>{team.teamName}</span>
                                </td>
                                <td className="px-4 py-3 text-center text-gray-600 dark:text-gray-300">{team.played}</td>
                                <td className="px-4 py-3 text-center text-green-600 dark:text-green-400 font-medium">{team.won}</td>
                                <td className="px-4 py-3 text-center text-red-500 dark:text-red-400 font-medium">{team.lost}</td>
                                <td className="px-4 py-3 text-center text-gray-500 hidden md:table-cell">{team.tied}</td>
                                <td className="px-4 py-3 text-center text-gray-500 hidden md:table-cell">{team.nr}</td>
                                <td className="px-4 py-3 text-center font-mono text-gray-600 dark:text-gray-300">{team.nrr > 0 ? '+' : ''}{team.nrr.toFixed(3)}</td>
                                <td className="px-4 py-3 text-center font-bold text-gray-900 dark:text-white text-base">{team.points}</td>
                                <td className="px-4 py-3 text-center">
                                    {/* Simple form guide visualization - could be real data */}
                                    <div className="flex justify-center space-x-1">
                                        {Array(5).fill(0).map((_, i) => (
                                            <div key={i} className={`w-2 h-2 rounded-full ${i < team.won ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PointsTable;
