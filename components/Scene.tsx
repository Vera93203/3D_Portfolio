
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Float, Stars, MeshDistortMaterial, Sphere, PerspectiveCamera, Environment, Grid, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { Section } from '../types';

// Define intrinsic elements as components to bypass JSX type errors
const Group = 'group' as any;
const Mesh = 'mesh' as any;
const OctahedronGeometry = 'octahedronGeometry' as any;
const AmbientLight = 'ambientLight' as any;
const PointLight = 'pointLight' as any;
const Fog = 'fog' as any;

const ReactiveParticles: React.FC<{ color: string }> = ({ color }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const { mouse } = useThree();
  
  const particleCount = 2000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += 0.001;
    pointsRef.current.rotation.x += 0.0005;

    // Subtle parallax with mouse
    pointsRef.current.position.x = THREE.MathUtils.lerp(pointsRef.current.position.x, mouse.x * 0.5, 0.05);
    pointsRef.current.position.y = THREE.MathUtils.lerp(pointsRef.current.position.y, mouse.y * 0.5, 0.05);
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color={color}
        size={0.04}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

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
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />
      
      <ReactiveParticles color={currentColor} />
      
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
        fadeDistance={40} 
        fadeStrength={8} 
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
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
      <OrbitControls 
        enablePan={false} 
        enableZoom={false} 
        maxPolarAngle={Math.PI / 1.8} 
        minPolarAngle={Math.PI / 2.2} 
      />
      
      <InteractiveBackground activeSection={activeSection} />
      
      {/* Dynamic Fog */}
      <Fog attach="fog" args={['#050505', 10, 25]} />
    </Canvas>
  );
};

export default Scene;
