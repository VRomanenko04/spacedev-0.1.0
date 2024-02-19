'use client'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import RobotR3F from '../RobotR3F/RobotR3F'
import { OrthographicCamera } from '@react-three/drei'


const Canvas3D = () => {
    return (
        <Canvas style={{ height: '100vh', width: '600px'}}>
            <OrthographicCamera makeDefault position={[-240, 0, 20]} zoom={30} />
            <RobotR3F />
        </Canvas>
    )
}

export default Canvas3D;