import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    FileText,
    Users,
    Megaphone,
    PieChart,
    LogOut,
    Settings,
    Calendar,
    FolderOpen
} from 'lucide-react';

const AdminSidebar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const navigation = [
        { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
        { name: 'News & Content', href: '/admin/cms', icon: FileText },
        { name: 'Fixtures', href: '/admin/fixtures', icon: Calendar },
        { name: 'Documents', href: '/admin/documents', icon: FolderOpen },
        { name: 'Member Database', href: '/admin/users', icon: Users },
        { name: 'Communications', href: '/admin/comms', icon: Megaphone },
        { name: 'Finance', href: '/admin/finance', icon: PieChart },
    ];

    const isActive = (path) => {
        if (path === '/admin' && currentPath === '/admin') return true;
        if (path !== '/admin' && currentPath.startsWith(path)) return true;
        return false;
    };

    return (
        <div className="flex flex-col w-64 shrink-0 bg-slate-900 border-r border-slate-800 text-slate-300 min-h-screen">
            <div className="flex items-center justify-center h-16 border-b border-slate-800">
                <h1 className="text-xl font-bold text-white tracking-wider">UNITED ADMIN</h1>
            </div>

            <div className="flex-1 flex flex-col gap-1 p-4 overflow-y-auto">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 pl-3">
                    Overview
                </div>

                {navigation.map((item) => {
                    const active = isActive(item.href);
                    return (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={`
                flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                ${active
                                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                                    : 'hover:bg-slate-800 hover:text-white'
                                }
              `}
                        >
                            <item.icon className={`w-5 h-5 ${active ? 'text-white' : 'text-slate-400 group-hover:text-white'}`} />
                            {item.name}
                        </Link>
                    );
                })}

                <div className="mt-8 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 pl-3">
                    System
                </div>

                <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 hover:text-white transition-colors text-left w-full">
                    <Settings className="w-5 h-5 text-slate-400" />
                    Settings
                </button>
            </div>

            <div className="p-4 border-t border-slate-800">
                <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-red-400 hover:bg-slate-800 hover:text-red-300 transition-colors">
                    <LogOut className="w-5 h-5" />
                    Sign Out
                </button>
            </div>
        </div>
    );
};

export default AdminSidebar;
