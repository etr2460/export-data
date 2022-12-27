import { formatItemForCsvOrTsv, dataToString } from "../utils";

describe("formatItemForCsvOrTsv", () => {
  it("should wrap in double quotes", () => {
    expect(formatItemForCsvOrTsv("foobar")).toBe('"foobar"');
  });

  it("should escape double quotes", () => {
    expect(formatItemForCsvOrTsv('foo"bar')).toBe('"foo""bar"');
  });

  it("should work with commas and tabs", () => {
    expect(formatItemForCsvOrTsv("foo,bar")).toBe('"foo,bar"');
    expect(formatItemForCsvOrTsv("foo\tbar")).toBe('"foo\tbar"');
  });

  it("should work with empty strings", () => {
    expect(formatItemForCsvOrTsv("")).toBe('""');
  });

  it("should work with numbers", () => {
    expect(formatItemForCsvOrTsv(123)).toBe('"123"');
  });
});

describe("dataToString", () => {
  it("should format JSON", () => {
    expect(
      dataToString(
        ["foo", "bar"],
        [
          ["a", 1],
          ["c", 2],
        ],
        "JSON"
      )
    ).toBe(
      `{
  "columnNames": [
    "foo",
    "bar"
  ],
  "rows": [
    [
      "a",
      1
    ],
    [
      "c",
      2
    ]
  ]
}`
    );
  });

  it("should format CSV", () => {
    expect(
      dataToString(
        ["foo", "bar"],
        [
          ["a", 1],
          ["c", 2],
        ],
        "CSV"
      )
    ).toBe(
      `"foo","bar"
"a","1"
"c","2"`
    );
  });

  it("should format TSV", () => {
    expect(
      dataToString(
        ["foo", "bar"],
        [
          ["a", 1],
          ["c", 2],
        ],
        "TSV"
      )
    ).toBe(
      `"foo"\t"bar"
"a"\t"1"
"c"\t"2"`
    );
  });
});
