import { connectDB } from "@/Util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

const handler = async (req, res) => {
  if (req.method === "POST") {
    req.body = JSON.parse(req.body);
    let session = await getServerSession(req, res, authOptions);
    console.log("session", session);
    let commentDummy = {
      content: req.body.comment,
      parent: new ObjectId(req.body._id),
      author: session.user.email,
    };

    const db = (await connectDB).db("forum");
    let result = (await db).collection("comment").insertOne(commentDummy);

    res.status(200).json("전송완료");
  }
};

export default handler;
