import React from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';

// Mock data for sponsors - usually would come from API
const SPONSORS = [
    {
        id: 1,
        name: 'TechCorp Solutions',
        tier: 'Platinum',
        description: 'Providing IT solutions for local businesses since 2010.',
        logoUrl: 'https://placehold.co/400x200?text=TechCorp',
        website: '#'
    },
    {
        id: 2,
        name: 'GreenValley Landscaping',
        tier: 'Gold',
        description: 'Premier landscaping and ground maintenance.',
        logoUrl: 'https://placehold.co/400x200?text=GreenValley',
        website: '#'
    },
    {
        id: 3,
        name: 'City Sports Gear',
        tier: 'Gold',
        description: 'Your one-stop shop for all cricket equipment.',
        logoUrl: 'https://placehold.co/400x200?text=CitySports',
        website: '#'
    },
    {
        id: 4,
        name: 'The Local Pub',
        tier: 'Silver',
        description: 'Proud supporters of community sport.',
        logoUrl: 'https://placehold.co/400x200?text=The+Local+Pub',
        website: '#'
    }
];

const SponsorShowcase = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPONSORS.map((sponsor) => (
                <Card key={sponsor.id} className="flex flex-col h-full hover:shadow-md transition-shadow">
                    <div className="h-40 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-xl bg-gray-100 flex items-center justify-center">
                        {/* Using standard img tag for now, next/image would be better if using Next.js, but this is Vite/React */}
                        <img
                            src={sponsor.logoUrl}
                            alt={`${sponsor.name} logo`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-bold text-gray-900">{sponsor.name}</h3>
                            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${sponsor.tier === 'Platinum' ? 'bg-purple-100 text-purple-800' :
                                    sponsor.tier === 'Gold' ? 'bg-yellow-100 text-yellow-800' :
                                        'bg-gray-100 text-gray-800'
                                }`}>
                                {sponsor.tier}
                            </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">
                            {sponsor.description}
                        </p>
                    </div>
                    <div className="mt-auto pt-4 border-t border-gray-100">
                        <a
                            href={sponsor.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center"
                        >
                            Visit Website &rarr;
                        </a>
                    </div>
                </Card>
            ))}

            {/* Become a Sponsor Call to Action */}
            <Card className="flex flex-col items-center justify-center text-center h-full bg-blue-50 border-blue-100">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Your Logo Here</h3>
                <p className="text-sm text-blue-700 mb-6">
                    Support local cricket and promote your business to our community.
                </p>
                <Button variant="primary">
                    Become a Sponsor
                </Button>
            </Card>
        </div>
    );
};

export default SponsorShowcase;
