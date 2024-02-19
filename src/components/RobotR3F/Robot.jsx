'use client'

import React from 'react';
import { useGLTF } from '@react-three/drei';


export function RobotModel(props) {
  const { nodes, materials } = useGLTF('/robotspacedev-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.031, 0.224, 0.029]} scale={[0.563, 0.363, 0.928]}>
        <mesh geometry={nodes.Cube_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.Cube_2.geometry} material={materials['Material.001']} />
      </group>
      <mesh geometry={nodes.Circle.geometry} material={materials['Material.002']} position={[-0.126, 1.59, -0.687]} rotation={[Math.PI / 2, 0, 0]} scale={0.102} />
      <mesh geometry={nodes.Circle001.geometry} material={materials['Material.003']} position={[-0.126, 1.59, -0.666]} rotation={[Math.PI / 2, 0, 0]} scale={0.077} />
      <mesh geometry={nodes.Circle010.geometry} material={materials['Material.024']} position={[0, -1.087, 0]} scale={2.87} />
      <instancedMesh args={[nodes.Circle006.geometry, materials['Material.001'], 5]} instanceMatrix={nodes.Circle006.instanceMatrix} />
      <instancedMesh args={[nodes.Circle006_1.geometry, materials['Material.008'], 5]} instanceMatrix={nodes.Circle006_1.instanceMatrix} />
    </group>
  )
}

useGLTF.preload('/robotspacedev-transformed.glb');
