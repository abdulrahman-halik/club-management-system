import React from 'react';

const News = () => {
    const newsItems = [
        {
            id: 1,
            title: "Season Opener Victory!",
            date: "2025-04-10",
            summary: "United CC started the season with a bang, defeating the Rivals by 50 runs.",
            category: "Match Report"
        },
        {
            id: 2,
            title: "New Training Nets Installed",
            date: "2025-03-25",
            summary: "We are excited to announce that the new high-performance training nets are now open for use.",
            category: "Club News"
        },
        {
            id: 3,
            title: "Annual Charity Dinner",
            date: "2025-03-15",
            summary: "Join us for an evening of fun and fundraising at the clubhouse on April 20th.",
            category: "Events"
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-club-primary mb-6">Latest News</h1>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {newsItems.map(item => (
                    <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-100 px-2 py-1 rounded">{item.category}</span>
                                <span className="text-sm text-gray-500">{item.date}</span>
                            </div>
                            <h2 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h2>
                            <p className="text-gray-600 mb-4">{item.summary}</p>
                            <button className="text-club-secondary font-medium hover:text-club-primary transition-colors">
                                Read More &rarr;
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;
