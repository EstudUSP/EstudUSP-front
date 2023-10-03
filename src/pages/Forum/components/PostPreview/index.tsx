import { useEffect, useState } from 'react';

import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import { PostPreviewContainer, PostPreviewContent } from './styles';
import { Avatar } from '../../../../components/Avatar';
import { Post } from '../Post';
import { CommentsContext } from '../../../../contexts/CommentsContext';
import { Subtitle } from '../../../../styles/global';
import { useContextSelector } from 'use-context-selector';
import { ThumbsUp } from 'phosphor-react';
import { PostsContext } from '../../../../contexts/PostsContext';


// interface Content {
//   type: 'paragraph' | 'link';
//   content: string;
// }

export interface PostType {
  id: number;
  name?: string;
  postTitle: string;
  content: string;
  sameQuestionCount: number;
  upvote: number;
  publishedAt: Date;
  disciplineId: number;
}

interface PostProps {
  post: PostType;
}

export function PostPreview({ post }: PostProps) {

  const comments = useContextSelector(CommentsContext, (context) => context.comments);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [likeState, setLikeState] = useState('');
  const updateUpvote = useContextSelector(PostsContext, posts => posts.updateUpvote);

  const publishedDateFormatted = format(new Date(post.publishedAt), "d 'de' LLLL 'às' HH:mm", {
    locale: ptBr 
  })

  const publishedDateRelativeToNow = formatDistanceToNow(new Date(post.publishedAt), {
    locale: ptBr,
    addSuffix: true
  })

  function handleOpenCard() {
    setIsCardOpen(!isCardOpen);
  }

  function handleLikePost() {
    if (likeState === 'like') {
      updateUpvote(post.id, { upvote: post.upvote - 1 });
      localStorage.removeItem(`likeStateForPost-${post.id}`);
      setLikeState('');
      return;
    }
    updateUpvote(post.id, { upvote: post.upvote + 1 });
    localStorage.setItem(`likeStateForPost-${post.id}`, 'like');
    setLikeState('like');
  }

  function getLikeState() {
    if (likeState === 'like') return 'like';
    return '';
  }

  const commentsFiltered = comments.filter(comment => comment.postId === post.id).filter(comment => comment.disciplineId === post.disciplineId);

  useEffect(() => {
    setLikeState(localStorage.getItem(`likeStateForPost-${post.id}`) ?? '');
  }, [post.id]);

  return (
    <PostPreviewContainer variant={getLikeState()}>
      <div className='header'>
        <PostPreviewContent>
          <Avatar 
            content={post.name || 'Anônimo'}
          />
          <div className='authorInfo'>
            <h6>{post.postTitle}</h6>
            <Subtitle>{post.name}</Subtitle>
            {!isCardOpen &&
              <div className='downarrow' onClick={handleOpenCard}>
                <p>{commentsFiltered.length} resposta(s)</p>
                <div></div>
              </div>
            }
          </div>
        </PostPreviewContent>

        <div className="timeNlikes">
          <time title={publishedDateFormatted} dateTime={new Date(post.publishedAt).toISOString()}>
            {publishedDateRelativeToNow}
          </time>

          <button onClick={handleLikePost} className='likeButton'>
            <ThumbsUp size={20} weight='bold' /> {post.upvote}
          </button>
        </div>
      </div>

      {isCardOpen &&
        <>
          <Post key={post.id} post={post} comments={comments} />
          <div className='uparrow' onClick={handleOpenCard}>
            <p>Ocultar</p>
            <div></div>
          </div>
        </>
      }
    </PostPreviewContainer>
  );
}