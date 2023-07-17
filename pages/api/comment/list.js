import { connectDB } from "@/Util/database";
import { ObjectId } from "mongodb";

const handler = async (req, res) => {
  console.log(req.query);
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("comment")
    .find({ parent: new ObjectId(req.query.id) })
    .toArray();
  console.log(result);
  res.status(200).json(result);
};

export default handler;
