"use client";

import { useState } from "react";
import Image from "next/image";

export default function Hero(): JSX.Element {
  const [cursorImage, setCursorImage] = useState<string>("");
  return (
    <>
      <div
        className="md:block hidden relative lg:flex-grow border-4 border-[#AB9182] rounded-md lg:ml-4 lg:mt-0 mt-4 ml-0"
        onMouseEnter={() => setCursorImage("/img/hero/cursor/spring.png")}
        onMouseLeave={() => setCursorImage("")}
        style={{ cursor: `url(${cursorImage}), auto` }}
      >
        <Image
          src={"/img/hero/bg/spring.jpg"}
          width={450}
          height={450}
          alt="bg"
          className="object-cover w-full h-full"
        />
        <Image
          src={"/img/hero/billboard/spring.png"}
          width={250}
          height={250}
          alt="billboard"
          className="absolute -bottom-1 left-0"
        />
        <Image
          src={"/img/hero/plant/spring.png"}
          width={200}
          height={100}
          alt="plant"
          className="absolute -bottom-3 right-0"
        />
      </div>
    </>
  );
}
