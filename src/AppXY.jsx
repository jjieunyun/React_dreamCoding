import React from "react";
import { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  //서로연관있는 데이터는 객체로 묶어서 관리
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      className="container"
      onPointerMove={(e) => {
        //만약 수평으로만 이동이 가능하다면?
        // setPosition({ x: e.clientX, y: e.clientY });
        setPosition((prev) => ({ ...prev, x: e.clientX }));
        // setPosition((prev) => ({ x: e.clientX, y: prev.y }));
      }}
    >
      <div
        className="pointer"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />
    </div>
  );
}
