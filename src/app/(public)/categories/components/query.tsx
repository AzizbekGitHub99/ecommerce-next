"use client";

import { useRouter, useSearchParams } from "next/navigation";

const Query = () => {
  const router = useRouter();
  const params = useSearchParams();
  console.log(params.get('page'));
  console.log(params.get('limit'));
  
  return (
    <div>
      <button onClick={() => router.push("?page=1&limit=10")}>Push</button>
    </div>
  );
};

export default Query;
