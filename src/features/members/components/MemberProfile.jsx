import React from 'react';
import { X, Phone, Mail, Calendar, Shield, Award, User } from 'lucide-react';

const MemberProfile = ({ member, onClose }) => {
    if (!member) return null;

    // Function to determine if we can show contact info
    // In a real app, this would check the current user's permissions vs the member's privacy settings
    // For now, we simulate "Member" view access mostly, unless PUBLIC
    const canShowContact = (member) => {
        if (member.privacy?.visible_to === 'PUBLIC') return true;
        if (member.privacy?.visible_to === 'MEMBER') return true; // Assuming we are a logged in member
        if (member.privacy?.visible_to === 'ADMIN') return false; // Hidden from general members
        return false;
    };

    const showPhone = canShowContact(member, 'phone');
    const showEmail = canShowContact(member, 'email');

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
            <div
                className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-200"
                onClick={e => e.stopPropagation()}
            >
                <div className="relative h-32 bg-gradient-to-r from-blue-600 to-indigo-600">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="relative z-10 px-6 pb-8 -mt-16">
                    <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                        <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-gray-100 shadow-xl">
                            {member.photo ? (
                                <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                    <User size={48} />
                                </div>
                            )}
                        </div>
                        <div className="flex-1 text-gray-900 sm:mt-20">
                            <h2 className="text-3xl font-bold">{member.name}</h2>
                            <p className="text-blue-600 font-medium text-lg">{member.role}</p>
                        </div>
                        <div className={`px-4 py-1.5 rounded-full text-sm font-semibold border sm:mt-20 ${member.status === 'Active'
                            ? 'bg-blue-50 text-blue-700 border-blue-100'
                            : 'bg-gray-100 text-gray-500 border-gray-200'
                            }`}>
                            {member.status}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-gray-500 uppercase text-xs font-bold tracking-wider mb-3">Contact Info</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-gray-700">
                                        <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                                            <Phone size={18} />
                                        </div>
                                        {showPhone ? (
                                            <a href={`tel:${member.contact?.phone}`} className="hover:text-blue-600 transition-colors">
                                                {member.contact?.phone}
                                            </a>
                                        ) : (
                                            <span className="text-gray-400 italic">Hidden (Privacy)</span>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-700">
                                        <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                                            <Mail size={18} />
                                        </div>
                                        {showEmail ? (
                                            <a href={`mailto:${member.contact?.email}`} className="hover:text-blue-600 transition-colors">
                                                {member.contact?.email}
                                            </a>
                                        ) : (
                                            <span className="text-gray-400 italic">Hidden (Privacy)</span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-gray-500 uppercase text-xs font-bold tracking-wider mb-3">Membership Details</h3>
                                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 space-y-3">
                                    <div className="flex items-center gap-3">
                                        <Shield className="text-blue-500 w-5 h-5" />
                                        <div>
                                            <p className="text-xs text-gray-500">Type</p>
                                            <p className="text-gray-900 font-medium">{member.membershipType}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Calendar className="text-blue-500 w-5 h-5" />
                                        <div>
                                            <p className="text-xs text-gray-500">Member Since</p>
                                            <p className="text-gray-900 font-medium">{member.joinDate}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {(member.battingStyle || member.bowlingStyle || member.team) && (
                                <div>
                                    <h3 className="text-gray-500 uppercase text-xs font-bold tracking-wider mb-3">Cricket Profile</h3>
                                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 space-y-4">
                                        {member.team && (
                                            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                                                <span className="text-gray-500 text-sm">Team</span>
                                                <span className="text-gray-900 font-medium">{member.team}</span>
                                            </div>
                                        )}
                                        {member.battingStyle && (
                                            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                                                <span className="text-gray-500 text-sm">Batting</span>
                                                <span className="text-gray-900 font-medium">{member.battingStyle}</span>
                                            </div>
                                        )}
                                        {member.bowlingStyle && (
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-500 text-sm">Bowling</span>
                                                <span className="text-gray-900 font-medium">{member.bowlingStyle}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {member.committeeRole && (
                                <div>
                                    <h3 className="text-gray-500 uppercase text-xs font-bold tracking-wider mb-3">Roles</h3>
                                    <div className="flex items-center gap-2 p-3 bg-amber-50 border border-amber-100 rounded-xl text-amber-700">
                                        <Award size={20} className="text-amber-500" />
                                        <span className="font-medium">{member.committeeRole}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="p-4 border-t border-gray-100 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors font-medium"
                    >
                        Close Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MemberProfile;
