import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, QuestionForm } from './styles'
import { useContextSelector } from 'use-context-selector';

import { CreatePostInput, PostsContext } from '../../../../contexts/PostsContext';
import FileList from '../../../../components/FileList';
import Upload from '../../../../components/Upload';
import { X } from 'phosphor-react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from '../../../../components/Button/styles';
import { SecondaryButton } from '../../../../components/SecondaryButton/styles';
import CreatableSelectComponent from '../CreatableSelect';

interface NewQuestionModalProps {
  setIsQuestionCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function NewQuestionModal({ setIsQuestionCardOpen }: NewQuestionModalProps) {
  const { subjectId } = useParams();

  const createPost = useContextSelector(PostsContext, (context) => context.createPost);

  const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm<CreatePostInput>({
    defaultValues: {
      username: '',
      title: '',
      content: '',
      professor: '',
    }
  });
  
  async function handleCreateNewQuestion(data: CreatePostInput) {
    const newPost = {
      username: data.username,
      title: data.title,
      content: data.content,
      subjectId: subjectId || '',
      professor: data.professor,
    }

    await createPost(newPost);
    setIsQuestionCardOpen(false);
    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova pergunta</Dialog.Title>

        <CloseButton>
          <X size={24} weight='bold' />
        </CloseButton>

        <QuestionForm onSubmit={handleSubmit(handleCreateNewQuestion)}>
          <input 
            type="text"
            placeholder='Nome (opcional)'
            {...register("username")}
          />

          <CreatableSelectComponent isInForm={true} selectProfessor={setValue} />

          <input 
            type="text"
            placeholder='Título da pergunta'
            {...register("title", { required: true, minLength: 5, maxLength: 100 })}
          />
          {errors.title && <span className='error-span'>Título inválido!</span>}

          <textarea 
            placeholder='Descreva a sua pergunta'
            {...register("content", { required: true, minLength: 5, maxLength: 2000 })}
          />
          {errors.content && <span>Sua pergunta deve ter entre 5 e 2000 caracteres!</span>}

          <Upload />
          <FileList />

          <div className='buttons'>
            <SecondaryButton onClick={() => setIsQuestionCardOpen(false)} variant={false}>Cancelar</SecondaryButton>
            <Button type='submit'>Publicar</Button>
          </div>
        </QuestionForm>
        
      </Content>
    </Dialog.Portal>
  )
}