import React, { useState, useEffect, useRef } from "react";
import { FileType } from "../types";
import { createDownloadUrl, dataToString } from "../utils";

export type FileDownloadLinkProps = {
  fileType: FileType;
  encoding?: string;
  columnNames: (string | number)[];
  rows: (string | number)[][];
  filename?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  setsDataAsyncInOnClick?: boolean;
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
  const [downloadOnDataChange, setDownloadOnDataChange] = useState(false);
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
    if (downloadOnDataChange) {
      downloadLink.current?.click();
      setDownloadOnDataChange(false);
    }
  }, [downloadUrl]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    /* The data url is already set, so this click is only to trigger the download */
    if (downloadOnDataChange) {
      return;
    }

    if (onClick) {
      onClick(e);
    }

    if (setsDataAsyncInOnClick) {
      e.preventDefault();
      setDownloadOnDataChange(true);
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
