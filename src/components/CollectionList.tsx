import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Collection } from '../types';

export function CollectionList({ onSelect }: { onSelect: (collection: Collection) => void }) {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCollections();
  }, []);

  async function loadCollections() {
    try {
      const { data, error } = await supabase
        .from('collections')
        .select('*')
        .order('name');
        
      if (error) throw error;
      setCollections(data || []);
    } catch (error) {
      console.error('Error loading collections:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <div className="p-4">Loading collections...</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Collections</h2>
      <div className="space-y-2">
        {collections.map((collection) => (
          <button
            key={collection.id}
            onClick={() => onSelect(collection)}
            className="w-full text-left p-3 rounded hover:bg-gray-100 transition-colors"
          >
            <div className="font-medium">{collection.name}</div>
            <div className="text-sm text-gray-500">
              {collection.description}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}