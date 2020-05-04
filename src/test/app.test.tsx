import App from "../components/home";
import * as React from "react";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

describe("<App />", () => {
  it("should display a page with the header", async () => {
    const { findByText } = render(<App />);
    const component = await findByText("Hello chloe");

    expect(component).toBeTruthy;
  });
});
