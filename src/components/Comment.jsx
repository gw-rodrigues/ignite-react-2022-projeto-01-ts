import { useState } from 'react';
import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((total) => prev + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/gw-rodrigues.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gleydson W. Rodrigues</strong>
              <time
                title="16 de Outubro 2022 às 12:00h"
                dateTime="2022-10-16 12:00:00"
              >
                Cerca 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} onClick={handleDeleteComment} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
