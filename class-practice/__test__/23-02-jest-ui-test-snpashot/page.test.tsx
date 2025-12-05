import JestUiTestPage from "@/app/section23/23-02-jset-ui-test-snapshot/page";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
it("내가 원하는대로 잘 그려지는지 확인하기", () => {
  const result = render(<JestUiTestPage />);
  expect(result.container).toMatchSnapshot();
});
