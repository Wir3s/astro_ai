'use client'

import React, { useState } from "react";

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Enter a comment"
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;
