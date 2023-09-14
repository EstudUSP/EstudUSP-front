import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { PostType } from './components/Post'
import {BaseStyles, Button, ThemeProvider, theme} from '@primer/react'
import deepmerge from 'deepmerge'

import styles from './App.module.css'
import './global.css'
import { PostPreview } from './components/PostPreview'
import { ChangeEvent, useState } from 'react'
import { MinusCircle, PlusCircle } from 'phosphor-react'

const customTheme = deepmerge(theme, {
  fonts: {
    normal: 'Roboto, sans-serif',
    mono: 'MonoLisa, monospace',
  },
})

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/alkplima.png',
      username: 'Alexandre Kira'
    },
    title: 'Post 1',
    content: [
      { type: 'paragraph', content: 'Post 1'},
      { type: 'paragraph', content: 'Batatinha frita 123'},
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo accusamus ducimus quam vitae nihil, sed, numquam ratione eligendi totam iusto minus sit deserunt? Atque explicabo a facere veniam unde vel?'},
      { type: 'link', content: 'https://github.com/alkplima'},
    ],
    publishedAt: new Date('2021-09-11 20:43:30'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/gustavohls1.png',
      username: 'Gustavo Henrique'
    },
    title: 'Um título tal que reflete tal problema e etc e tals e mb a bafb afdb  af d bad nf da n adn anafdbafdbadnba adfnbadn',
    content: [
      { type: 'paragraph', content: 'Post 2'},
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo accusamus ducimus quam vitae nihil, sed, numquam ratione eligendi totam iusto minus sit deserunt? Atque explicabo a facere veniam unde vel?'},
      { type: 'link', content: 'https://github.com/gustavohls1'},
    ],
    publishedAt: new Date('2023-10-05 08:54:00'),
  },
];

function App() {
  const [newQuestionText, setNewQuestionText] = useState('');
  const [isQuestionCardOpen, setIsQuestionCardOpen] = useState(false);

  function handleNewQuestionChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewQuestionText(event.target.value);
  }  
  
  const isNewQuestionEmpty = newQuestionText.length === 0


  return (
    <ThemeProvider theme={customTheme} dayScheme='dark_dimmed'>
      <BaseStyles>
        <Header />

        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <h1>Fórum de dúvidas</h1>
            <div className={styles.newQuestion}>
              <div className={styles.mainBox}>
                <strong>Postar uma nova pergunta</strong>
                <div className={styles.plusWrapper}>
                  {isQuestionCardOpen ?
                    <MinusCircle size={24} onClick={() => setIsQuestionCardOpen(!isQuestionCardOpen) }/>
                    :
                    <PlusCircle size={24} onClick={() => setIsQuestionCardOpen(!isQuestionCardOpen) }/> 
                  }
                </div>
              </div>
              {isQuestionCardOpen &&
              <form className={styles.questionForm}>
                <input 
                  name='author'
                  type="text"
                  placeholder='Nome (opcional)'
                  // value={newQuestionAuthor}
                  // onChange={handleNewAuthorChange}
                />
                
                <input 
                  name='title'
                  type="text"
                  placeholder='Título da pergunta'
                  // value={newQuestionAuthor}
                  // onChange={handleTitleChange}
                  required
                />

                <textarea 
                  name='comment'
                  placeholder='Descreva a sua pergunta'
                  value={newQuestionText}
                  onChange={handleNewQuestionChange}
                  // onInvalid={handleNewQuestionInvalid}
                  required
                />
                <Button type='submit' disabled={isNewQuestionEmpty} size='large'>Publicar</Button>
              </form>
              }
            </div>
            {posts.map(post => {
              return (
                <PostPreview key={post.id} post={post} />
                )
              })}
          </main>
        </div>
      </BaseStyles>
    </ThemeProvider>
  )
}

export default App
