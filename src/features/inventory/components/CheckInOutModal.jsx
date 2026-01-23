import React, { useState } from 'react';
import { X } from 'lucide-react';

const CheckInOutModal = ({ isOpen, onClose, item, onConfirm }) => {
    const [selectedUser, setSelectedUser] = useState('');
    const [condition, setCondition] = useState('Good');
    const [notes, setNotes] = useState('');

    if (!isOpen || !item) return null;

    const isCheckOut = item.status === 'available';

    const handleSubmit = (e) => {
        e.preventDefault();
        onConfirm({
            itemId: item.id,
            action: isCheckOut ? 'checkout' : 'checkin',
            userId: selectedUser,
            condition,
            notes
        });
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                {/* Background overlay */}
                <div
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                    aria-hidden="true"
                    onClick={onClose}
                ></div>

                {/* Modal panel */}
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="flex justify-between items-start">
                            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                {isCheckOut ? 'Check Out Item' : 'Check In Item'}
                            </h3>
                            <button
                                onClick={onClose}
                                className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                            >
                                <span className="sr-only">Close</span>
                                <X size={24} />
                            </button>
                        </div>

                        <div className="mt-4">
                            <div className="mb-4">
                                <p className="text-sm text-gray-500">
                                    You are about to {isCheckOut ? 'check out' : 'check in'}: <span className="font-semibold text-gray-900">{item.name}</span> ({item.id})
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {isCheckOut ? (
                                    <div>
                                        <label htmlFor="user" className="block text-sm font-medium text-gray-700">Assign To</label>
                                        <select
                                            id="user"
                                            required
                                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border"
                                            value={selectedUser}
                                            onChange={(e) => setSelectedUser(e.target.value)}
                                        >
                                            <option value="">Select a member...</option>
                                            <option value="1">John Doe (Captain)</option>
                                            <option value="2">Jane Smith (Vice-Captain)</option>
                                            <option value="3">Mike Johnson</option>
                                        </select>
                                    </div>
                                ) : (
                                    <div>
                                        <label htmlFor="condition" className="block text-sm font-medium text-gray-700">Current Condition</label>
                                        <select
                                            id="condition"
                                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border"
                                            value={condition}
                                            onChange={(e) => setCondition(e.target.value)}
                                        >
                                            <option value="Good">Good</option>
                                            <option value="Fair">Fair (Wear & Tear)</option>
                                            <option value="Poor">Poor (Needs Repair)</option>
                                            <option value="Damaged">Damaged (Replace)</option>
                                        </select>
                                    </div>
                                )}

                                <div>
                                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes (Optional)</label>
                                    <textarea
                                        id="notes"
                                        rows={3}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder={isCheckOut ? "Purpose of use..." : "Report any issues..."}
                                        value={notes}
                                        onChange={(e) => setNotes(e.target.value)}
                                    />
                                </div>

                                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                                    <button
                                        type="submit"
                                        className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:col-start-2 sm:text-sm ${isCheckOut
                                                ? 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
                                                : 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
                                            }`}
                                    >
                                        Confirm {isCheckOut ? 'Check Out' : 'Check In'}
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                                        onClick={onClose}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckInOutModal;
