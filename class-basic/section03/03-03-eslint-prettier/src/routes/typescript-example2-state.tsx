import { useState } from "react";

interface IProfile {
  name: string;
  age: number | string;
  school: string;
  hobby?: string;
}
const TypescriptExampleState = () => {
  //타입추론
  const [age, setAge] = useState(12);
  setAge("12살");
  //타입명시
  const [school, setSchool] = useState<string>("");

  //타입명시를 해야하는 상황

  const [profile, setProfile] = useState<IProfile>({
    name: "철수",
    age: 8,
    school: "다람쥐초등학교",
  });

  setProfile({
    age: "8살",
    school: "공룡초등학교",
    name: "훈이",
    hobby: "수영",
  });
  return <></>;
};
