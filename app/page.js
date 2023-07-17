import { connectDB } from "@/Util/database";
import Link from "next/link";

export default async function Home() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);

  // await fetch("/URL", { cache: "force-cache" });
  return (
    <>
      <div>안녕</div>
      <Link href={"/list"}>리스트로 이동하기</Link>
      <Link href={"/write"}>글쓰기</Link>
    </>
  );
}
