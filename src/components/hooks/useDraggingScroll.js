import { useEffect, useState } from "react";

const useDraggingScroll = (containerRef) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    if (containerRef.current) {
      setIsDragging(true);
      setStartX(e.clientX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    e.stopPropagation();
    if (containerRef.current) {
      const x = e.clientX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 1; // adjust scrolling speed
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDragging]);

  return {
    handleMouseDown,
    handleMouseUp,
    startX,
  };
};

export default useDraggingScroll;
