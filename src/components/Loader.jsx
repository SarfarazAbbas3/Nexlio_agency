import { useEffect, useState } from "react";

export default function Loader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader ${hide ? "loader-hide" : ""}`}>
      <h1>NEXLIO</h1>
    </div>
  );
}