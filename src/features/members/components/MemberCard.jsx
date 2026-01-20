import React from 'react';
import { User, Phone, Mail } from 'lucide-react';

const MemberCard = ({ member, onClick }) => {
    return (
        <div
            className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group shadow-sm"
            onClick={() => onClick(member)}
        >
            <div className="p-6 flex flex-col items-center">
                <div className="relative mb-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-100 shadow-blue-100 shadow-lg group-hover:scale-105 transition-transform duration-300">
                        {member.photo ? (
                            <img
                                src={member.photo}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                                <User className="w-10 h-10 text-gray-400" />
                            </div>
                        )}
                    </div>
                    <span className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${member.status === 'Active' ? 'bg-blue-500' : 'bg-gray-400'
                        }`}></span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">{member.name}</h3>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100 mb-3">
                    {member.role || member.membershipType}
                </span>

                <div className="flex gap-2 mt-2 w-full justify-center">
                    {/* Only show icons if data exists, just as visual indicators */}
                    {member.contact?.phone && (
                        <div className="p-2 rounded-full bg-gray-50 text-gray-400 group-hover:text-blue-500 transition-colors">
                            <Phone size={14} />
                        </div>
                    )}
                    {member.contact?.email && (
                        <div className="p-2 rounded-full bg-gray-50 text-gray-400 group-hover:text-blue-500 transition-colors">
                            <Mail size={14} />
                        </div>
                    )}
                </div>
            </div>

            <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500 group-hover:text-blue-600 transition-colors">
                <span>View Profile</span>
                <span>→</span>
            </div>
        </div>
    );
};

export default MemberCard;
