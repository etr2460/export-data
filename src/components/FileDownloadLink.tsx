import React, { useState, useEffect, useRef } from "react";
import { FileType } from "../types";
import { createDownloadUrl, dataToString } from "../utils";

export type FileDownloadLinkProps = {
  /** The type of file to be exported. */
  fileType: FileType;
  /** The text encoding of the data, utf-8 by default. */
  encoding?: string;
  /** The column names of the data. */
  columnNames: (string | number)[];
  /** The rows of the data. */
  rows: (string | number)[][];
  /** The filename for the exported file. */
  filename?: string;
  /** A function to be called when the link is clicked before the data is downloaded.
   *  If this function modifies the data to be downloaded, then you must set
   *  setsDataAsyncInOnClick to true and call the `download` function when complete.
   */
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>, download: () => void) => void;
  /** If the data is set asynchronously in onClick, then this must be set to true. */
  setsDataAsyncInOnClick?: boolean;
  /** The content for rendering the link. */
  children: React.ReactNode;
};

const FileDownloadLink = ({
  fileType,
  encoding = "utf-8",
  filename = "data",
  columnNames,
  rows,
  onClick,
  setsDataAsyncInOnClick,
  children,
}: FileDownloadLinkProps) => {
  const [downloadUrl, setDownloadUrl] = useState<string>();
  const [triggerDownload, setTriggerDownload] = useState(false);
  const downloadLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    setDownloadUrl(
      createDownloadUrl(
        dataToString(columnNames, rows, fileType),
        fileType,
        encoding
      )
    );
  }, [columnNames, rows, fileType, encoding]);

  useEffect(() => {
    if (triggerDownload) {
      downloadLink.current?.click();
      setTriggerDownload(false);
    }
  }, [triggerDownload]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    /* The data url is already set, so this click is only to trigger the download */
    if (triggerDownload) {
      return;
    }

    if (setsDataAsyncInOnClick) {
      e.preventDefault();
    }

    if (onClick) {
      onClick(e, () => setTriggerDownload(true));
    }
  };

  const filenameWithExtension = filename.endsWith(`.${fileType.toLowerCase()}`)
    ? filename
    : `${filename}.${fileType.toLowerCase()}`;

  return (
    <a
      href={downloadUrl}
      download={filenameWithExtension}
      onClick={handleClick}
      ref={downloadLink}
    >
      {children}
    </a>
  );
};

export default FileDownloadLink;
