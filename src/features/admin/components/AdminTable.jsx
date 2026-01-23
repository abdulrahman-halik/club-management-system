import React from 'react';
import { ChevronLeft, ChevronRight, ArrowUpDown } from 'lucide-react';

const AdminTable = ({
    columns,
    data,
    actions,
    onRowClick,
    isLoading
}) => {
    if (isLoading) {
        return (
            <div className="w-full h-48 flex items-center justify-center bg-white rounded-xl border border-gray-200">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                            {columns.map((col, idx) => (
                                <th
                                    key={idx}
                                    className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors group"
                                >
                                    <div className="flex items-center gap-1">
                                        {col.header}
                                        {col.sortable && <ArrowUpDown className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100" />}
                                    </div>
                                </th>
                            ))}
                            {actions && <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {data.length > 0 ? (
                            data.map((row, rowIdx) => (
                                <tr
                                    key={row.id || rowIdx}
                                    onClick={() => onRowClick && onRowClick(row)}
                                    className={`hover:bg-blue-50/50 transition-colors ${onRowClick ? 'cursor-pointer' : ''}`}
                                >
                                    {columns.map((col, colIdx) => (
                                        <td key={colIdx} className="px-6 py-4 text-sm text-gray-700">
                                            {col.render ? col.render(row) : row[col.accessor]}
                                        </td>
                                    ))}
                                    {actions && (
                                        <td className="px-6 py-4 text-right">
                                            {actions(row)}
                                        </td>
                                    )}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={columns.length + (actions ? 1 : 0)} className="px-6 py-12 text-center text-gray-500">
                                    No data available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Footer (Static for now) */}
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
                <span className="text-sm text-gray-600">Showing <span className="font-medium">1</span> to <span className="font-medium">{data.length}</span> of <span className="font-medium">{data.length}</span> results</span>
                <div className="flex gap-2">
                    <button className="p-1 rounded hover:bg-gray-200 disabled:opacity-50" disabled>
                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-1 rounded hover:bg-gray-200 disabled:opacity-50" disabled>
                        <ChevronRight className="w-5 h-6 text-gray-600" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminTable;
