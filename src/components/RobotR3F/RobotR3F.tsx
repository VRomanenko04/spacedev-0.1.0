'use client'
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'
import { RobotModel } from './Robot';
import { OrbitControls } from '@react-three/drei';


const RobotR3F = () => {
    const ref: any = useRef();

    useFrame((_state, delta) => {
        ref.current.rotation.y += delta / 3
    })
    
    return (
        <mesh scale={5} ref={ref}>
            <RobotModel />
            <pointLight position={[2, 2, 2]} intensity={300}/>
            <ambientLight intensity={1.5}/>
            <OrbitControls 
                enableZoom={false} 
                maxPolarAngle={-Math.PI / 2}
                minPolarAngle={Math.PI / 2}
            />
        </mesh>
    )
}

export default RobotR3F;