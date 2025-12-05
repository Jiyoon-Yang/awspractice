"use client";

import Box from "@/app/commons/components/13-01-props";

export default function PropsPage() {
  //1. props로 값 넘기기

  //     return (
  //     <>
  //       <div>===========위쪽은 페이지 영역=============</div>
  //       <Box apple={3} />
  //       <div>===========아래쪽은 페이지 영역=============</div>
  //     </>
  //   );
  // }

  //2. props로 jsx 넘기기
  //   return (
  //     <>
  //       <div>===========위쪽은 페이지 영역=============</div>
  //       <Box
  //         apple={
  //           <div>
  //             <input type="text" />
  //             <button>저장하세요</button>
  //           </div>
  //         }
  //       />
  //       <div>===========아래쪽은 페이지 영역=============</div>
  //     </>
  //   );
  // }

  //3. children로 첫번쨰 방식
  //   return (
  //     <>
  //       <div>===========위쪽은 페이지 영역=============</div>
  //       <Box
  //         children={
  //           <div>
  //             <input type="text" />
  //             <button>저장하세요</button>
  //           </div>
  //         }
  //       />
  //       <div>===========아래쪽은 페이지 영역=============</div>
  //     </>
  //   );
  // }

  //   //3. children로 첫번쨰 방식
  return (
    <>
      <div>===========위쪽은 페이지 영역=============</div>
      <Box
        children={
          <div>
            <input type="text" />
            <button>저장하세요</button>
          </div>
        }
      />
      <div>===========아래쪽은 페이지 영역=============</div>
    </>
  );
}

//4. children로 두번쨰 방식
//   return (
//     <>
//       <div>===========위쪽은 페이지 영역=============</div>
//       <Box>
//         <div>
//           <input type="text" />
//           <button>저장하세요</button>
//         </div>
//       </Box>
//       <div>===========아래쪽은 페이지 영역=============</div>
//     </>
//   );
// }
