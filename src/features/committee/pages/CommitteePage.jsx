import { useState } from 'react';
import { committeeMembers } from '../../../data/committee';
import MemberCard from '../../../components/committee/MemberCard';
import CommitteeMemberProfile from '../../../components/committee/CommitteeMemberProfile';
import { User, Search } from 'lucide-react';

const Committee = () => {
    const [selectedMember, setSelectedMember] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    // Filter committee members based on search query
    const filteredMembers = committeeMembers.filter(member =>
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Filter Logic
    // If searching, show all in a generic grid (or keep structure if results allow). 
    // To keep simple: If searching, flat list. If not searching, structured layout.
    const isSearching = searchQuery.length > 0;

    // Default Structure (No Search)
    const president = committeeMembers.find(m => m.tier === 1);
    const seniorOfficers = committeeMembers.filter(m => m.tier === 2).sort((a, b) => a.priority - b.priority);
    const generalCommittee = committeeMembers.filter(m => m.tier === 3).sort((a, b) => a.priority - b.priority);

    return (
        <div className="container mx-auto px-4 py-8 md:py-16 bg-gray-50/50 min-h-screen">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Board of Committee Members</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Meet the dedicated team driving our cricket club forward for the 2024 season.
                </p>

                {/* Search Bar */}
                <div className="max-w-xl mx-auto relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-11 pr-4 py-3 border border-gray-200 rounded-full leading-5 bg-white placeholder-gray-400 focus:outline-none focus:placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 shadow-sm transition-all duration-200 hover:shadow-md"
                        placeholder="Find committee members..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* SEARCH RESULTS VIEW */}
            {isSearching ? (
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Search Results</h2>
                    {filteredMembers.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredMembers.map(member => (
                                <MemberCard
                                    key={member.id}
                                    member={member}
                                    onContactClick={setSelectedMember}
                                    variant="standard"
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                                <Search className="h-8 w-8 text-gray-400" />
                            </div>
                            <p className="text-gray-500 text-lg">No members found matching "{searchQuery}"</p>
                        </div>
                    )}
                </div>
            ) : (
                /* STRUCTURED VIEW */
                <div className="space-y-16 animate-fadeIn">

                    {/* President Section - Featured */}
                    {president && (
                        <section className="relative">
                            <MemberCard
                                member={president}
                                onContactClick={setSelectedMember}
                                variant="featured"
                            />
                        </section>
                    )}

                    {/* Senior Officers - Standard Grid */}
                    {seniorOfficers.length > 0 && (
                        <section className="max-w-7xl mx-auto">
                            <h2 className="text-center text-sm font-bold text-gray-500 uppercase tracking-widest mb-10 file:border-b border-gray-200 pb-2">Senior Officers</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
                                {seniorOfficers.map(member => (
                                    <MemberCard
                                        key={member.id}
                                        member={member}
                                        onContactClick={setSelectedMember}
                                        variant="standard"
                                    />
                                ))}
                            </div>
                        </section>
                    )}

                    {/* General Committee - Compact Grid */}
                    {generalCommittee.length > 0 && (
                        <section className="max-w-7xl mx-auto">
                            <h2 className="text-center text-sm font-bold text-gray-500 uppercase tracking-widest mb-10 border-b border-gray-200 pb-2">General Committee</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-2">
                                {generalCommittee.map(member => (
                                    <MemberCard
                                        key={member.id}
                                        member={member}
                                        onContactClick={setSelectedMember}
                                        variant="compact"
                                    />
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            )}

            {/* Contact Modal */}
            <CommitteeMemberProfile
                member={selectedMember}
                onClose={() => setSelectedMember(null)}
            />
        </div>
    );
};

export default Committee;
