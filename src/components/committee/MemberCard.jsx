import { User, Mail, Phone, ChevronRight, ArrowRight } from 'lucide-react';

const MemberCard = ({ member, onContactClick, variant = 'standard' }) => {
    const isFeatured = variant === 'featured';
    const isCompact = variant === 'compact';
    const isStandard = variant === 'standard';

    // Featured Card (President)
    if (isFeatured) {
        return (
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 max-w-lg mx-auto">
                <div className="p-8 flex flex-col items-center text-center">
                    <div className="relative mb-6">
                        {/* Decorative background circle */}
                        <div className="absolute inset-0 bg-blue-100 rounded-full scale-110 transform rotate-45"></div>
                        <div className="relative z-10 w-40 h-40 bg-white p-1 rounded-full shadow-lg">
                            {member.photo ? (
                                <img
                                    src={member.photo}
                                    alt={member.name}
                                    className="w-full h-full rounded-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                                    <User size={80} />
                                </div>
                            )}
                        </div>
                        {/* Badge */}
                        <div className="absolute bottom-2 right-2 z-20 bg-blue-600 text-white p-2 rounded-full shadow-md">
                            <User size={16} fill="currentColor" />
                        </div>
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-xl text-blue-600 font-semibold mb-6">{member.role}</p>

                    {member.bio && (
                        <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
                            {member.bio}
                        </p>
                    )}

                    <button
                        onClick={() => onContactClick(member)}
                        className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2"
                    >
                        <Mail size={18} />
                        Contact President
                    </button>
                </div>
            </div>
        );
    }

    // Compact Card (General Committee)
    if (isCompact) {
        return (
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-4 flex items-center gap-4 group hover:border-blue-100">
                <div className="flex-shrink-0">
                    {member.photo ? (
                        <img
                            src={member.photo}
                            alt={member.name}
                            className="w-14 h-14 rounded-full object-cover shadow-sm group-hover:scale-105 transition-transform"
                        />
                    ) : (
                        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                            <User size={28} />
                        </div>
                    )}
                </div>

                <div className="flex-grow min-w-0">
                    <h3 className="text-sm font-bold text-gray-900 truncate group-hover:text-blue-700 transition-colors">{member.name}</h3>
                    <p className="text-xs text-gray-500 truncate">{member.role}</p>
                </div>

                <button
                    onClick={() => onContactClick(member)}
                    className="flex-shrink-0 text-blue-600 hover:text-blue-800 p-2 rounded-full hover:bg-blue-50 transition-colors flex items-center gap-1 text-xs font-semibold"
                >
                    Contact <ArrowRight size={14} />
                </button>
            </div>
        );
    }

    // Standard Card (Senior Officers)
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col h-full group">
            <div className="p-6 flex flex-col items-center flex-grow">
                <div className="mb-4 relative">
                    <div className="w-24 h-24 rounded-full bg-gray-50 p-1 shadow-inner overflow-hidden">
                        {member.photo ? (
                            <img
                                src={member.photo}
                                alt={member.name}
                                className="w-full h-full rounded-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        ) : (
                            <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                                <User size={40} />
                            </div>
                        )}
                    </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-1 text-center">{member.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-4 text-center">{member.role}</p>

                {/* Simplified bio for standard card */}
                <div className="mt-auto w-full pt-4 border-t border-gray-50">
                    <button
                        onClick={() => onContactClick(member)}
                        className="w-full py-2 bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-700 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                        <Mail size={16} />
                        Contact
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MemberCard;
