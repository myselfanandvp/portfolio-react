import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Html } from "@react-three/drei";
import { useEffect, useRef, Suspense, useState, useMemo } from "react";
import * as THREE from "three";

function Model({ url, onCameraConfigured }) {
  const assetPath = useMemo(() => {
    const base = import.meta.env.BASE_URL || "/";
    const sanitizedBase = base.endsWith("/") ? base : `${base}/`;
    const sanitizedUrl = url.startsWith("/") ? url.slice(1) : url;
    return `${sanitizedBase}${sanitizedUrl}`;
  }, [url]);

  const { scene } = useGLTF(assetPath);
  const { camera } = useThree();

  useEffect(() => {
    if (!scene) return;

    scene.position.set(0, 0, 0);
    scene.scale.setScalar(1);

    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());

    scene.position.x -= center.x;
    scene.position.y -= center.y;
    scene.position.z -= center.z;

    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = camera.fov * (Math.PI / 180);
    let idealDistance = Math.abs(maxDim / 2 / Math.tan(fov / 2));

    idealDistance *= 1.4;

    camera.position.set(0, maxDim * 0.3, idealDistance);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();

    if (onCameraConfigured) {
      onCameraConfigured({
        min: idealDistance * 0.6,
        max: idealDistance * 2.0
      });
    }
  }, [scene, camera, onCameraConfigured]);

  return (
    <group>
      <primitive object={scene} />
    </group>
  );
}

function CanvasLoader() {
  return (
    <Html center>
      <div className="whitespace-nowrap text-slate-400 font-medium text-sm bg-slate-900/80 px-4 py-2 rounded-full backdrop-blur-sm shadow-lg border border-slate-700/50 select-none pointer-events-none animate-pulse">
        Loading 3D Workspace...
      </div>
    </Html>
  );
}

// Fixed Self-Correcting Viewport Wrapper Component
export default function ModelViewer({
  url = "table_with_a_laptop.glb",
  autoRotate = true
}) {
  const [zoomLimits, setZoomLimits] = useState({ min: 1, max: 20 });
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Monitor layout adjustments explicitly on load and forced renders
  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      }
    });

    resizeObserver.observe(containerRef.current);

    // Fallback: Force a manual resize dispatch safely after initial paint
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);

    return () => {
      resizeObserver.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative min-h-[350px] sm:min-h-[450px] lg:min-h-[550px]"
    >
      {/* Only mount canvas when container has definitive calculated DOM dimensions */}
      {dimensions.width > 0 && (
        <Canvas
          camera={{ fov: 45 }}
          gl={{ antialias: true, powerPreference: "high-performance" }}
        >
          <ambientLight intensity={1.2} />
          <directionalLight position={[10, 10, 10]} intensity={1.5} castShadow />

          <Suspense fallback={<CanvasLoader />}>
            <Model
              key={url}
              url={url}
              onCameraConfigured={setZoomLimits}
            />
          </Suspense>

          <Environment preset="studio" />

          <OrbitControls
            enablePan={false}
            enableZoom={true}
            makeDefault
            autoRotate={autoRotate}
            autoRotateSpeed={1.8}
            minDistance={zoomLimits.min}
            maxDistance={zoomLimits.max}
          />
        </Canvas>
      )}
    </div>
  );
}
