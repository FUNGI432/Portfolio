import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Center } from '@react-three/drei';
import { EffectComposer, Bloom, Scanline, Noise, Vignette, ChromaticAberration } from '@react-three/postprocessing';
import * as THREE from 'three';

// Use the local asset via Vite resolver
import jeskoUrl from './assets/jesko.glb?url';

const NEON_GREEN = '#c0fe04';

function Car() {
  const { scene } = useGLTF(jeskoUrl);
  const carRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (carRef.current) {
      // Continuous slow rotation
      carRef.current.rotation.y += delta * 0.25;
      
      // Floating suspension effect
      carRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.08 - 0.2;
    }
  });

  return (
    <group ref={carRef}>
      <Center>
        <primitive object={scene} scale={0.3} />
      </Center>
    </group>
  );
}

export default function JeskoModel() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#000000', position: 'absolute', inset: 0, zIndex: 0 }}>
      {/* Ensure shadows and antialiasing are cranked up */}
      <Canvas camera={{ position: [3, 1.5, 4], fov: 45 }} gl={{ antialias: false }} shadows>
        <color attach="background" args={['#000000']} />
        
        {/* Core Base Global Light */}
        <ambientLight intensity={0.15} color="#ffffff" />
        
        {/* Neon Green Showroom Lights */}
        <spotLight 
          position={[0, 6, 0]} 
          angle={0.6} 
          penumbra={1} 
          intensity={3.5} 
          color={NEON_GREEN} 
          castShadow 
        />
        <pointLight position={[3, 1, 3]} intensity={2.5} color={NEON_GREEN} distance={8} />
        <pointLight position={[-3, 1, -3]} intensity={2.5} color={NEON_GREEN} distance={8} />
        
        {/* Environmental Reflection mapping to catch neon glimmers on the carbon fibre */}
        <Environment preset="night" environmentIntensity={0.3} />

        <Car />
        
        {/* CRT Vision Post-Processing Stack */}
        <EffectComposer>
          <Bloom luminanceThreshold={0.15} luminanceSmoothing={0.9} intensity={2.0} mipmapBlur />
          <Scanline density={2.2} opacity={0.25} />
          <Noise opacity={0.12} />
          <Vignette eskil={false} offset={0.15} darkness={1.1} />
          <ChromaticAberration offset={new THREE.Vector2(0.002, 0.002)} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

// Preload the model asset
useGLTF.preload(jeskoUrl);
