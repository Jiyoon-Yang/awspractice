export default function MapFruitsPage() {
  //  1. 기본 예제
  const aaa = [
    <div key={1}>1 레드향</div>,
    <div key={2}>2 샤인머스켓</div>,
    <div key={3}>3 산청딸기</div>,
  ];
  // 2.실무 백엔드 데이터 예제
  const fetchFruits = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
  ];

  const bbb = fetchFruits.map((el) => (
    <div key={el.number}>
      {el.number} {el.title}
    </div>
  ));

  return (
    <div>
      <div> {aaa} </div>
      ================================
      <div> {bbb} </div>
      ================================
      <div>
        {fetchFruits.map((el) => (
          <div key={el.number}>
            {el.number} {el.title}
          </div>
        ))}
      </div>
    </div>
  );
}
