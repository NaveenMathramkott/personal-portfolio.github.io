import { createStore } from "zustand/vanilla";

export const sizeStore = createStore(() => ({
  width: window.innerWidth,
  height: window.innerHeight,
  pixelRatio: Math.min(window.devicePixelRatio, 2),
}));

export const appStateStore = createStore(() => ({
  physicsReady: false,
  assetsReady: false,
}));

export const inputStore = createStore(() => ({
  forward: false,
  backward: false,
  right: false,
  left: false,
}));
