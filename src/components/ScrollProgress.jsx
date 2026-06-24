import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const update = () => {
      const total =
        document.documentElement.scrollHeight -
        window.innerHeight;

      setScroll((window.scrollY / total) * 100);
    };

    window.addEventListener("scroll", update);
    return () =>
      window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${scroll}%`,
        height: "4px",
        background: "#00ff88",
        zIndex: 99999,
      }}
    />
  );
}