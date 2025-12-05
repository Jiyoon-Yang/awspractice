import { add } from "@/app/section23/23-01-jest/jiyoon";

it("더하기 잘 되는지 테스트 해보기", () => {
  const result = add(1, 3);
  expect(result).toBe(4);
});
