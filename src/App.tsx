import { Header } from './components/Header';
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/alissonandrade2020.png',
      name: 'Alisson Andrade',
      role: 'CTO @AAM Sistemas/Gerente @ESAT EaD'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu Portfólio. É um projeto que fiz na NOVA trilha do Ignite, evento da Rocketseat. O nome do projeto é Feed 🚀' },
      { type: 'link', content: 'http://alissondeandradearaujo.000webhostapp.com/' },
    ],
    publishedAt: new Date('2023-01-12 11:36:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu Portfólio. É um projeto que fiz na NOVA trilha do Ignite, evento da Rocketseat. O nome do projeto é Feed 🚀' },
      { type: 'link', content: 'mayk.brito/feedback' },
    ],
    publishedAt: new Date('2023-01-12 11:47:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
