import React, { useState } from 'react';
import { Search, Download, Filter, User, Tag, Edit2, Trash2 } from 'lucide-react';
import AdminTable from '../../components/AdminTable';

// Mock Data for Members with extended fields
const MOCK_MEMBERS = [
    {
        id: 1,
        name: 'John Smith',
        email: 'john.smith@example.com',
        role: 'Member',
        team: '1st XI',
        status: 'Active',
        joinedDate: '2023-01-15',
        tags: ['Safeguarding OK', 'First Aid']
    },
    {
        id: 2,
        name: 'David Wilson',
        email: 'dave.w@example.com',
        role: 'Committee',
        team: '2nd XI',
        status: 'Active',
        joinedDate: '2022-03-10',
        tags: ['Committee']
    },
    {
        id: 3,
        name: 'Sarah Jones',
        email: 's.jones@example.com',
        role: 'Admin',
        team: 'Women\'s XI',
        status: 'Active',
        joinedDate: '2021-05-20',
        tags: ['Admin', 'Safeguarding Lead']
    },
    {
        id: 4,
        name: 'Mike Brown',
        email: 'mike.b@example.com',
        role: 'Junior',
        team: 'Under 15s',
        status: 'Pending',
        joinedDate: '2024-02-01',
        tags: ['Parent Consent Needed']
    },
];

const UserManagementPage = () => {
    const [members, setMembers] = useState(MOCK_MEMBERS);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterRole, setFilterRole] = useState('All');

    const handleExportCSV = () => {
        // Mock CSV export
        console.log('Exporting CSV...');
        const csvContent = "data:text/csv;charset=utf-8,"
            + "Name,Email,Role,Team,Status,Tags\n"
            + members.map(m => `${m.name},${m.email},${m.role},${m.team},${m.status},"${m.tags.join(';')}"`).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "united_members_export.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const filteredMembers = members.filter(member => {
        const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            member.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRole = filterRole === 'All' || member.role === filterRole;
        return matchesSearch && matchesRole;
    });

    const columns = [
        {
            header: 'Member',
            accessor: 'name',
            render: (row) => (
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                        {row.name.charAt(0)}
                    </div>
                    <div>
                        <div className="font-medium text-gray-900">{row.name}</div>
                        <div className="text-xs text-gray-500">{row.email}</div>
                    </div>
                </div>
            )
        },
        { header: 'Role', accessor: 'role' },
        { header: 'Team', accessor: 'team' },
        {
            header: 'Status',
            accessor: 'status',
            render: (row) => (
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${row.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                    {row.status}
                </span>
            )
        },
        {
            header: 'Tags',
            accessor: 'tags',
            render: (row) => (
                <div className="flex flex-wrap gap-1">
                    {row.tags.map((tag, i) => (
                        <span key={i} className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-gray-100 text-gray-600 border border-gray-200">
                            {tag}
                        </span>
                    ))}
                </div>
            )
        }
    ];

    const renderActions = (row) => (
        <div className="flex items-center justify-end gap-2">
            <button className="p-1.5 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                <Edit2 className="w-4 h-4" />
            </button>
            <button className="p-1.5 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                <Trash2 className="w-4 h-4" />
            </button>
        </div>
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Member Database</h1>
                    <p className="text-gray-500 text-sm">Manage club members, roles, and eligibility.</p>
                </div>
                <button
                    onClick={handleExportCSV}
                    className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors shadow-sm font-medium"
                >
                    <Download className="w-4 h-4" />
                    Export CSV
                </button>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search by name or email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex gap-4">
                    <div className="relative">
                        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <select
                            value={filterRole}
                            onChange={(e) => setFilterRole(e.target.value)}
                            className="pl-10 pr-8 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none min-w-[150px]"
                        >
                            <option value="All">All Roles</option>
                            <option value="Member">Member</option>
                            <option value="Junior">Junior</option>
                            <option value="Committee">Committee</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Table */}
            <AdminTable
                columns={columns}
                data={filteredMembers}
                actions={renderActions}
            />
        </div>
    );
};

export default UserManagementPage;
