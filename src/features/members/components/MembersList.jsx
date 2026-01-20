import React from 'react';
import MemberCard from './MemberCard';
import { Search } from 'lucide-react';

const MembersList = ({ members, onMemberClick }) => {
    if (members.length === 0) {
        return (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300 shadow-sm">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No members found</h3>
                <p className="text-gray-500">Try adjusting your search or filter to see more results.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {members.map(member => (
                <MemberCard
                    key={member.id}
                    member={member}
                    onClick={onMemberClick}
                />
            ))}
        </div>
    );
};

export default MembersList;
