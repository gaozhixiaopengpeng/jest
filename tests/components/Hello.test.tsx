import React from "react";
import { render } from "@testing-library/react";
import Hello from "@/components/Hello";

describe("Hello", () => {
  it("渲染小字体", () => {
    const { getByText } = render(<Hello type="small" title="Hello Jest" />);
    const content = getByText("Hello Jest");
    expect(content).toMatchSnapshot();
  });

  it("渲染大字体", () => {
    const { getByText } = render(<Hello type="large" title="Hello React" />);
    const content = getByText("Hello React");
    expect(content).toMatchSnapshot();
  });
});

