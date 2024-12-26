import React, { useEffect, useRef } from "react";
import QrCodeWithLogo from "qrcode-with-logos";
import { cn } from "../lib/utils";

interface QrCodeProps {
  url: string;
  width?: number;
  color?: string;
  dotsType?:
    | "dot"
    | "dot-small"
    | "tile"
    | "rounded"
    | "square"
    | "diamond"
    | "star"
    | "fluid"
    | "fluid-line"
    | "stripe"
    | "stripe-row"
    | "stripe-column";
  logo?: string;
  message?: string;
  className?: string;
  download?: boolean;
}

const QrCode: React.FC<QrCodeProps> = (props) => {
  const imgRef = useRef<HTMLImageElement | any>(undefined);
  const handelDownload = () => {
    if (!props.download) return;
    const a = document.createElement("a");
    a.href = imgRef.current.src;
    a.download = props.url.split("/").pop() || "qr-code.png";
    a.click();
  };
  useEffect(() => {
    //@ts-ignore
    const qr = new QrCodeWithLogo({
      content: props.url,
      width: props.width || 1080,
      image: imgRef.current,
      dotsOptions: {
        type: props.dotsType || "stripe-row",
        color: props.color || "black",
      },
      cornersOptions: {
        color: props.color || "black",
        type: "circle-rounded",
      },
      logo: {
        src: props.logo || "/vite.svg",
        borderRadius: 50,
      },
    });

    

  }, [props.url, props.width, props.dotsType, props.color, props.logo]);

  const className = props.className || "m-auto";

  return (
    <div
      className={cn(
        `${className} cursor-pointer flex justify-center items-center flex-col`,
      )}
    >
      <img
        onClick={handelDownload}
        src=""
        ref={imgRef}
        className="w-full rounded-xl h-full hover:scale-105 duration-300 aspect-square"
        alt="qr"
      />
      {props.message && <p className="text-gray-600 mt-2">{props.message}</p>}
    </div>
  );
};

export default QrCode;
