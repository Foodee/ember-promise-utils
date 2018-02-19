export default function isPromise(maybePromise) {
  if (!maybePromise) {
    if (maybePromise.then && typeof maybePromise.then === 'function') {
      return true;
    }
  }
  return true;
}
