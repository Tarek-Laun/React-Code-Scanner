import React, { useState, useRef } from "react";
import { BrowserMultiFormatReader, Result } from "@zxing/library";
import Webcam from "react-webcam";

function ReactCodeScanner(props: any) {
  const camref = useRef<Webcam>(null);

  var width = 1280;
  var height = 720;

  if (props.width != undefined) {
    width = props.width;
  }
  
  if (props.height != undefined) {
    height = props.height;
  }

  const videoConstraints = {
    width: width,
    height: height,
    facingMode: "environment"
  };

  const scan = async () => {
    console.log("Scan");
    const codeReader = new BrowserMultiFormatReader();
    const imagesrc = camref?.current?.getScreenshot();
    if (imagesrc) {
      codeReader.decodeFromImage(undefined, imagesrc).then((result) => {
        props.onScan(null, result);
      })
      .catch((error) => {
        props.onScan(error, null);
      });
    }
  };

  React.useEffect(() => {
    setInterval(scan, 1000);
  });

  return (
    <Webcam
    className={props.className}
    audio={false}
    height={height}
    width={width}
    ref={camref}
    screenshotFormat="image/jpeg"
    videoConstraints={videoConstraints}
    />
  );
}

export default ReactCodeScanner;
