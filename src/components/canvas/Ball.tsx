import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../layout/Loader";

const Ball = (props: any) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          // @ts-expect-error
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas: React.FC<{ icon: string }> = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enablePan={false} enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;


// import React, { Suspense, useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import {
//   Decal,
//   Float,
//   OrbitControls,
//   Preload,
//   useTexture,
// } from "@react-three/drei";

// import CanvasLoader from "../layout/Loader";

// const Ball = ({ imgUrl }: { imgUrl: string }) => {
//   const [decal] = useTexture([imgUrl]);
//   const meshRef = useRef<any>();

//   // Optional subtle animation
//    useFrame(() => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y += 0.002; // 👈 slower
//     }
//   });

//   return (
//     <Float speed={2} rotationIntensity={2} floatIntensity={3}>
//       {/* Better Lighting */}
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[2, 2, 2]} intensity={1} />
//       <pointLight position={[0, 0, 2]} intensity={2} color="#00ffff" />

//       <mesh ref={meshRef} castShadow receiveShadow scale={2.8}>
//         {/* Smooth Sphere instead of rough shape */}
//         <sphereGeometry args={[1, 64, 64]} />

//         {/* Neon Glow Material */}
//         <meshStandardMaterial
//           color="#0f172a"
//           emissive="#00ffff"
//           emissiveIntensity={0.6}
//           roughness={0.3}
//           metalness={0.2}
//         />

//         {/* Logo / Icon */}
//         <Decal
//           position={[0, 0, 1]}
//           rotation={[2 * Math.PI, 0, 6.25]}
//           scale={1}
//           map={decal}
//         />
//       </mesh>
//     </Float>
//   );
// };

// const BallCanvas: React.FC<{ icon: string }> = ({ icon }) => {
//   return (
//     <Canvas
//       frameloop="always"
//       dpr={[1, 2]}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       {/* Dark background for neon effect */}
//       <color attach="background" args={["#020617"]} />

//       <Suspense fallback={<CanvasLoader />}>
//         {/* Auto rotate */}
//         <OrbitControls
//           enableZoom={false}
//           enablePan={false}
//           autoRotate
//           autoRotateSpeed={0.5}
//         />

//         <Ball imgUrl={icon} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default BallCanvas;


