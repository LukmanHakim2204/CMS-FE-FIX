// services/blogApi.ts
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { PaginatedResponse, FetchPostsParams, ApiResponse, Post } from '../types/type';

const API_BASE_URL = 'http://localhost:8000/api';

// Create axios instance with default config
const blogApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 30000, 
});

// Request interceptor for logging or auth tokens
blogApi.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
blogApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Only log in development
    if (import.meta.env.DEV) {
      if (error.response) {
        console.error('API Error:', error.response.data);
      } else if (error.request) {
        console.error('Network Error:', error.message);
      } else {
        console.error('Error:', error.message);
      }
    }
    return Promise.reject(error);
  }
);

export const blogService = {
  // Fetch paginated posts
  async fetchPosts(params: FetchPostsParams = {}): Promise<PaginatedResponse> {
    const { page = 1, limit = 9 } = params;
    
    try {
      const response: AxiosResponse<PaginatedResponse> = await blogApi.get('/posts/pagination', {
        params: { page, limit }
      });
      
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message || 
          `Failed to fetch posts: ${error.message}`
        );
      }
      throw new Error('An unexpected error occurred while fetching posts');
    }
  },

  // Fetch single post by slug
  async fetchPostBySlug(slug: string): Promise<Post> {
    try {
      const response: AxiosResponse<ApiResponse<Post>> = await blogApi.get(`/posts/${slug}`);
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message || 
          `Failed to fetch post: ${error.message}`
        );
      }
      throw new Error('An unexpected error occurred while fetching the post');
    }
  },
};