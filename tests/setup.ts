if (typeof window.URL.createObjectURL === "undefined") {
  Object.defineProperty(window.URL, "createObjectURL", {
    value: () => "https://www.example.com/1234-5678-9012-3456",
  });
}
