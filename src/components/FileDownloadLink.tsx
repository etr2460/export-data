import React, { useState, useEffect, useRef } from "react";
import { useDeepCompareEffect } from "react-use";
import { FileType } from "../types";
import { createDownloadUrl, dataToString } from "../utils";

export type FileDownloadLinkProps = {
  /** The type of file to be exported. */
  fileType: FileType;
  /** The text encoding of the data, utf-8 by default. */
  encoding?: string;
  /** The data to download. Can be null if the data is set in onClick. */
  data: {
    columnNames: (string | number)[];
    rows: (string | number)[][];
  } | null;
  /** The filename for the exported file. */
  filename?: string;
  /** A function to be called when the link is clicked before the data is downloaded.
   *  If this function modifies the data to be downloaded, then you must set
   *  setsDataAsyncInOnClick to true.
   */
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  /** If the data is set asynchronously in onClick, then this must be set to true.
   *  Setting this to true will result in an automatic download of data at the next time
   *  the data changes.
   */
  setsDataAsyncInOnClick?: boolean;
  /** The content for rendering the link. */
  children: React.ReactNode;
};

const FileDownloadLink = ({
  fileType,
  encoding = "utf-8",
  filename = "data",
  data,
  onClick,
  setsDataAsyncInOnClick,
  children,
}: FileDownloadLinkProps) => {
  const [downloadUrl, setDownloadUrl] = useState<string>();
  const [downloadOnDataChange, setDownloadOnDataChange] = useState(false);
  const downloadLink = useRef<HTMLAnchorElement>(null);

  useDeepCompareEffect(() => {
    if (data) {
      setDownloadUrl(
        createDownloadUrl(
          dataToString(data.columnNames, data.rows, fileType),
          fileType,
          encoding
        )
      );
    }
  }, [data, fileType, encoding]);

  useEffect(() => {
    if (downloadOnDataChange) {
      downloadLink.current?.click();
      setDownloadOnDataChange(false);
    }
  }, [downloadUrl]);

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    /* The data url is already set, so this click is only to trigger the download */
    if (downloadOnDataChange) {
      return;
    }

    if (setsDataAsyncInOnClick) {
      e.preventDefault();
      setDownloadOnDataChange(true);
    }

    if (onClick) {
      await onClick(e);
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
