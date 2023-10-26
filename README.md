# React-Code-Scanner

React Code Scanner is a React Component to Scan QR and Barcodes.

## Installation

```bash
npm i react-code-scanner
```

## Example

```ts
import React, { useState, useRef } from "react";
import ReactCodeScanner from "reactcode";
import styles from "../styles/Home.module.css";

function Scan() {
  const [data, setData] = React.useState("Not Found");

  return (
    <>
      <ReactCodeScanner onScan={(error: any, output: any) => {
        if (!error) 
          setData(output.text);
      }}>
      </ReactCodeScanner>
      <p>{data}</p>
    </>
  );
}
export default Scan;
```

©Tarek Laun
