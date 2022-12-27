import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import FileDownloadLink from "../FileDownloadLink";

describe("FileDownloadLink", () => {
  it("renders", () => {
    render(<FileDownloadLink />);
    expect(screen.getByText("File download link")).toBeInTheDocument();
  });
});
