"use client";

import React from "react";
import Link from "next/link";
import DetailLink from "./DetailLink";
const ListItem = ({ result }) => {
  return (
    <div>
      {result.map((item, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={`/detail/${item._id}`}>
              <h4>{item.title}</h4>
            </Link>
            {/* <DetailLink /> */}
            <Link href={`/edit/${item._id}`}>수정</Link>
            <button
              onClick={(e) => {
                // fetch("/api/post/delete", {
                //   method: "DELETE",
                //   body: item._id,
                // })
                //   .then((res) => {
                //     return res.json();
                //   })
                //   .then((res) => {
                //     e.target.parentElement.style.opacity = 0;
                //     setTimeout(() => {
                //       e.target.parentElement.style.display = "none";
                //     }, 1000);
                //   });
                fetch(`api/abc/${item._id}`)
                  .then((res) => {
                    return res.json();
                  })
                  .then((res) => {
                    console.log(res);
                  })
                  .then(() => {
                    e.target.parentElement.style.opacity = 0;
                    setTimeout(() => {
                      e.target.parentElement.style.display = "none";
                    }, 1000);
                  });
              }}
            >
              삭제
            </button>
            <p>{item.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ListItem;
