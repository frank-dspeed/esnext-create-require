/**
 * This is equal to  as pathToFileURL(__dirname)
 * when called with import.meta.url as argument
 * @param {string} url
 * @returns
 */
const getBase = (url = import.meta.url) =>
  url.substr(0, url.lastIndexOf('/') + 1);

const getWithBase = (fileName, base) =>
  new URL(fileName, getBase(base));

export const createRequire = (path) => {
  return (relativFileUrl) => getWithBase(path)
}
export async function require(path) {
  const _module = globalThis.module;
  const _exports = globalThis.exports;
  globalThis.module = { exports: {} };
  globalThis.exports = globalThis.module.exports;
  await import(path);
  const { exports } = globalThis.module;
  globalThis.module = _module;
  globalThis.exports = _exports;
  return exports;
}

require("https://cdn.jsdelivr.net/gh/x/lib/index.js");
