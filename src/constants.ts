import { FileType, MimeType } from "./types";

export const FILE_TYPE_TO_MIME_TYPE: Record<FileType, MimeType> = {
  CSV: "text/csv",
  JSON: "application/json",
  TSV: "text/tab-separated-values",
};
