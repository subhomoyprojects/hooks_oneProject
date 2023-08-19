import { useEffect, useState } from "react";

export default function UseEffect() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    // Mount
    window.addEventListener("resize", handleResize);
    // UnMount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to ensure cleanup is called only once

  return (
    <div>
      <h1>
        My Window Screen Size is <span style={{ color: "#f00" }}>{screenSize}</span>
      </h1>
    </div>
  );
}
