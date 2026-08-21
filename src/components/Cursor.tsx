import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const visibleRef = useRef(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.3 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!finePointer || reducedMotion) return;

    // Only hide system cursor after custom cursor is confirmed ready
    document.body.classList.add("custom-cursor-active");

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visibleRef.current) {
        visibleRef.current = true;
        setIsVisible(true);
      }

      const el = e.target as HTMLElement;
      const interactive = el.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor="pointer"]'
      );
      setIsPointer(!!interactive);
    };

    const handleDown = () => setIsPressed(true);
    const handleUp = () => setIsPressed(false);
    const handleLeave = () => {
      visibleRef.current = false;
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.removeEventListener("mouseleave", handleLeave);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [x, y]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
      style={{ x: springX, y: springY }}
      aria-hidden="true"
    >
      <motion.div
        className="rounded-full"
        animate={{
          width: isPressed ? 12 : isPointer ? 48 : 14,
          height: isPressed ? 12 : isPointer ? 48 : 14,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isPointer
            ? "rgba(183, 110, 121, 0.15)"
            : "rgba(183, 110, 121, 0.6)",
          border: isPointer
            ? "1px solid rgba(183, 110, 121, 0.5)"
            : "0px solid transparent",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        style={{
          x: "-50%",
          y: "-50%",
        }}
      />
    </motion.div>
  );
}
