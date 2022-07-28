import { Buffer } from "buffer";

window.global = window;
global.Buffer = Buffer;
global.process = {
  env: { DEBUG: undefined },
  version: "",
  nextTick: (callback, ...args) => Promise.resolve().then(() => callback(...args)),
};
