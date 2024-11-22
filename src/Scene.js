import React, { useRef } from 'react'
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Scene = () => {

    let tex = useTexture("../public/Main_image.png");
    let cyl = useRef(null);
    useFrame((state, delta) => {
        cyl.current.rotation.y += delta;
    });

    return (
        <group rotation={[0, 1.1, 0.3]}>
            <mesh ref={cyl} >
                <cylinderGeometry args={[1, 1, 1, 50, 50, true]} />
                <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
            </mesh>
        </group>

    )
}

export default Scene
