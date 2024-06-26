import isPromise from "./is-promise"
import isFulfilled from "./is-fulfilled"
import getPromiseContent from "./get-promise-content"

/**
 * Returns the resolved data from a promise, if it has been resolved,
 * or it returns the promise itself
 *
 * @param maybePromise
 * @returns {Promise | Object} the promise itself, or it's data, if fulfilled
 */
export default function smartResolve(maybePromise) {
  if (!isPromise(maybePromise)) {
    // Not a promise, return value
    return maybePromise
  }

  if (!isFulfilled(maybePromise)) {
    // Promise is still pending, return promise
    return maybePromise
  }

  // Try to unwrap promise and get content;
  return getPromiseContent(maybePromise)
}
