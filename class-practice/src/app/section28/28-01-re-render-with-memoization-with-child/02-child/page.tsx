// "use client";

// import { memo } from "react";

// export default memo(function ChildPage() {
//   console.log("자식이 리렌더");

//   return (
//     <div>
//       <div>=========================</div>
//       <h1>여기는 자식컴포임</h1>
//       <div>=========================</div>
//     </div>
//   );
// });

"use client";

import { memo } from "react";

function ChildPage() {
  console.log("자식이 리렌더");

  return (
    <div>
      <div>=========================</div>
      <h1>여기는 자식컴포임</h1>
      <div>=========================</div>
    </div>
  );
}
export default memo(ChildPage);
