import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useMotionValue, useSpring } from 'motion/react'

export function Dinosaur(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/animated_t-rex_dinosaur_biting_attack_loop.glb')
  const { actions } = useAnimations(animations, group)

  // Play the first animation when loaded
  useEffect(() => {
    if (animations.length > 0) {
      actions[animations[0].name]?.play()
    }
  }, [actions, animations])

  // Optional: Floating motion just like Astronaut
  const yPosition = useMotionValue(5)
  const ySpring = useSpring(yPosition, { damping: 30 })

  useEffect(() => {
    ySpring.set(-1)
  }, [ySpring])

  useFrame(() => {
    if (group.current) {
      group.current.position.y = ySpring.get()
    }
  })

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={[-Math.PI / 2, 0, 0]} // Adjust this if needed
      scale={props.scale || 0.3}
      position={props.position || [0, -1, 0]}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" scale={0.286}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="RootNode0_0" scale={0.01}>
                <group name="skeletal3_3">
                  <group name="GLTF_created_0">
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <skinnedMesh
                      name="Object_80"
                      geometry={nodes.Object_80.geometry}
                      material={materials.material_0}
                      skeleton={nodes.Object_80.skeleton}
                    />
                    <group name="TRex2_2_correction">
                      <group name="TRex2_2" />
                    </group>
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

useGLTF.preload('/models/animated_t-rex_dinosaur_biting_attack_loop.glb')
