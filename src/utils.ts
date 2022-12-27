import { FILE_TYPE_TO_MIME_TYPE } from "./constants";
import { FileType } from "./types";

export function formatItemForCsvOrTsv(item: string | number) {
  return `"${String(item).replace(/"/g, '""')}"`;
}

export function createDownloadUrl(
  data: string,
  fileType: FileType,
  charset: string
) {
  const blob = new Blob([data], {
    type: `${FILE_TYPE_TO_MIME_TYPE[fileType]};charset=${charset}`,
  });
  return URL.createObjectURL(blob);
}

export function dataToString(
  columnNames: (string | number)[],
  rows: (string | number)[][],
  fileType: FileType
) {
  if (fileType === "JSON") {
    return JSON.stringify({ columnNames, rows }, null, 2);
  } else if (fileType === "CSV" || fileType === "TSV") {
    const separator = fileType === "CSV" ? "," : "\t";

    const columnNamesString = columnNames
      .map(formatItemForCsvOrTsv)
      .join(separator);
    const rowsString = rows
      .map((row) => row.map(formatItemForCsvOrTsv).join(separator))
      .join("\n");
    return [columnNamesString, rowsString].join("\n");
  }

  throw new Error(`Unknown file type: ${fileType}`);
}
