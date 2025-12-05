import JestUiTestPage from "@/app/section23/23-02-jset-ui-test/page";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
it("내가 원하는대로 잘 그려지는지 확인하기", () => {
  render(<JestUiTestPage />);

  const myText = screen.getByText("철수는 13살 입니다.");
  expect(myText).toBeInTheDocument();

  const myText2 = screen.getByText("취미 입력:");
  expect(myText2).toBeInTheDocument();

  const myText3 = screen.getByText("등록하기");
  expect(myText3).toBeInTheDocument();
});
