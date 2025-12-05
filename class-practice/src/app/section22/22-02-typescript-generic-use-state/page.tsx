//제공자

function useState<S>(초기값: S): [S, (변경값: S) => void] {
  let state = 초기값;

  const setState = (변경값) => {
    console.log(`현재카운트를 ${변경값}으로 바꾸겠습니다!@!@!@`);
  };
  return [state, setState];
}

//사용자

const [count, setCount] = useState(10);
const [writer, setWriter] = useState("지윤");
