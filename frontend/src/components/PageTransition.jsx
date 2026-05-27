import { motion } from "framer-motion";
function PageTransition({ children }) {
  return (
    <div
      className="relative w-full min-h-screen bg-slate-900 overflow-hidden"
      style={{
        // Perspective is crucial for the 3D depth effect
        perspective: "1200px"
      }}
    >
      {/* Background shadow overlay (subtle depth) */}
      <motion.div
        className="fixed inset-0 z-40 bg-black/30 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      />

      {/* 3D Rotating Card */}
      <motion.div
        className="w-full min-h-screen bg-slate-50 dark:bg-slate-950 shadow-2xl"
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "center center", // Flips from the middle
          backfaceVisibility: "hidden",      // Prevents seeing the inverted backside
          willChange: "transform, opacity"
        }}
        initial={{
          opacity: 0,
          rotateY: 90, // Starts perpendicular to the screen (invisible)
          scale: 0.9,
          filter: "brightness(0.5)"
        }}
        animate={{
          opacity: 1,
          rotateY: 0,  // Flips flat to face the user
          scale: 1,
          filter: "brightness(1)",
          transition: {
            duration: 0.6,
            ease: [0.25, 1, 0.5, 1] // Custom cubic-bezier for a smooth snap-in
          }
        }}
        exit={{
          opacity: 0,
          rotateY: -90, // Flips away in the opposite direction
          scale: 0.9,
          filter: "brightness(0.5)",
          transition: {
            duration: 0.5,
            ease: [0.5, 0, 0.75, 0]
          }
        }}
      >
        {children}
      </motion.div>

    </div>
  );
}

export default PageTransition;
