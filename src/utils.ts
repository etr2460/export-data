export type MimeType = "text/plain" | "text/csv" | "application/json";

export function createDownloadUrl(
  content: string,
  mimeType: MimeType = "text/plain",
  charset: string = "utf-8"
) {
  const blob = new Blob([content], { type: `${mimeType};charset=${charset}` });
  return URL.createObjectURL(blob);
}
