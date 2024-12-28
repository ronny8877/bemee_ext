// @ts-nocheck
import { useState } from 'react';
import { Collection } from '../types';
import CollectionCard from './cards/CollectionCard';

export function CollectionList({ onSelect }: { onSelect: (collection: Collection) => void }) {
  const [collections, setCollections] = useState<Collection[]>([{
    id: '1',
    title: 'My Collection',
    total_links: 5,
    description: 'This is a collection of bookmarks',
    vibe:"#ff0000",
    user_id: '1',
    is_public: 'true',
    url_slug: 'my-collection',
    tags: 'tag1, tag2, tag3',
    created_at: new Date().toISOString(),
  },{
    id: '2',
    title: 'My Collection',
    is_public: 'true',
    tags: 'tag1, tag2, tag3',
    
    url_slug: 'my-collection',
    description: 'This is a collection of bookmarks',
    vibe:"#ff0000",
    total_links: 85,
    user_id: '1',
    created_at: new Date().toISOString(),
  },{
    id: '3',
    title: 'My Collection',
    is_public: 'false',
    
    url_slug: 'my-collection',
    description: 'This is a collection of bookmarks',
    vibe:"#ff0000",
    
    tags: 'tag1, tag2, tag3',
    total_links: 5,
    user_id: '1',
    created_at: new Date().toISOString(),
  },{
    id: '4',
    title: 'My Collection',
    is_public: 'true',
    
    url_slug: 'my-collection',
    tags: 'tag1, tag2, tag3',
    description: 'This is a collection of bookmarks',
    vibe:"#ff0000",
    total_links: 5,
    user_id: '1',
    created_at: new Date().toISOString(),
  },{
    id: '5',
    
    url_slug: 'my-collection',
    title: 'My Collection',
    total_links: 5,
    
    tags: 'tag1, tag2, tag3', is_public: 'false',
    description: 'This is a collection of bookmarks',
    vibe:"#ff0000",
    user_id: '1',
    created_at: new Date().toISOString(),
  }]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   loadCollections();
  // }, []);

  // async function loadCollections() {
  //   try {
  //     const { data, error } = await supabase
  //       .from('collections')
  //       .select('*')
  //       .order('name');
        
  //     if (error) throw error;
  //     setCollections(data || []);
  //   } catch (error) {
  //     console.error('Error loading collections:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  if (loading) return <div className="p-4">Loading collections...</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Collections</h2>
      <div className="space-y-2 flex gap-5 flex-col">
        {collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </div>
  );
}