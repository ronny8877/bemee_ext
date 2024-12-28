export interface Collection {
  id: string;
  title: string;
  description: string;
  total_links: number;
  vibe: string;
  user_id: string;
  created_at: string;
  tags: string;
  is_public: string;
  url_slug: string;
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