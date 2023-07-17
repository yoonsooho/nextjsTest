import { connectDB } from "@/Util/database";
import { ObjectId } from "mongodb";
import React from "react";

const handler = async (res, req) => {
  // console.log(res.query);
  // let db = (await connectDB).db("forum");
  // let result = (await db)
  //   .collection("post")
  //   .deleteOne({ _id: new ObjectId(res.query.어쩌구) });
  // return req.status(200).json("성공입니다.");
};

export default handler;
