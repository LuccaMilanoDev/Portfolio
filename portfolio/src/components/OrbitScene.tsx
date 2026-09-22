"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { Component, useEffect, useRef, type ReactNode } from "react";
import * as THREE from "three";
class SceneBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}
function Sculpture({ moving }: { moving: boolean }) {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);
  const rings = useRef<(THREE.Mesh | null)[]>([]);
  const satellite = useRef<THREE.Mesh>(null);
  const elapsed = useRef(0);
  const finePointer = useRef(false);
  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => {
      finePointer.current = query.matches;
    };
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  useFrame((state, delta) => {
    if (!moving || !group.current) return;
    const step = Math.min(delta, 0.05);
    elapsed.current += step;
    const time = elapsed.current;
    group.current.rotation.y += step * 0.3;
    group.current.rotation.z = -0.35 + Math.sin(time * 0.32) * 0.16;
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      0.25 + (finePointer.current ? state.pointer.y * 0.35 : 0),
      3,
      step,
    );
    group.current.position.x = THREE.MathUtils.damp(
      group.current.position.x,
      finePointer.current ? state.pointer.x * 0.16 : 0,
      3,
      step,
    );
    group.current.position.y = Math.sin(time * 0.8) * 0.12;
    rings.current.forEach((ring, i) => {
      if (!ring) return;
      ring.rotation.x = (i * Math.PI) / 3 + time * [0.2, -0.26, 0.16][i];
      ring.rotation.y = (i * Math.PI) / 3 + time * [-0.15, 0.18, -0.22][i];
    });
    if (core.current) {
      core.current.rotation.y -= step * 0.65;
      core.current.rotation.x += step * 0.2;
      core.current.scale.setScalar(1 + Math.sin(time * 1.25) * 0.045);
    }
    if (satellite.current)
      satellite.current.position.set(
        Math.cos(time * 0.85) * 1.93,
        Math.sin(time * 0.85) * 1.93,
        Math.sin(time * 0.5) * 0.3,
      );
  });
  return (
    <group ref={group} rotation={[0.25, -0.35, -0.35]}>
      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          ref={(mesh) => {
            rings.current[i] = mesh;
          }}
          rotation={[(i * Math.PI) / 3, (i * Math.PI) / 3, 0]}
        >
          <torusGeometry args={[1.62, 0.19, 32, 160]} />
          <meshPhysicalMaterial
            color="#9b9f92"
            metalness={1}
            roughness={0.19}
            clearcoat={1}
          />
        </mesh>
      ))}
      <mesh ref={core} rotation={[0.3, 0.4, 0.2]}>
        <icosahedronGeometry args={[0.72, 0]} />
        <meshPhysicalMaterial
          color="#d1fa63"
          metalness={0.35}
          roughness={0.2}
          clearcoat={1}
        />
      </mesh>
      <mesh ref={satellite} position={[1.93, 0, 0]}>
        <sphereGeometry args={[0.095, 24, 24]} />
        <meshBasicMaterial color="#d4ff70" />
      </mesh>
    </group>
  );
}
export default function OrbitScene({ moving }: { moving: boolean }) {
  const fallback = (
    <div className="orbit-fallback" aria-hidden="true">
      <span />
      <span />
      <span />
      <i />
    </div>
  );
  return (
    <SceneBoundary fallback={fallback}>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6.7], fov: 40 }}
        frameloop={moving ? "always" : "demand"}
        gl={{ antialias: true, alpha: true }}
        fallback={fallback}
        aria-label="Escultura tridimensional: três órbitas metálicas em torno de um núcleo verde"
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 4, 5]} intensity={3} color="#f0ffdc" />
        <pointLight position={[-3, -1, 2]} intensity={16} color="#b5dd60" />
        <Environment resolution={128}>
          <Lightformer intensity={5} position={[0, 4, 2]} scale={[8, 3, 1]} />
          <Lightformer
            intensity={3}
            position={[-4, 0, 1]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[5, 7, 1]}
          />
          <Lightformer
            intensity={2}
            color="#c9ed92"
            position={[3, -2, 1]}
            scale={[3, 6, 1]}
          />
        </Environment>
        <Sculpture moving={moving} />
      </Canvas>
    </SceneBoundary>
  );
}
