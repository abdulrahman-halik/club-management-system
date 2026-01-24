import React from 'react';

const LiveTelecastPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-club-primary">Live Telecast</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    {/* Video Player Placeholder */}
                    <div className="aspect-video bg-black rounded-lg flex items-center justify-center text-white mb-4 shadow-lg overflow-hidden relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-lg opacity-50">Live Stream Offline</span>
                        </div>
                        {/* Embed would go here typically */}
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-2">Match: United CC vs City Strikers</h2>
                        <p className="text-gray-600">Live commentary and streaming provided by United Media Team.</p>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg shadow h-fit">
                    <h2 className="text-xl font-semibold mb-4 border-b pb-2">Live Score</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="font-bold">United CC</span>
                            <span className="text-2xl font-bold text-club-primary">145/3</span>
                        </div>
                        <div className="text-sm text-gray-500">Overs: 18.2</div>

                        <div className="flex justify-between items-center mt-6">
                            <span className="font-bold">City Strikers</span>
                            <span className="text-xl text-gray-700">Yet to Bat</span>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="font-medium mb-2">Key Performers</h3>
                        <ul className="text-sm space-y-2">
                            <li className="flex justify-between"><span>A. Khan</span> <span>56* (34)</span></li>
                            <li className="flex justify-between"><span>B. Smith</span> <span>32 (20)</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveTelecastPage;
