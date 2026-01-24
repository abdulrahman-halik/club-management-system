import React from 'react';

const Sponsors = () => {
    // Mock sponsor data
    const sponsors = [
        { id: 1, name: "City Sports", tier: "Gold", description: "Premium sports equipment retailer." },
        { id: 2, name: "Tech Solutions Inc.", tier: "Platinum", description: "Leading IT consultancy firm." },
        { id: 3, name: "Local Bakery", tier: "Silver", description: "Freshly baked goods every day." },
        { id: 4, name: "Community Bank", tier: "Platinum", description: "Your trusted financial partner." },
        { id: 5, name: "Green Landscaping", tier: "Bronze", description: "Professional lawn care services." },
    ];

    const getTierColor = (tier) => {
        switch (tier) {
            case 'Platinum': return 'bg-gray-100 border-gray-400';
            case 'Gold': return 'bg-yellow-50 border-yellow-400';
            case 'Silver': return 'bg-gray-50 border-gray-300';
            default: return 'bg-orange-50 border-orange-200';
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-club-primary mb-4">Our Sponsors</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    We are incredibly grateful for the generous support of our sponsors.
                    Their contributions help us keep the club running and developing our facilities.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sponsors.map(sponsor => (
                    <div
                        key={sponsor.id}
                        className={`border-2 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow bg-white ${getTierColor(sponsor.tier).replace('bg-', 'hover:bg-opacity-50 ')}`}
                    >
                        <div className="h-32 w-full bg-gray-200 rounded-lg flex items-center justify-center mb-6 text-gray-400 font-bold text-xl">
                            LOGO
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{sponsor.name}</h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${getTierColor(sponsor.tier)}`}>
                            {sponsor.tier} Partner
                        </span>
                        <p className="text-gray-600">{sponsor.description}</p>
                    </div>
                ))}
            </div>

            <div className="mt-16 bg-club-primary text-white rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Interested in Sponsoring Us?</h2>
                <p className="mb-6">
                    Connect your brand with our community and support local cricket.
                    We have various customized packages available.
                </p>
                <a
                    href="/contact"
                    className="inline-block bg-white text-club-primary font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors"
                >
                    Contact Us
                </a>
            </div>
        </div>
    );
};

export default Sponsors;
