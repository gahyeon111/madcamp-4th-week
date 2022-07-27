/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: IR4jeckkkkkk (https://sketchfab.com/IR4jeckkkkkk)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/toothbrush5-2f4bd3002b2e456c99abee54b488967d
title: Toothbrush.5
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Toothbrush2(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/models/toothbrush.5/scene.gltf')
    return (
        <group scale={[0.01, 0.01, 0.01]} ref={group} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group position={[-59.28, -10.67, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial.geometry}
                            material={materials.material_3}
                        />
                    </group>
                    <group position={[-59.16, 67.69, -2.4]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial_1.geometry}
                            material={materials.material_2}
                        />
                    </group>
                    <group position={[-59.16, 67.69, -2.4]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial_2.geometry}
                            material={materials.material_1}
                        />
                    </group>
                    <group position={[-59.16, 67.69, -2.4]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial_3.geometry}
                            material={materials.material}
                        />
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/toothbrush.5/scene.gltf')