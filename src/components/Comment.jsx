import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./comment.module.css"



export function Comment(){

return(

    <div className={styles.comment}>
        <img src="https://github.com/GuilhermeMCL.png" alt="" />
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Guilherme maciel</strong>
                            <time>Cerca de 1 Hora atrás</time>

                        </div>
                    <button tittle="deletar">
                        <Trash size={24}/>
                    </button>
                
                    </header>
                    
                    <p>Muito bom ,Parabens</p>

            </div>

            <footer>
                <button>
                <ThumbsUp/>
                aplaudir <span>20</span>
                </button>   
            </footer>
        </div>
    </div>

    )

}