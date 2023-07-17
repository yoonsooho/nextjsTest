import { connectDB } from "@/Util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

const deletehandler = async (req, res) => {
  let session = await getServerSession(req, res, authOptions);

  if (session) {
    if (req.method == "DELETE") {
      let db = (await connectDB).db("forum");

      let findEmail = await db
        .collection("post")
        .findOne({ _id: new ObjectId(req.body) });

      if (findEmail.author == session.user.email) {
        let result = await db
          .collection("post")
          .deleteOne({ _id: new ObjectId(req.body) });
      }
    }
  } else {
    return res.status(400).json("게시물올린 사람만 삭제할 수 있음");
  }
  return res.status(200).json("삭제완료");
};

export default deletehandler;
