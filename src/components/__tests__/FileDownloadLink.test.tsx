import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import FileDownloadLink from "../FileDownloadLink";

describe("FileDownloadLink", () => {
  it("renders", () => {
    render(
      <FileDownloadLink
        columnNames={["foo", "bar"]}
        rows={[
          ["a", "b"],
          ["c", "d"],
        ]}
        fileType="CSV"
        filename="myFile.csv"
      >
        Download
      </FileDownloadLink>
    );

    expect(screen.getByText("Download")).toBeInTheDocument();
    const link = screen.getByText("Download").closest("a");
    expect(link).toHaveAttribute("download", "myFile.csv");
    expect(link).toHaveAttribute(
      "href",
      "https://www.example.com/1234-5678-9012-3456"
    );
  });
});
