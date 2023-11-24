import { ReactNode, useState, useCallback } from "react";
import { api } from "../lib/axios";
import { createContext } from "use-context-selector";
import { useFiles } from "./files";

export interface Post {
  id: number;
  username: string;
  title: string;
  content: string;
  publishedAt: Date;
  attachments: string[];
  sameQuestion: number;
  upvotes: number;
  anonymous: boolean;
  repliesQuantity: number;
  professor: string;
}

export interface CreatePostInput {
  title: string;
  username?: string;
  content: string;
  subjectId: string;
  professor?: string;
}

interface PostsContextType {
  posts: Post[];
  fetchPosts: (subjectId: string, query?: {[k: string]: string}) => Promise<Post[]>;
  createPost: (data: CreatePostInput) => Promise<void>;
  updateSameQuestion: (id: number) => Promise<void>;
  removeSameQuestion: (id: number) => Promise<void>;
  updateUpvote: (id: number) => Promise<void>;
  updateDownvote: (id: number) => Promise<void>;
  addComment: (id: number) => void;
  filterPosts: (query: string) => void;
}

export const PostsContext = createContext({} as PostsContextType);

interface PostsProviderProps {
  children: ReactNode;
}

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const { uploadedFiles } = useFiles();
  
  const fetchPosts = useCallback(async (subjectId: string, query?: {[k: string]: string}) => {
    const response = await api.get(`/${subjectId}/questions`, {
      params: {
        _sort: 'publishedAt',
        _order: 'desc',
        ...query,
      }
    });

    setPosts(response.data);

    return response.data;
  }, []);

  const createPost = async (data: CreatePostInput) => {
    const { username, title, content, subjectId, professor } = data;
    const attachments = uploadedFiles.map(file => file.file);

    const formData = new FormData();

    formData.append('anonymous', String(!username));
    formData.append('username', username || '');
    formData.append('title', title);
    formData.append('content', content);
    formData.append('professor', professor || '')

    console.log(attachments);

    attachments?.forEach(attachment => {
      formData.append('attachments', attachment);
    });

    const response = await api.post(`/${subjectId}/question`, formData);

    setPosts(state => [response.data, ...state])
  };

  const updateSameQuestion = async (id: number) => {
    await api.patch(`/question/${id}/sameQuestion`);

    const updatedPosts = posts.map((post) => {
      if (post.id === id) {
        post.sameQuestion++;
      }

      return post;
    });

    setPosts(updatedPosts);
  }

  const removeSameQuestion = async (id: number) => {
    await api.patch(`/question/${id}/removeSameQuestion`);

    const updatedPosts = posts.map((post) => {
      if (post.id === id) {
        post.sameQuestion--;
      }

      return post;
    });

    setPosts(updatedPosts);
  }

  const updateUpvote = async (id: number) => {
    await api.patch(`/question/${id}/upvote`);

    const updatedPosts = posts.map((post) => {
      if (post.id === id) {
        post.upvotes++;
      }

      return post;
    });

    setPosts(updatedPosts);
  };

  const updateDownvote = async (id: number) => {
    await api.patch(`/question/${id}/downvote`);

    const updatedPosts = posts.map((post) => {
      if (post.id === id) {
        post.upvotes--;
      }

      return post;
    });

    setPosts(updatedPosts);
  }

  const addComment = (id: number) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === id) {
        post.repliesQuantity++;
      }

      return post;
    });

    setPosts(updatedPosts);
  }

  const filterPosts = async (query: string) => {
    // @TODO: refetch posts before filtering
    // const posts: Post[] = await fetchPosts('');

    const filteredPosts = posts.filter((post) => {
      return post.title.toLowerCase().includes(query.toLowerCase()) || 
        (post.username || 'Anônimo').toLowerCase().includes(query.toLowerCase());
    });

    setPosts(filteredPosts);
  }

  return (
    <PostsContext.Provider value={{
      posts,
      fetchPosts,
      createPost,
      updateSameQuestion,
      removeSameQuestion,
      updateUpvote,
      updateDownvote,
      addComment,
      filterPosts,
    }}>
      {children}
    </PostsContext.Provider>
  )

  
}

