export interface InstagramPost {
    id: string;
    caption?: string;
    media_type: string;
    media_url: string;
    thumbnail_url?: string;
    permalink: string;
  }
  

export interface BlogState {
    posts: Post[];
    loading: boolean;
    error: string | null;
    currentPage: number;
    pagination: PaginationInfo | null;
  }

  export interface ApiResponseIG {
    data?: InstagramPost[];
    posts?: InstagramPost[];
    items?: InstagramPost[];
  }
  
  // types.ts
  export interface Author {
    id: number;
    name: string;
    email: string;
    created_at: string;
    updated_at: string;
  }
  
  export interface Category {
    id: number;
    slug: string;
    name: string;
    description: string;
    category_count: number | null;
  }
  
  export interface Tag {
    id: number;
    name: string;
    slug: string;
    description: string;
  }
  
  export interface Post {
    id: number;
    title: string;
    slug: string;
    author_id: Author;
    category_id: Category;
    tags_id: Tag;  // Changed to single Tag object, not array
    thumbnail: string;
    status: 'Draft' | 'Published' | 'Archived';  // Added 'Archived'
    published_at: string;
    created_at?: string; 
    updated_at?: string; 
    description?: string;
    excerpt?: string;
    comments_count?: number;
  }
  
  export interface BlogHeaderProps {
    title?: string;
    description?: string;
    backgroundImage?: string;
    backgroundType?: "gradient" | "image" | "video";
  }
export interface PortfolioItem {
    image: string;
    category: string;
    title: string;
    description: string;
    gallery: string;
    details: string;
    technologies: string[];
    client: string;
    duration: string;
}
  export interface BlogCardProps 
  {
    post: Post;
  }
  
export interface BlogPaginationProps {
    pagination: PaginationInfo;
    currentPage: number;
    onPageChange: (page: number) => void;
    onNextPage: () => void;
    onPrevPage: () => void;
    loading?: boolean;
    error?: string | null;
  }
  
export interface PaginationInfo {
    lastPage: number;
    total: number;
    hasNext: boolean;
    hasPrev: boolean;
  }
  
  export interface RecentPost  {
    id: number;
    title: string;
    slug: string;
    thumbnail: string;
    published_at: string;
  }
  
export interface BlogPostsListProps {
    posts: Post[];
    loading: boolean;
    error: string | null;
    onRetry: () => void;
  }
  export interface BlogSkeletonProps {
    count?: number;
  }
  export interface PaginatedResponse {
    data: Post[];
    links?: PaginationLinks;
    meta?: PaginationMeta;
  }
  
// API Types
export interface FetchPostsParams {
    page?: number;
    limit?: number;
  }
  
  export interface ApiResponse<T> {
    data: T;
    meta?: PaginationMeta;
    links?: PaginationLinks;
  }
  export interface PaginationMeta {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
  }
  
  export interface PaginationLinks {
    first?: string;
    last?: string;
    prev?: string | null;
    next?: string | null;
  }  