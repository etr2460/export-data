# export-data

<span class="badge-npmversion"><a href="https://npmjs.org/package/export-data" title="View this project on NPM"><img src="https://img.shields.io/npm/v/export-data.svg" alt="NPM version" /></a></span>

Export data in React to CSV and other file formats

## Docs

### FileDownloadLink

#### Example

```typescript
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
  Download data
</FileDownloadLink>
```

#### Props

```typescript
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
   *  setsDataAsyncInOnClick to true.
   */
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  /** If the data is set asynchronously in onClick, then this must be set to true. */
  setsDataAsyncInOnClick?: boolean;
  /** The content for rendering the link. */
  children: React.ReactNode;
};
```
