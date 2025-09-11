"use client"

import { JSX, Suspense, useRef } from "react"
import * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, OrthographicCamera, Text3D } from "@react-three/drei"
import { EffectComposer, wrapEffect } from "@react-three/postprocessing"
import { Effect } from "postprocessing"
import fragmentShader from "./fragmentShader.glsl"

type RetroEffectProps = { colorNum?: number; pixelSize?: number }

class RetroEffectImpl extends Effect {
    private readonly _uniforms: Map<string, THREE.Uniform<number>>
    constructor({ colorNum = 8, pixelSize = 2 }: RetroEffectProps = {}) {
        const uniforms = new Map<string, THREE.Uniform<number>>([
            ["colorNum", new THREE.Uniform<number>(colorNum)],
            ["pixelSize", new THREE.Uniform<number>(pixelSize)],
        ])
        super("RetroEffect", fragmentShader, { uniforms })
        this._uniforms = uniforms
    }
    set colorNum(v: number) { this._uniforms.get("colorNum")!.value = v }
    get colorNum() { return this._uniforms.get("colorNum")!.value }
    set pixelSize(v: number) { this._uniforms.get("pixelSize")!.value = v }
    get pixelSize() { return this._uniforms.get("pixelSize")!.value }
}

const RetroEffect = wrapEffect(RetroEffectImpl)

function RotatingSpacedText() {
    const group = useRef<THREE.Group>(null)

    // Réglages fixes (sans Leva)
    const letters = "TUXAE".split("")
    const size = 1.4
    const height = 0.35
    const bevelSize = 0.02
    const bevelThickness = 0.02
    const spacing = 1.2 // moins d’espace qu’avant
    const step = spacing
    const centerOffset = ((letters.length - 1) * step) / 2 // centre géométrique

    useFrame((_, dt) => {
        if (!group.current) return
        group.current.rotation.y += 0.1 * dt // rotation continue autour de son centre
    })

    return (
        <group ref={group} position={[-0.1, -0.5, 0]}>
            {letters.map((ch, i) => (
                <Text3D
                    key={`${ch}-${i}`}
                    position={[i * step - centerOffset, 0, 0]}
                    size={size}
                    height={height}
                    bevelEnabled
                    bevelSize={bevelSize}
                    bevelThickness={bevelThickness}
                    bevelSegments={4}
                    castShadow
                    receiveShadow
                    font="/fonts/jersey.json"
                >
                    {ch}
                    <meshStandardMaterial color="#ac012a" />
                </Text3D>
            ))}
        </group>
    )
}

function Retro() {
    return (
        <>
            <RotatingSpacedText />
            <EffectComposer>
                <RetroEffect colorNum={4} pixelSize={2} />
            </EffectComposer>
        </>
    )
}

export default function Scene(): JSX.Element {
    return (
        <Canvas shadows dpr={[1, 2]}>
            <Suspense fallback={null}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[6, 10, 6]} intensity={6} castShadow />
                <color attach="background" args={["#000000"]} />
                <Retro />
                <OrbitControls />
                <OrthographicCamera
                    makeDefault
                    position={[6, 8, 10]}
                    zoom={150}
                    near={0.01}
                    far={500}
                />
            </Suspense>
        </Canvas>
    )
}
