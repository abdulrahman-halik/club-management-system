import React from 'react';
import SponsorShowcase from '../components/SponsorShowcase';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { Heart } from 'lucide-react';

const SponsorsPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen pb-12">
            {/* Hero Section */}
            <div className="bg-blue-900 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Our Partners & Sponsors</h1>
                    <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                        We are proud to be supported by these fantastic local businesses.
                        Their generosity helps us keep cricket accessible for everyone in the community.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-8">
                {/* Donation CTA */}
                <Card className="mb-12 bg-white border-none shadow-lg transform -translate-y-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-4">
                        <div className="flex items-center gap-4">
                            <div className="bg-red-100 p-3 rounded-full text-red-600">
                                <Heart size={32} fill="currentColor" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Make a Donation</h3>
                                <p className="text-gray-600">Help us maintain our facilities and youth programs.</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline">Learn More</Button>
                            <Button variant="danger">Donate Now</Button>
                        </div>
                    </div>
                </Card>

                <SponsorShowcase />
            </div>
        </div>
    );
};

export default SponsorsPage;
