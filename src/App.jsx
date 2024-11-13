import { Header } from "./components/header.jsx"
import { Sidebar } from "./components/sidebar.jsx";
import { Post } from "./components/Post.jsx";


import '../src/global.css';
import styles from './app.module.css'


const posts = [
  {
      id: 1,
      author: {
          avatarUrl: 'https://github.com/diego3g.png',
          name: 'Diego Fernandes',
          role: 'CTO @ Rocketseat',
      },
      content: [
          { type: 'paragraph ', content: 'Fala galeraa 👋' },

          { type: 'paragraph ', content: 'Acabei de subir mais um projeto no meu portifolio.' },
          { type: 'paragraph ', content: 'É um projeto que fiz no formação React, da Rocketseat.' },
          { type: 'paragraph ', content: 'O nome do projeto é FeedIgnite 🚀' },
          { type: 'link ', content: 'sem link' },

      ],
      publishedAt: new Date ('2024-10-29 19:24:00'),
  },
  {
      id: 1,
      author: {
          avatarUrl: 'https://github.com/guilhermeMCL.png',
          name: 'Guilherme Maciel',
          role: 'Dev Full-stack',
      },
      content: [
          { type: 'paragraph ', content: 'Fala galeraa 👋' },

          { type: 'paragraph ', content: 'Acabei de subir mais um projeto no meu portifolio.' },
          { type: 'paragraph ', content: 'É um projeto que fiz no formação React, da Rocketseat.' },
          { type: 'paragraph ', content: 'O nome do projeto é FeedIgnite 🚀' },
          { type: 'link ', content: 'sem link' },

      ],
      publishedAt: new Date ('2024-10-28 19:24:00'),
  },

]


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post =>{
            return <Post
            author= {post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
          })}
        </main>

      </div>
    </div>
  )
}

