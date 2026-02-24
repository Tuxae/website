"use client"

import { JSX, Suspense, useRef, useMemo, useState } from "react"
import * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text3D, Center, Float, Stars } from "@react-three/drei"
import { EffectComposer, Bloom, ChromaticAberration, Noise, Glitch } from "@react-three/postprocessing"
import { Vector2 } from "three"

function SingleLetter({ char, position }: { char: string, position: [number, number, number] }) {
    const materialRef = useRef<THREE.MeshStandardMaterial>(null)
    const [isRed, setIsRed] = useState(false)
    const nextGlitchTime = useRef(0)

    useFrame((state) => {
        if (!materialRef.current) return

        const time = state.clock.elapsedTime

        if (time > nextGlitchTime.current) {
            // Determine if we should glitch
            // Decreased frequency: 10% chance to glitch
            if (Math.random() > 0.9) { 
                setIsRed(true)
                // Short duration for red: 0.05s to 0.25s
                nextGlitchTime.current = time + 0.05 + Math.random() * 0.2 
            } else {
                setIsRed(false)
                // Wait time before next potential glitch: 0.5s to 2.0s
                nextGlitchTime.current = time + 0.5 + Math.random() * 1.5 
            }
        }

        if (isRed) {
            materialRef.current.color.set("#d30b1f")
            materialRef.current.emissive.set("#d30b1f")
        } else {
            // Smoothly return to white
            materialRef.current.color.lerp(new THREE.Color("#ffffff"), 0.2)
            materialRef.current.emissive.lerp(new THREE.Color("#ffffff"), 0.2)
        }
    })

    return (
        <Text3D
            font="/fonts/jersey.json"
            size={3.5}
            height={0.5}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.1}
            bevelSize={0.05}
            bevelOffset={0}
            bevelSegments={5}
            position={position}
        >
            {char}
            <meshStandardMaterial
                ref={materialRef}
                color="#ffffff"
                emissive="#ffffff"
                emissiveIntensity={0.5}
                roughness={0.1}
                metalness={0.8}
            />
        </Text3D>
    )
}

function AnimatedText() {
    const group = useRef<THREE.Group>(null)
    const letters = "TUXAE".split("")
    // Calculate total width to center the text manually
    // Each letter is roughly 2.5 units wide including spacing
    const spacing = 2.8 
    const totalWidth = (letters.length - 1) * spacing

    useFrame((state) => {
        if (group.current) {
            // Gentle floating rotation
            group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
            group.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.2) * 0.05
        }
    })

    return (
        <group ref={group}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <Center>
                    <group>
                        {letters.map((char, index) => (
                            <SingleLetter 
                                key={index} 
                                char={char} 
                                position={[index * spacing - totalWidth / 2, 0, 0]} 
                            />
                        ))}
                    </group>
                </Center>
            </Float>
        </group>
    )
}

function Particles() {
    const count = 200
    const mesh = useRef<THREE.InstancedMesh>(null)
    
    const dummy = useMemo(() => new THREE.Object3D(), [])
    const particles = useMemo(() => {
        const temp = []
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100
            const factor = 20 + Math.random() * 100
            const speed = 0.01 + Math.random() / 200
            const xFactor = -50 + Math.random() * 100
            const yFactor = -50 + Math.random() * 100
            const zFactor = -50 + Math.random() * 100
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
        }
        return temp
    }, [count])

    useFrame((state) => {
        if (!mesh.current) return
        
        particles.forEach((particle, i) => {
            let { t, factor, speed, xFactor, yFactor, zFactor } = particle
            t = particle.t += speed / 2
            const a = Math.cos(t) + Math.sin(t * 1) / 10
            const b = Math.sin(t) + Math.cos(t * 2) / 10
            const s = Math.cos(t)
            
            dummy.position.set(
                (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
                (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
                (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
            )
            dummy.scale.set(s, s, s)
            dummy.rotation.set(s * 5, s * 5, s * 5)
            dummy.updateMatrix()
            mesh.current!.setMatrixAt(i, dummy.matrix)
        })
        mesh.current.instanceMatrix.needsUpdate = true
    })

    return (
        <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
            <dodecahedronGeometry args={[0.2, 0]} />
            <meshPhongMaterial color="#d30b1f" emissive="#d30b1f" emissiveIntensity={0.5} />
        </instancedMesh>
    )
}

function GridFloor() {
    const gridRef = useRef<THREE.Mesh>(null)
    
    useFrame((state) => {
        if (gridRef.current) {
            // Infinite scroll effect
            // Modulo 1 corresponds to the segment size (100/100 = 1)
            gridRef.current.position.z = (state.clock.elapsedTime * 5) % 1
        }
    })

    return (
        <mesh ref={gridRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
            <planeGeometry args={[100, 100, 100, 100]} />
            <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.1} />
        </mesh>
    )
}

export default function Scene(): JSX.Element {
    return (
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 45 }}>
            <Suspense fallback={null}>
                <color attach="background" args={["#000000"]} />
                <fog attach="fog" args={["#000000", 10, 40]} />
                
                {/* Lighting */}
                <ambientLight intensity={1.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={2} color="#d30b1f" />
                <directionalLight position={[0, 0, 5]} intensity={2} color="#ffcccc" />
                
                {/* Content */}
                <AnimatedText />
                <Particles />
                <GridFloor />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                
                {/* Post Processing */}
                <EffectComposer disableNormalPass>
                    <Bloom luminanceThreshold={0.2} mipmapBlur intensity={1.5} radius={0.5} />
                    <ChromaticAberration offset={new Vector2(0.0005, 0.0005)} />
                    <Noise opacity={0.05} />
                    <Glitch 
                        delay={new Vector2(1.5, 3.5)} 
                        duration={new Vector2(0.1, 0.3)} 
                        strength={new Vector2(0.1, 0.2)} 
                        mode={1} // SPORADIC
                        active 
                        ratio={0.85} 
                    />
                </EffectComposer>
            </Suspense>
        </Canvas>
    )
}
