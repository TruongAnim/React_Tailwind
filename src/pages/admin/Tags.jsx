import { useState } from 'react';
import TagTable from '../../components/admin/TagTable';
import AddTagModal from '../../components/admin/AddTagModal';

export default function Tags() {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0);

    const handleAddSuccess = () => {
        setRefreshKey(prev => prev + 1);
    };

    return (
        <div>
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-2xl font-semibold text-gray-900">Tags</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all tags in your application including their name, slug, and description.
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button
                        type="button"
                        onClick={() => setIsAddModalOpen(true)}
                        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Add tag
                    </button>
                </div>
            </div>
            <div className="mt-8">
                <TagTable key={refreshKey} />
            </div>

            <AddTagModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onSuccess={handleAddSuccess}
            />
        </div>
    );
} 