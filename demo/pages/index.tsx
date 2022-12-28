import React, { useState } from "react";
import { FileDownloadLink, FileType } from "export-data";

export default function Home() {
  const [fileType, setFileType] = useState<FileType>("CSV");
  const [columnNames, setColumnNames] = useState<string>("['Name', 'Age']");
  const [rows, setRows] = useState<string>(`[
    ['John', 20],
    ['Mary', 24],
  ]`);
  const [filename, setFilename] = useState<string>("data");

  const [parsedData, setParsedData] = useState<{
    columnNames: (string | number)[];
    rows: (string | number)[][];
  }>({ columnNames: [], rows: [] });

  return (
    <div>
      <h1>Export Data</h1>
      <label htmlFor="columnNames">Column Names</label>
      <textarea
        value={columnNames}
        onChange={(e) => setColumnNames(e.target.value)}
      />
      <br />
      <label htmlFor="rows">Rows</label>
      <textarea value={rows} onChange={(e) => setRows(e.target.value)} />
      <br />

      <label htmlFor="fileType">File type</label>
      <select
        id="fileType"
        defaultValue="CSV"
        value={fileType}
        onChange={(e) => setFileType(e.target.value as FileType)}
      >
        <option value="CSV">CSV</option>
        <option value="JSON">JSON</option>
        <option value="TSV">TSV</option>
      </select>
      <br />
      <label htmlFor="filename">Filename</label>
      <input
        id="filename"
        type="text"
        value={filename}
        onChange={(e) => setFilename(e.target.value)}
      />
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
        <button>Download file</button>
      </FileDownloadLink>
    </div>
  );
}
