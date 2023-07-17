import { connectDB } from "@/Util/database";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions);
  if (session) {
    req.body.author = session.user.email;
  }
  if (req.method == "POST") {
    if (req.body.title == "" || req.body.content == "") {
      return req.status(500).json("제목과 내용을 모두 입력하세요");
    }
    const db = (await connectDB).db("forum");
    let result = await db.collection("post").insertOne(req.body);
    return res.status(200).redirect(302, "/list");
  }
}
