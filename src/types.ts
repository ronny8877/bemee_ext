export interface Collection {
  id: string;
  name: string;
  description?: string;
  user_id: string;
  created_at: string;
}

export interface Bookmark {
  id: string;
  collection_id: string;
  url: string;
  title: string;
  favicon?: string;
  og_image?: string;
  created_at: string;
}