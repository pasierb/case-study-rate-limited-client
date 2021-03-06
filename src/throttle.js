export default function({ timeWindow, maxRequests }) {
  const q = [];

  return function enque(fn) {
    const now = Date.now();

    // clear queue from stuff older than timeWindow
    while (q.length && q[0] <= now - timeWindow) q.shift();

    const delay = q.length < maxRequests ? 0 : q[0] - (now - timeWindow);

    // call the function if possible
    if (!delay) return q.push(now) && fn();
    // otherwise reschedule at next possible execution time
    setTimeout(enque.bind(undefined, fn), delay+1);
  }
}
