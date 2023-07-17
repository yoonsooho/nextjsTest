import { connectDB } from "@/Util/database";

export default async function handler(req, res) {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  if (req.method == "POST") {
    return res.status(200).json(
      result.map((item, i) => {
        return item;
      })
    );
  }
}
