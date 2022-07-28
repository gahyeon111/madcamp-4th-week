/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Asia Matusik (https://sketchfab.com/asiam)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/pot-plant-dracena-c2207e3e18ba454f8ceb43f208d0927c
title: Pot plant - Dracena
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Plant2(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/models/pot_plant_-_dracena/scene.gltf')
    return (
        <group scale={[0.4, 0.4, 0.4]} ref={group} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2.geometry}
                    material={materials.dirt}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3.geometry}
                    material={materials.material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials.PLANT01}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={nodes.Object_5.material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6.geometry}
                    material={nodes.Object_6.material}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/pot_plant_-_dracena/scene.gltf')