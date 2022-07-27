/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: sara3dbear (https://sketchfab.com/sara3dbear)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/il-gele-shampoo-2b4ac2c020c7437ea7149ea53d2786dd
title: Il Gele Shampoo
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Shampoo2(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/models/il_gele_shampoo/scene.gltf')
    return (
        <group scale={[0.008, 0.008, 0.008]} ref={group} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <group rotation={[Math.PI / 2, 0, 0]}>
                            <group position={[0.31, 76.6, -0.01]} rotation={[-Math.PI / 2, 0, 0]}>
                                <group
                                    position={[26.75, 0, 47.6]}
                                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                                    scale={[1, 1, 1]}>
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_10.geometry}
                                        material={materials['03_-_Default']}
                                    />
                                </group>
                                <group position={[0, 0, -76.6]}>
                                    <mesh
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_13.geometry}
                                        material={materials['01_-_Default']}
                                    />
                                </group>
                                <group
                                    position={[0, 0, 62.05]}
                                    rotation={[0, 0, -Math.PI / 4]}
                                    scale={[0.94, 0.94, 0.7]}>
                                    <group position={[0, 0, -38.31]}>
                                        <mesh
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.Object_17.geometry}
                                            material={materials['04_-_Default']}
                                        />
                                    </group>
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/il_gele_shampoo/scene.gltf')