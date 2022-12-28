import React, { useState } from "react";
import { FileDownloadLink, FileType } from "export-data";

export default function Home() {
  const [fileType, setFileType] = useState<FileType>("CSV");
  const [columnNames, setColumnNames] = useState<string>('["Name", "Age"]');
  const [rows, setRows] = useState<string>(`[
    ["John", 20],
    ["Mary", 24]
  ]`);
  const [filename, setFilename] = useState<string>("data");

  const [parsedData, setParsedData] = useState<{
    columnNames: (string | number)[];
    rows: (string | number)[][];
  }>({ columnNames: [], rows: [] });

  return (
    <>
      <h1>Export Data</h1>
      <div style={{ display: "flex", columnGap: 16 }}>
        <div>
          <h2>Download dynamic data</h2>
          <label htmlFor="columnNames">Column Names</label>
          <br />
          <textarea
            value={columnNames}
            onChange={(e) => setColumnNames(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="rows">Rows</label>
          <br />
          <textarea
            value={rows}
            rows={10}
            onChange={(e) => setRows(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="fileType">File type</label>
          <br />
          <select
            id="fileType"
            value={fileType}
            onChange={(e) => setFileType(e.target.value as FileType)}
          >
            <option value="CSV">CSV</option>
            <option value="JSON">JSON</option>
            <option value="TSV">TSV</option>
          </select>
          <br />
          <br />
          <label htmlFor="filename">Filename</label>
          <br />
          <input
            id="filename"
            type="text"
            value={filename}
            onChange={(e) => setFilename(e.target.value)}
          />
          <br />
          <br />
          <FileDownloadLink
            setsDataAsyncInOnClick
            columnNames={parsedData.columnNames}
            rows={parsedData.rows}
            filename={filename}
            fileType={fileType}
            onClick={() => {
              setParsedData({
                columnNames: JSON.parse(columnNames),
                rows: JSON.parse(rows),
              });
            }}
          >
            <button>Download dynamic data</button>
          </FileDownloadLink>
        </div>
        <div>
          <h2>Download static data</h2>
          <FileDownloadLink
            fileType="CSV"
            columnNames={["Fruit", "Price"]}
            filename="fruits"
            rows={[
              ["Apple", 1],
              ["Watermelon", 5],
              ["Durian", 10],
            ]}
          >
            Download static data
          </FileDownloadLink>
        </div>
      </div>
    </>
  );
}
