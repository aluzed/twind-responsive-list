import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

// Configuration du DOM fictif si nécessaire
if (typeof window === "undefined") {
  // @ts-expect-error-next-line
  global.window = {};
}

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    };
  };
