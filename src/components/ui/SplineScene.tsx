"use client";

import { Suspense, lazy, useRef, useEffect } from "react";
import type { Application } from "@splinetool/runtime";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
  active?: boolean;
}

export function SplineScene({ scene, className, active = true }: SplineSceneProps) {
  const appRef = useRef<Application | null>(null);

  function handleLoad(splineApp: Application) {
    appRef.current = splineApp;
    try {
      splineApp.renderOnDemand = true;
    } catch (err) {
      console.warn("Could not enable renderOnDemand:", err);
    }
    if (!active) splineApp.stop();
  }

  useEffect(() => {
    if (!appRef.current) return;
    active ? appRef.current.play() : appRef.current.stop();
  }, [active]);

  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-[var(--color-border)] border-t-[var(--color-accent-start)] animate-spin" />
        </div>
      }
    >
      <Spline scene={scene} className={className} onLoad={handleLoad} />
    </Suspense>
  );
}