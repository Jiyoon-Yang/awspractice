//만약 컴포넌트 이름을 영어로 한다면 첫글자는 대문자로 시작할 것!!!! (진짜HTML의 input, div랑 헷갈림)

const 영희의인풋 = (훈이의props) => {
  console.log(훈이의props.철수가방);
  console.log(훈이의props.영희사과);
  console.log(훈이의props.직접전달);
  const 나만의초기메세지 = "비밀번호를 입력하세요.";

  //한줄은 소괄호 생략 가능
  //현재는 JSX(가짜HTML) => 어차피 바벨이 변수까지 다 합쳐서 진짜 HTML로 바꿔줌
  return <input type="text" placeholder={나만의초기메세지} />;
};
