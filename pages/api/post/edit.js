import { connectDB } from "@/Util/database";
import { ObjectId } from "mongodb";

const edit = async (req, res) => {
  if (rereqs.method == "DELETE") {
    let changeBody = { title: req.body.title, content: req.body.content };
    let db = (await connectDB).db("forum");
    let result = (await db)
      .collection("post")
      .updateOne({ _id: new ObjectId(req.body._id) }, { $set: changeBody });
  }
  res.status(200).redirect("/list");
};

export default edit;
