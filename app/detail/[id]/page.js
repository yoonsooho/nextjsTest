import { connectDB } from "@/Util/database";
import { ObjectId } from "mongodb";
import React from "react";
import Comment from "./Comment";

const Detail = async (props) => {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  return (
    <div>
      <h4>상세페이지</h4>
      <div>{result.title}</div>
      <div>{result.content}</div>
      <Comment _id={result._id.toString()} />
    </div>
  );
};

export default Detail;
