export function throttle (fn, delay) {
  let previous = null;
  let now = null;

  return function (...args) {
    now = +new Date();

    if (now - previous > delay ) {
      previous = now;
      fn(...args);
    }

  }
};
