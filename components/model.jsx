import {
  Bounds,
  OrbitControls,
  Stars,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";

export default function ThreeDScene() {
  const starRef = useRef();
  const modelRef = useRef();

  useFrame(() => {
    starRef.current.rotation.x += 0.0001;
    starRef.current.rotation.y += 0.0001;
    starRef.current.rotation.z += 0.0001;
  });

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y -= 0.003;
    }
  });

  const [earthTexture] = useTexture(["/8k_jupiter.jpg"]);
  return (
    <>
      <color attach="background" args={["black"]} />
      <Stars ref={starRef} />
      <OrbitControls />

      <mesh ref={modelRef} scale={1.3}>
        <sphereGeometry args={[1, 50, 50]} />
        <meshStandardMaterial map={earthTexture} />
        <ambientLight />
      </mesh>
    </>
  );
}
