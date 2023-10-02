import { ReactNode, useState, useCallback } from "react";
import { api } from "../lib/axios";
import { createContext } from "use-context-selector";

export interface IComment {
  id: number;
  content: string;
  attachments?: string[];
  publishedAt: Date;
  upvotes: number;
  downvotes: number;
  username: string;
  questionId: number;
}

interface CreateCommentInput {
  name?: string;
  content: string;
  images?: string[];
  questionId: number;
}

interface CommentsContextType {
  comments: IComment[];
  fetchComments: (questionId: number, query?: string) => Promise<void>;
  createComment: (data: CreateCommentInput) => Promise<void>;
  deleteComment: (id: number) => Promise<void>;
  updateUpvote: (id: number, data: Partial<IComment>) => Promise<void>;
  updateDownvote: (id: number, data: Partial<IComment>) => Promise<void>;
}

export const CommentsContext = createContext({} as CommentsContextType);

interface CommentsProviderProps {
  children: ReactNode;
}

export function CommentsProvider({ children }: CommentsProviderProps) {
  const [comments, setComments] = useState<IComment[]>([]);
  
  const fetchComments = useCallback(async (questionId: number, query?: string) => {
    const response = await api.get(`/question/${questionId}/replies`, {
      params: {
        _sort: 'publishedAt',
        _order: 'desc',
        q: query,
      }
    });
    
    setComments(response.data);
  }, []);

  const createComment = useCallback(async (data: CreateCommentInput) => {
    const { name, content, images, questionId } = data;

    const response = await api.post('/comments', {
      name: name || 'Anônimo',
      content,
      images,
      questionId,
    });

    setComments(state => [response.data, ...state])
  }, []);

  const deleteComment = useCallback(async (id: number) => {
    await api.delete(`/comments/${id}`);

    setComments(state => state.filter(comment => comment.id !== id));
  }
  , []);

  const updateUpvote = useCallback(async (id: number, data: Partial<IComment>) => {
    await api.patch(`/comments/${id}`, data);
    const response = await api.get('/comments', {
      params: {
        _sort: 'publishedAt',
        _order: 'desc',
      }
    });
    
    setComments(response.data);
  }, []);

  const updateDownvote = useCallback(async (id: number, data: Partial<IComment>) => {
    await api.patch(`/comments/${id}`, data);
    const response = await api.get('/comments', {
      params: {
        _sort: 'publishedAt',
        _order: 'desc',
      }
    });
    
    setComments(response.data);
  }, []);

  return (
    <CommentsContext.Provider value={{
      comments,
      fetchComments,
      createComment,
      deleteComment,
      updateUpvote,
      updateDownvote,
    }}>
      {children}
    </CommentsContext.Provider>
  )

  
}

