import { useEffect, useState } from "react";

const hexRegex = /^#[0-9A-F]{6}$/i;
const key = "chakra-colour-picker-hex";

export const usePersistedHex = (initialHex: string) => {
  const [colour, setColour] = useState(() => {
    const persistedHex = window.localStorage.getItem(key);
    const isValidHex = hexRegex.test(persistedHex || "");
    if (persistedHex && isValidHex) {
      return persistedHex;
    }
    return initialHex;
  });

  const isValid = hexRegex.test(colour);

  useEffect(() => {
    if (hexRegex.test(colour)) {
      window.localStorage.setItem(key, colour);
    }
  }, [colour]);

  return { colour, setColour, isValid } as const;
};
