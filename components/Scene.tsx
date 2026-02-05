
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Stars, MeshDistortMaterial, Sphere, PerspectiveCamera, Environment, Grid } from '@react-three/drei';
import * as THREE from 'three';
import { Section } from '../types';

// Define intrinsic elements as components to bypass JSX type errors in some environments
const Group = 'group' as any;
const Mesh = 'mesh' as any;
const OctahedronGeometry = 'octahedronGeometry' as any;
const AmbientLight = 'ambientLight' as any;
const PointLight = 'pointLight' as any;
const Fog = 'fog' as any;

const InteractiveBackground: React.FC<{ activeSection: Section }> = ({ activeSection }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const colors = useMemo(() => ({
    home: "#10b981",
    portfolio: "#3b82f6",
    about: "#a855f7",
    resume: "#eab308",
    contact: "#ef4444"
  }), []);

  const currentColor = colors[activeSection] || "#ffffff";

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Group>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {/* Primary Floating Object */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Mesh ref={meshRef} position={[2, 0, -2]}>
          <OctahedronGeometry args={[1.5, 0]} />
          <MeshDistortMaterial
            color={currentColor}
            speed={2}
            distort={0.4}
            radius={1}
            emissive={currentColor}
            emissiveIntensity={0.5}
            roughness={0}
            metalness={1}
          />
        </Mesh>
      </Float>

      {/* Atmospheric Spheres */}
      <Sphere args={[1, 16, 16]} position={[-3, 2, -5]}>
        <MeshDistortMaterial color="#ffffff" speed={1} distort={0.2} wireframe />
      </Sphere>
      
      <Sphere args={[0.5, 16, 16]} position={[4, -2, -3]}>
        <MeshDistortMaterial color={currentColor} speed={3} distort={0.5} wireframe opacity={0.2} transparent />
      </Sphere>

      <Grid 
        position={[0, -2, 0]} 
        infiniteGrid 
        fadeDistance={30} 
        fadeStrength={5} 
        cellSize={1} 
        sectionSize={5}
        sectionThickness={1.5}
        sectionColor={currentColor}
      />
      
      <AmbientLight intensity={0.5} />
      <PointLight position={[10, 10, 10]} intensity={1.5} color={currentColor} />
      <Environment preset="city" />
    </Group>
  );
};

interface SceneProps {
  activeSection: Section;
}

const Scene: React.FC<SceneProps> = ({ activeSection }) => {
  return (
    <Canvas className="w-full h-full bg-[#050505]" shadows dpr={[1, 2]}>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
      <OrbitControls 
        enablePan={false} 
        enableZoom={false} 
        maxPolarAngle={Math.PI / 2} 
        minPolarAngle={Math.PI / 3} 
      />
      
      <InteractiveBackground activeSection={activeSection} />
      
      {/* Dynamic Fog */}
      <Fog attach="fog" args={['#050505', 5, 15]} />
    </Canvas>
  );
};

export default Scene;
