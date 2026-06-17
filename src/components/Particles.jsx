import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo } from "react";

export default function Particles() {
  const positions = useMemo(() => {
    const points = new Float32Array(3000);

    for (let i = 0; i < 3000; i++) {
      points[i] = (Math.random() - 0.5) * 10;
    }

    return points;
  }, []);

  return (
    <div className="particles-container">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <Points positions={positions} stride={3}>
          <PointMaterial
            transparent
            color="#4f46e5"
            size={0.03}
            sizeAttenuation
            depthWrite={false}
          />
        </Points>
      </Canvas>
    </div>
  );
}