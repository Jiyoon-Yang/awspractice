const 영희의인풋 = () => {
  const 나만의초기메세지 = "비밀번호를 입력하세요.";

  //한줄은 소괄호 생략 가능
  //현재는 JSX(가짜HTML) => 어차피 바벨이 변수까지 다 합쳐서 진짜 HTML로 바꿔줌
  return <input type="text" placeholder={나만의초기메세지} />;
};
