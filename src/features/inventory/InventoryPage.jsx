import React, { useState } from 'react';
import { PackageSearch, Plus, Settings } from 'lucide-react';
import InventoryStats from './components/InventoryStats';
import InventoryFilters from './components/InventoryFilters';
import AssetCard from './components/AssetCard';
import CheckInOutModal from './components/CheckInOutModal';

// Mock Data
import { bag, bagB, balls, ground } from '../../assets/images/assets';


const MOCK_ASSETS = [
    {
        id: 'KB-001',
        name: 'Team Kit Bag A (1st XI)',
        category: 'kits',
        status: 'available',
        condition: 'Good',
        image: bag,
    },
    {
        id: 'KB-002',
        name: 'Team Kit Bag B (2nd XI)',
        category: 'kits',
        status: 'in-use',
        condition: 'Fair',
        image: bagB,
    },
    {
        id: 'TG-001',
        name: 'Match Balls Box (Duke)',
        category: 'training',
        status: 'available',
        condition: 'New',
        image: balls,
    },
    {
        id: 'TG-002',
        name: 'Training Cones Set',
        category: 'training',
        status: 'available',
        condition: 'Good',
        image: null,
    },
    {
        id: 'GE-001',
        name: 'Site Screen Covers',
        category: 'ground',
        status: 'maintenance',
        condition: 'Poor',
        image: ground,
    }
];

const InventoryPage = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [inventory, setInventory] = useState(MOCK_ASSETS);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    // Filtering Logic
    const filteredItems = inventory.filter(item => {
        const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.id.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleActionClick = (item) => {
        setSelectedItem(item);
        setModalOpen(true);
    };

    const handleModalConfirm = ({ itemId, action, userId, condition }) => {
        // Optimistic Update
        setInventory(prev => prev.map(item => {
            if (item.id === itemId) {
                return {
                    ...item,
                    status: action === 'checkout' ? 'in-use' : 'available',
                    condition: condition || item.condition // Update condition on checkin
                };
            }
            return item;
        }));

        // TODO: Call API here
        console.log(`Action: ${action} on ${itemId} by ${userId}`);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Inventory Management</h1>
                        <p className="mt-1 text-sm text-gray-500">Track equipment, stock levels, and asset status.</p>
                    </div>
                    <div className="flex space-x-3">
                        {/* Placeholder buttons for future admins */}
                        <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            <Settings className="h-4 w-4 mr-2" />
                            Manage
                        </button>
                        <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            <Plus className="h-4 w-4 mr-2" />
                            Add Item
                        </button>
                    </div>
                </div>

                {/* Stats Overview */}
                <InventoryStats />

                {/* Filters */}
                <InventoryFilters
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                    onSearchChange={setSearchQuery}
                />

                {/* Grid Content */}
                {filteredItems.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredItems.map((item) => (
                            <AssetCard
                                key={item.id}
                                asset={item}
                                onAction={handleActionClick}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 bg-white rounded-lg border border-dashed border-gray-300">
                        <PackageSearch className="mx-auto h-12 w-12 text-gray-400" />
                        <h3 className="mt-2 text-sm font-medium text-gray-900">No items found</h3>
                        <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                    </div>
                )}
            </div>

            {/* Modals */}
            <CheckInOutModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                item={selectedItem}
                onConfirm={handleModalConfirm}
            />
        </div>
    );
};

export default InventoryPage;
