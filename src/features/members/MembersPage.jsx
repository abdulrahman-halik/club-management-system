import React, { useState, useMemo } from 'react';
import { Users } from 'lucide-react';
import MemberFilters from './components/MemberFilters';
import MembersList from './components/MembersList';
import MemberProfile from './components/MemberProfile';
// Mock Data 
import { MEMBERS_DATA } from './membersData';

const MembersPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterType, setFilterType] = useState('All');
    const [selectedMember, setSelectedMember] = useState(null);

    // Filter members based on search and type
    const filteredMembers = useMemo(() => {
        return MEMBERS_DATA.filter(member => {
            const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                member.role?.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesType = filterType === 'All' || member.membershipType === filterType;

            return matchesSearch && matchesType;
        });
    }, [searchQuery, filterType]);

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">
                            Club Directory
                        </h1>
                        <p className="text-gray-600 text-lg">
                            Connect with other members of the club.
                        </p>
                    </div>
                    <div className="bg-blue-50 border border-blue-100 px-4 py-2 rounded-lg text-blue-700 flex items-center gap-2 shadow-sm">
                        <Users size={20} className="text-blue-600" />
                        <span className="font-bold">{filteredMembers.length}</span> Members
                    </div>
                </div>

                <MemberFilters
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    filterType={filterType}
                    setFilterType={setFilterType}
                />

                <MembersList
                    members={filteredMembers}
                    onMemberClick={setSelectedMember}
                />

                {selectedMember && (
                    <MemberProfile
                        member={selectedMember}
                        onClose={() => setSelectedMember(null)}
                    />
                )}
            </div>
        </div>
    );
};

export default MembersPage;
