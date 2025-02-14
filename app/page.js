"use client";
import { useEffect } from "react";
import ThreeDScene from "@/components/model";
import { Canvas } from "@react-three/fiber";
export default function Home() {
  return (
    <div className="w-full h-screen ">
      <Canvas>
        <ThreeDScene />
      </Canvas>
    </div>
  );
}
