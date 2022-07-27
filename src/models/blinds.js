/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: James (https://sketchfab.com/james)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/window-blinds-883b037fccfd48d1910e1c1b799381c5
title: Window Blinds
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Blinds(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/models/window_blinds/scene.gltf')
    return (
        <group scale={[0.04, 0.04, 0.04]} ref={group} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group position={[80.69, -56.4, 9.9]} scale={[0.6, 0.6, 0.6]}>
                    <group position={[-25.46, 64.68, 34.38]} scale={[1.68, 1.68, 1.68]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_3.geometry}
                            material={materials.white_plas}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_4.geometry}
                            material={materials.white_fin_trans}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_5.geometry}
                            material={materials.thread}
                        />
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/window_blinds/scene.gltf')