import React from "react";

const page = () => {
  return (
    <form action="/api/nowtime" method="GET">
      <button type="submit">현재시간확인하는 법</button>
    </form>
  );
};

export default page;
