import * as React from "react";
import "./styles.css";
import useFetchProductsFile from "./useFetchFile";
import * as R from "ramda";

export default function App() {
  // @ts-ignore
  const { useState, useEffect, createRef } = React;
  // @ts-ignore
  const [ref, setRef] = useState(createRef());
  const { fileResponse, fileLoading, fileRefetch } = useFetchProductsFile(
    "/csv/Sample-Spreadsheet-10-rows.csv"
  );

  useEffect(() => {
    if (R.not(R.isNil(fileResponse))) {
      try {
        ref.current.href = URL.createObjectURL(new Blob([fileResponse.data]));
        ref.current.setAttribute("download", "Burberry-DFT.csv");
        ref.current.click();
      } catch (e) {
        console.log(e);
      }
    }
  }, [fileLoading, fileResponse, ref]);

  return (
    <div>
      <a style={{ display: "none" }} href="empty" ref={ref}></a>
      <img
        src="file-download.png"
        alt="Download"
        onClick={() => fileRefetch()}
      />
    </div>
  );
}
