import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Bookmark, Collection } from '../types';
import { QRCodeSVG } from 'qrcode.react';

export function BookmarkList({ collection }: { collection: Collection }) {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBookmark, setSelectedBookmark] = useState<Bookmark | null>(null);

  useEffect(() => {
    loadBookmarks();
  }, [collection.id]);

  async function loadBookmarks() {
    try {
      const { data, error } = await supabase
        .from('bookmarks')
        .select('*')
        .eq('collection_id', collection.id)
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      setBookmarks(data || []);
    } catch (error) {
      console.error('Error loading bookmarks:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <div className="p-4">Loading bookmarks...</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">{collection.title}</h2>
      <div className="space-y-4">
        {bookmarks.map((bookmark) => (
          <div
            key={bookmark.id}
            className="flex items-start space-x-3 p-3 rounded hover:bg-gray-100 cursor-pointer"
            onClick={() => setSelectedBookmark(bookmark)}
          >
            {bookmark.favicon && (
              <img
                src={bookmark.favicon}
                alt=""
                className="w-4 h-4"
              />
            )}
            <div>
              <div className="font-medium">{bookmark.title}</div>
              <div className="text-sm text-gray-500">{bookmark.url}</div>
            </div>
          </div>
        ))}
      </div>

      {selectedBookmark && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-bold mb-4">{selectedBookmark.title}</h3>
            <QRCodeSVG value={selectedBookmark.url} />
            <button
              onClick={() => setSelectedBookmark(null)}
              className="mt-4 w-full bg-blue-500 text-white p-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}