import JestUnitTestEventPage from "@/app/section23/23-03-jest-unit-test-event/page";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
it("버튼 눌렀을 때, 카운트 올라가는지 확인하기", () => {
  render(<JestUnitTestEventPage />);

  fireEvent.click(screen.getByRole("count-button"));
  expect(screen.getByRole("count")).toHaveTextContent("1");
});
