import { Header } from "./components/header"
import { Sidebar } from "./components/sidebar";
import { Post } from "./components/post";


import '../src/global.css';
import styles from './app.module.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>

          <Post
            author="Diego Fernandes"
            content="slaoqueescreveraqui"
          />


          <Post
            author="Diego Fernandes"
            content="slaoqueescreveraqui"
          />


        </main>

      </div>
    </div>
  )
}

