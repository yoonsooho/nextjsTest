"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const DetailLink = () => {
  let router = useRouter();
  let pathname = usePathname();
  let SearchParams = useSearchParams();
  console.log(pathname);
  console.log(SearchParams);
  return (
    <button
      onClick={() => {
        router.back();
      }}
    >
      버튼
    </button>
  );
};

export default DetailLink;
