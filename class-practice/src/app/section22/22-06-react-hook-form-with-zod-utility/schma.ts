import { CreateBoardInput } from "@/app/commons/graphql/graphql";
import z from "zod";

// 타입 O => 에디터에서 검사(빨간줄): 컴파일 시점
export interface ISchema extends Pick<CreateBoardInput, "title" | "contents"> {
  //1. hobby?: string  추가도 가능
  //2. 가급적이면 Omit보다 Pick을 쓰자! (Omit은 위험함)
}

// 타입 x => 브라우저 검사 (Validation): 런타임 시점
export const schema = z.object({
  title: z.string().min(1, { message: "제목을 입력해주세요." }),
  content: z.string().min(1, { message: "내용을 입력해주세요." }),

  // hobby: z.string().optional(),
  // email: z.string().email("이메일 형식에 적합하지 않습니다."),
  // password: z
  //   .string()
  //   .min(4, { message: "비밀번호는 최소 4자리 이상 입력해주세요." })
  //   .max(15, { message: "비밀번호는 최대 15자리까지 입력해주세요." }),
  // phone: z
  //   .string()
  //   .regex(/\d{3}-\d{3,4}-\d{4}-/, { message: "휴대폰 형식에 알맞지 않습니다." }),
});
