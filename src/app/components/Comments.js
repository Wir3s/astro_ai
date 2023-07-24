'use client'

import React, { useState } from "react";
import styles from "../components/comments.module.css"

function Comments() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      // Adds the new comment at the top of the list
      // and removes the oldest comment if there are more than 10 comments
      setComments((prevComments) => [newComment, ...prevComments.slice(0, 9)]);
      setNewComment("");
    }
  };

  return (
    <div className={styles.commentsContainer}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Enter a comment"
          className={styles.commentsInput}
        />
        <button type="submit" className={styles.commentsButton}>Submit</button>
      </form>

      <ul className={styles.commentsList}>
        {comments.map((comment, index) => (
          <li key={index} className={styles.commentsItem}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;
