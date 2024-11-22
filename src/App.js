import React from 'react'
import { Canvas } from '@react-three/fiber';
import "./style.css";
import { OrbitControls } from '@react-three/drei';
import Scene from './Scene';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
const App = () => {
  return (

    <Canvas flat camera={{ fov: 35 }}>
      <OrbitControls />
      <ambientLight />
      <Scene />
      <EffectComposer>
        <Bloom
          mipmapBlur
          intensity={10.0} // The bloom intensity.
          luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
        />
      </EffectComposer>
    </Canvas>

  );
};

export default App
