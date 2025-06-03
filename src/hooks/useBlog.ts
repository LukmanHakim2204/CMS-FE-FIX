// hooks/useBlog.ts
import { useState, useEffect, useCallback, useRef } from 'react';
import type { BlogState, FetchPostsParams, PaginationInfo } from '../types/type';
import { blogService } from '../services/blogApi';

export const useBlog = (initialParams: FetchPostsParams = {}) => {
  const [state, setState] = useState<BlogState>({
    posts: [],
    loading: true,
    error: null,
    currentPage: 1,
    pagination: null,
  });

  // Use ref to prevent infinite loops
  const initialParamsRef = useRef(initialParams);
  const mountedRef = useRef(true);

  const fetchPosts = useCallback(async (params: FetchPostsParams = {}) => {
    if (!mountedRef.current) return;
    
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const response = await blogService.fetchPosts(params);
      
      if (!mountedRef.current) return; // Check if component is still mounted
      
      const paginationInfo: PaginationInfo | null = response.meta ? {
        lastPage: response.meta.last_page,
        total: response.meta.total,
        hasNext: response.links?.next !== null,
        hasPrev: response.links?.prev !== null,
      } : null;

      setState(prev => ({
        ...prev,
        posts: response.data,
        pagination: paginationInfo,
        currentPage: response.meta?.current_page || params.page || 1,
        loading: false,
        error: null,
      }));
    } catch (error) {
      if (!mountedRef.current) return;
      
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to fetch posts',
      }));
    }
  }, []);

  const goToPage = useCallback((page: number) => {
    const params = { ...initialParamsRef.current, page };
    fetchPosts(params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [fetchPosts]);

  const nextPage = useCallback(() => {
    if (state.pagination?.hasNext && !state.loading) {
      goToPage(state.currentPage + 1);
    }
  }, [state.pagination?.hasNext, state.currentPage, state.loading, goToPage]);

  const prevPage = useCallback(() => {
    if (state.pagination?.hasPrev && !state.loading) {
      goToPage(state.currentPage - 1);
    }
  }, [state.pagination?.hasPrev, state.currentPage, state.loading, goToPage]);

  const refresh = useCallback(() => {
    if (!state.loading) {
      const params = { ...initialParamsRef.current, page: state.currentPage };
      fetchPosts(params);
    }
  }, [fetchPosts, state.currentPage, state.loading]);

  // Only run effect once on mount
  useEffect(() => {
    mountedRef.current = true;
    fetchPosts(initialParamsRef.current);
  
    return () => {
      mountedRef.current = false;
    };
  }, [fetchPosts]);
  return {
    ...state,
    fetchPosts,
    goToPage,
    nextPage,
    prevPage,
    refresh,
  };
};
