"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

// Rockets always fly toward the top-right, matching the green-rocket image direction.
// They spawn randomly from the bottom edge OR the left edge of the screen.
const getSpawnPoint = (): { x: string; y: string } => {
  const fromBottom = Math.random() > 0.5;
  if (fromBottom) {
    // Somewhere along the bottom of the screen
    return {
      x: `${Math.random() * 90}vw`,
      y: "110vh",
    };
  } else {
    // Somewhere along the left side (lower 70% so it feels natural)
    return {
      x: "-15vw",
      y: `${30 + Math.random() * 70}vh`,
    };
  }
};

const NyanCat = () => {
  const [rockets, setRockets] = useState<{ id: string }[]>([]);

  const spawnRocket = () => {
    setRockets((prev) => [
      ...prev,
      { id: (Math.random() * 100000).toFixed() },
    ]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "u") spawnRocket();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div className="fixed left-0 top-0 w-screen h-screen pointer-events-none z-[-1]">
      {rockets.map((r) => (
        <AnimatedRocket
          key={r.id}
          id={r.id}
          onCompleted={() =>
            setRockets((prev) => prev.filter((x) => x.id !== r.id))
          }
        />
      ))}
    </div>
  );
};

const AnimatedRocket = ({
  id,
  onCompleted,
}: {
  id: string;
  onCompleted: () => void;
}) => {
  const controls = useAnimationControls();
  const [spawn, setSpawn] = useState<{ x: string; y: string } | null>(null);

  React.useEffect(() => {
    const spawnPoint = getSpawnPoint();
    setSpawn(spawnPoint);

    // Always exit top-right — off the right edge and above the top
    const timer = setTimeout(() => {
      controls.start({
        x: "120vw",
        y: "-20vh",
        transition: { duration: 8, ease: "linear" },
      });
    }, 50);

    return () => clearTimeout(timer);
  }, [controls]);

  if (!spawn) return null;

  return (
    <motion.div
      key={id}
      initial={{ x: spawn.x, y: spawn.y }}
      animate={controls}
      onAnimationComplete={onCompleted}
      style={{ position: "absolute", pointerEvents: "auto" }}
    >
      <img
        src="/assets/green-rocket.webp"
        style={{ height: "8rem", width: "auto" }}
        alt="Green Rocket"
      />
    </motion.div>
  );
};

export default NyanCat;
