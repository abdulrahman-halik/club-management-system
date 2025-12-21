import { useState } from 'react';
import { committeeMembers } from '../data/committee';
import MemberCard from '../components/committee/MemberCard';
import Modal from '../components/ui/Modal';
import { User, Mail, Phone, Search, ArrowRight } from 'lucide-react';

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
                <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Club Leadership</h1>
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
            <Modal
                isOpen={!!selectedMember}
                onClose={() => setSelectedMember(null)}
                title="Contact Member"
            >
                {selectedMember && (
                    <div className="flex flex-col items-center">
                        <div className="relative mb-6">
                            <div className="absolute inset-0 bg-blue-100 rounded-full scale-110 blur-sm"></div>
                            <div className="relative z-10 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white">
                                {selectedMember.photo ? (
                                    <img
                                        src={selectedMember.photo}
                                        alt={selectedMember.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-400">
                                        <User size={64} />
                                    </div>
                                )}
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{selectedMember.name}</h3>
                        <p className="text-blue-600 font-medium text-lg mb-6 flex items-center gap-2">
                            {selectedMember.tier === 1 && <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">Lead</span>}
                            {selectedMember.role}
                        </p>

                        {selectedMember.bio && (
                            <p className="text-gray-600 text-center mb-8 max-w-sm text-sm leading-relaxed">
                                {selectedMember.bio}
                            </p>
                        )}

                        <div className="w-full space-y-3">
                            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-3">
                                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Details</h4>
                                {selectedMember.contact?.email && (
                                    <a href={`mailto:${selectedMember.contact?.email}`} className="flex items-center gap-3 p-2 hover:bg-white rounded-lg transition-colors group">
                                        <div className="p-2 bg-white rounded-full shadow-sm text-gray-400 group-hover:text-blue-500 transition-colors">
                                            <Mail size={18} />
                                        </div>
                                        <div className="flex-grow min-w-0">
                                            <p className="text-xs text-gray-400">Email</p>
                                            <p className="font-medium text-gray-900 truncate">{selectedMember.contact?.email}</p>
                                        </div>
                                        <ArrowRight size={16} className="text-gray-300 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-all" />
                                    </a>
                                )}
                                {selectedMember.contact?.phone && (
                                    <a href={`tel:${selectedMember.contact?.phone}`} className="flex items-center gap-3 p-2 hover:bg-white rounded-lg transition-colors group">
                                        <div className="p-2 bg-white rounded-full shadow-sm text-gray-400 group-hover:text-green-500 transition-colors">
                                            <Phone size={18} />
                                        </div>
                                        <div className="flex-grow min-w-0">
                                            <p className="text-xs text-gray-400">Phone</p>
                                            <p className="font-medium text-gray-900 truncate">{selectedMember.contact?.phone}</p>
                                        </div>
                                        <ArrowRight size={16} className="text-gray-300 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-all" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Committee;
