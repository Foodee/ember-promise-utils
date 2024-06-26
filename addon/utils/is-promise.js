/**
 * Check if given object is promise or not
 * @param maybePromise
 * @returns {boolean} whether it is a promise
 */
export default function isPromise(maybePromise) {
  return maybePromise != null && typeof maybePromise.then === "function"
}
