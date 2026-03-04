import { useState, useEffect } from "react";

function useStorageListener(sincronize) {
  const [storageChange, setStorageChange] = useState(false);

  useEffect(() => {
    const handler = (change) => {
      if (change.key === "TODOS_V2") setStorageChange(true);
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  const toggleShow = () => {
    sincronize();
    setStorageChange(false);
  };

  return { show: storageChange, toggleShow };
}

export { useStorageListener };
