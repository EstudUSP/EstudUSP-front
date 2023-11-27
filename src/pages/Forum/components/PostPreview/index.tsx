import { useEffect, useState } from 'react';

import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import { PostPreviewContainer, PostPreviewContent, TeacherTag, TitleWrapper } from './styles';
import { Avatar } from '../../../../components/Avatar';
import { Comments } from '../Comments';
import { CommentsContext } from '../../../../contexts/CommentsContext';
import { Subtitle } from '../../../../styles/global';
import { useContextSelector } from 'use-context-selector';
import { ThumbsUp, Link, Check } from 'phosphor-react';
import { Post as PostType, PostsContext } from '../../../../contexts/PostsContext';
import { TerciaryButton } from '../../../../components/TerciaryButton/styles';

// interface Content {
//   type: 'paragraph' | 'link';
//   content: string;
// }

interface PostProps {
  post: PostType;
  isCardOpen: boolean;
  onOpenCard: () => void;
  onCloseCard: () => void;
  setClipboardContent: () => void;
  isCopied: boolean;
}

export function PostPreview({ post, isCardOpen, onOpenCard, onCloseCard, ...props }: PostProps) {

  const comments = useContextSelector(CommentsContext, (context) => context.comments);
  const [likeState, setLikeState] = useState('');
  const updateUpvote = useContextSelector(PostsContext, posts => posts.updateUpvote);
  const updateDownvote = useContextSelector(PostsContext, posts => posts.updateDownvote);

  const publishedDateFormatted = format(new Date(post.publishedAt), "d 'de' LLLL 'às' HH:mm", {
    locale: ptBr 
  })

  const publishedDateRelativeToNow = formatDistanceToNow(new Date(post.publishedAt), {
    locale: ptBr,
    addSuffix: true
  })

  const fetchComments = useContextSelector(CommentsContext, (context) => {
    return context.fetchComments;
  });

  function handleOpenCard() {
    onOpenCard();
    
    fetchComments(post.id);
  }

  function handleLikePost() {
    if (likeState === 'like' && post.upvotes > 0) {
      updateDownvote(post.id);
      localStorage.removeItem(`likeStateForPost-${post.id}`);
      setLikeState('');
      return;
    }

    updateUpvote(post.id);
    localStorage.setItem(`likeStateForPost-${post.id}`, 'like');
    setLikeState('like');
  }

  function getLikeState() {
    if (likeState === 'like') return 'like';
    return '';
  }

  function copyToClipboard() {
    const url = window.location.href.split('#')[0];
    navigator.clipboard.writeText(url + '#' + post.id);
    props.setClipboardContent();
  }

  useEffect(() => {
    setLikeState(localStorage.getItem(`likeStateForPost-${post.id}`) ?? '');
  }, [post.id]);

  const isSelected = window.location.hash?.split('#')[1] === post.id + '';

  return (
    <PostPreviewContainer isSelected={isSelected} id={post.id + ''} variant={getLikeState()}>
      <div className='header'>
        <div className='tag-container'>
          {post.professor &&
            <TeacherTag>{post.professor}</TeacherTag>
          }
          <PostPreviewContent>
            <Avatar 
              content={post.anonymous ? 'Anônimo' : post.username}
            />
            <div className='authorInfo'>
              <TitleWrapper>
                <h6>{post.title}</h6>
                { props.isCopied ?
                  <Check size={18} weight='bold' /> :
                  <Link size={18} weight='bold' onClick={copyToClipboard} />
                }
              </TitleWrapper>
              <Subtitle>{post.anonymous ? 'Anônimo' : post.username}</Subtitle>
              {!isCardOpen &&
                <TerciaryButton className='downarrow' onClick={handleOpenCard}>
                  <p>{post.repliesQuantity} resposta{post.repliesQuantity!= 1 ? 's' : ''}</p>
                  <div></div>
                </TerciaryButton>
              }
            </div>
          </PostPreviewContent>
        </div>

        <div className="timeNlikes">
          <time title={publishedDateFormatted} dateTime={new Date(post.publishedAt).toISOString()}>
            {publishedDateRelativeToNow}
          </time>

          <button onClick={handleLikePost} className='likeButton' >
            <ThumbsUp size={20} weight='bold' /> {post.upvotes}
          </button>
        </div>
      </div>

      {isCardOpen &&
        <>
          <Comments key={post.id} post={post} comments={comments} />
          <TerciaryButton className='uparrow' onClick={onCloseCard}>
            <p>Ocultar</p>
            <div></div>
          </TerciaryButton>
        </>
      }
    </PostPreviewContainer>
  );
}