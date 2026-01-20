import React from 'react';
import { X, Phone, Mail, Award, User, Info } from 'lucide-react';

const CommitteeMemberProfile = ({ member, onClose }) => {
    if (!member) return null;

    const contact = member.contact || {};

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
            <div
                className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-200"
                onClick={e => e.stopPropagation()}
            >
                {/* Header Gradient */}
                <div className="relative h-32 bg-gradient-to-r from-blue-600 to-indigo-600">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Profile Header Content */}
                <div className="relative z-10 px-6 pb-8 -mt-16">
                    <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                        {/* Profile Image */}
                        <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-gray-100 shadow-xl">
                            {member.photo ? (
                                <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50">
                                    <User size={48} />
                                </div>
                            )}
                        </div>

                        {/* Name and Role */}
                        <div className="flex-1 text-gray-900 sm:mt-20">
                            <h2 className="text-3xl font-bold">{member.name}</h2>
                            <p className="text-blue-600 font-medium text-lg flex items-center gap-2">
                                {member.role}
                                {member.priority === 1 && (
                                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full border border-blue-200">
                                        Head
                                    </span>
                                )}
                            </p>
                        </div>

                        {/* Status/Tier Badge */}
                        <div className={`px-4 py-1.5 rounded-full text-sm font-semibold border sm:mt-20 ${member.tier === 1 ? 'bg-amber-50 text-amber-700 border-amber-200' :
                                member.tier === 2 ? 'bg-blue-50 text-blue-700 border-blue-200' :
                                    'bg-gray-100 text-gray-600 border-gray-200'
                            }`}>
                            {member.tier === 1 ? 'President' : member.tier === 2 ? 'Senior Officer' : 'Committee'}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Column: Bio & Info */}
                        <div className="space-y-6">
                            {member.bio && (
                                <div>
                                    <h3 className="text-gray-500 uppercase text-xs font-bold tracking-wider mb-3">About</h3>
                                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 text-gray-700 leading-relaxed">
                                        {member.bio}
                                    </div>
                                </div>
                            )}

                            {member.tier && (
                                <div>
                                    <h3 className="text-gray-500 uppercase text-xs font-bold tracking-wider mb-3">Committee Role</h3>
                                    <div className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-100 rounded-xl text-gray-700">
                                        <Award size={20} className="text-blue-500" />
                                        <span>
                                            Priority Level: <span className="font-semibold text-gray-900">{member.priority}</span>
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right Column: Contact & Details */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-gray-500 uppercase text-xs font-bold tracking-wider mb-3">Contact Info</h3>
                                <div className="space-y-3">
                                    {contact.email && (
                                        <div className="flex items-center gap-3 text-gray-700">
                                            <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                                                <Mail size={18} />
                                            </div>
                                            <a href={`mailto:${contact.email}`} className="hover:text-blue-600 transition-colors break-all">
                                                {contact.email}
                                            </a>
                                        </div>
                                    )}
                                    {contact.phone && (
                                        <div className="flex items-center gap-3 text-gray-700">
                                            <div className="p-2 rounded-lg bg-green-50 text-green-600">
                                                <Phone size={18} />
                                            </div>
                                            <a href={`tel:${contact.phone}`} className="hover:text-green-600 transition-colors">
                                                {contact.phone}
                                            </a>
                                        </div>
                                    )}
                                    {!contact.email && !contact.phone && (
                                        <div className="flex items-center gap-3 text-gray-400 italic p-3 bg-gray-50 rounded-lg">
                                            <Info size={18} />
                                            <span>No direct contact info available.</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
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

export default CommitteeMemberProfile;
