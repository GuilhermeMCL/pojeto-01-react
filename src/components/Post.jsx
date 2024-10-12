import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://github.com/GuilhermeMCL.png' />
                    <div className={styles.authorInfo}>
                        <strong>Guilherme maciel</strong>
                        <span>Fullstack Developer</span>
                    </div>
                </div>

                <time title='12 de outubro as 08:37' dateTime='2024-10-12 08:36'>Publicado há 1H</time>
            </header>

            <div  className={styles.content}>
            <p>Fala galeraa 👋</p>

            <p>
                Acabei de subir mais um projeto no meu portifolio.
                É um projeto que fiz no formação React, da Rocketseat.
                O nome do projeto é FeedIgnite 🚀</p>

            <p>👉{'                                   '} <a href='#'>sem link </a></p>

            <p> 
                <a href=''>#novoprojeto</a>{'   '}
                <a href=''>#nlw</a>{'  '}
                <a href=''>#rocketseat</a>{'   '}
            </p>

            </div>
        </article>


    )
}