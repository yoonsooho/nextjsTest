"use client";

import React, { useEffect, useState } from "react";

const Comment = (props) => {
  const [comment, setComment] = useState("");
  const [commentArr, setCommentArr] = useState([]);

  useEffect(() => {
    fetch(`/api/comment/list?id=${props._id}`)
      .then((res) => res.json())
      .then((result) => {
        setCommentArr(result);
      });
  }, []);
  return (
    <div>
      <div>댓글목록</div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={(e) => {
            setComment(e.target.value);
          }}
          value={comment}
        />
        <button
          onClick={() => {
            fetch(`/api/comment/new`, {
              method: "POST",
              body: JSON.stringify({ comment: comment, _id: props._id }),
            })
              .then(async () => {
                await fetch(`/api/comment/list?id=${props._id}`)
                  .then((res) => res.json())
                  .then((result) => {
                    setCommentArr(result);
                  });
              })
              .then(() => setComment(""));
          }}
        >
          댓글전송
        </button>
      </form>
      <div>
        {commentArr.map((item) => (
          <div key={item._id}>{item.content}</div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
