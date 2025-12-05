export interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

//1. Partial 타입 => 보통 수정하기에서 주로 사용됨
type aaa = Partial<IProfile>;

//2. Requierd 타입
type bbb = Required<IProfile>;

//3. Pick 타입
type ccc = Pick<IProfile, "name" | "age">;

//4. Omit 타입
type ddd = Omit<IProfile, "school">;

//5. 유틸리티타입 조합하기
type eee = Partial<Pick<IProfile, "name" | "age">>;

//6. Record 타입
type fff = "철수" | "영희" | "훈이"; // Union 타입
const child1: fff = "철수"; // 철수, 영희, 훈이만 됨
const child2: string = "사과"; // 철수, 영희, 훈이, 사과 다 됨

//7 . 객체의 key들로 Union타입 ㅌ만들기

type hhh = keyof IProfile;
const myProfile: hhh = "name";

//8. type vs interface 차이 => 핵심: interface 선언병합
export interface IProfile {
  candy: number;
}
//9. 배운것 적용하기
const profile: Partial<IProfile> = {
  candy: 10,
};
