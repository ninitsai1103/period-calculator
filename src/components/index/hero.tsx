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
          width={500}
          height={500}
          style={{ width: '100%', height: '100%' }}
          alt="bg"
          className="object-cover"
        />
        <Image
          src={"/img/hero/billboard/spring.png"}
          width={250}
          height={250}
          style={{ width: 'auto', height: 'auto' }}
          alt="billboard"
          className="absolute -bottom-1 left-0"
        />
        <Image
          src={"/img/hero/plant/spring.png"}
          width={200}
          height={100}
          style={{ width: 'auto', height: 'auto' }}
          alt="plant"
          className="absolute -bottom-3 right-0"
        />
      </div>
    </>
  );
}
