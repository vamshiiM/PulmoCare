import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";

const LungsModel = () => {
  const { scene } = useGLTF("./src/models/lung2.glb");
  const lungRef = useRef();

  useFrame(({ clock }) => {
    lungRef.current.rotation.y += 0.002;
  });

  return <primitive object={scene} scale={15} position={[0, -2, 0]} ref={lungRef} />;
};

export default function LandingPage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white p-10">
      {/* Left Section: 3D Model */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-1/2 h-full flex items-center justify-center"
      >
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 3, 3]} intensity={1.5} />
          <Suspense fallback={null}>
            <LungsModel />
          </Suspense>
          <OrbitControls enableZoom={true} enablePan={false} enableRotate={true} />
        </Canvas>
      </motion.div>

      {/* Right Section: Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-1/2 h-full flex flex-col justify-center p-10 space-y-6"
      >
        <h1 className="text-6xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-300">
          Welcome to Pulmocare
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          The human lungs are essential respiratory organs that facilitate the exchange of oxygen and carbon dioxide. They play a vital role in supplying oxygen to the bloodstream and expelling waste gases from the body.
        </p>
        <p className="text-lg text-gray-400 leading-relaxed">
          Understanding lung anatomy helps us appreciate how crucial healthy lungs are for overall well-being. Explore this interactive 3D model to learn more about lung function and structure.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg transition"
        >
          Explore More
        </motion.button>
      </motion.div>
    </div>
  );
}
