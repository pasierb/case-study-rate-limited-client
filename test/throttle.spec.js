import assert from 'assert';
import sinon from 'sinon';
import throttle from '../src/throttle';

describe('throttle', () => {
  let clock;

  beforeEach(() => {
    clock = sinon.useFakeTimers();
  });

  afterEach(() => {
    clock.restore();
  });

  it('should call when queue is empty', () => {
    const cb = sinon.fake();
    const q = throttle({ timeWindow: 10, maxRequests: 1 });

    q(cb);
    assert(cb.calledOnce);
  });

  it('should throttle subsequent calls', () => {
    const cb1 = sinon.fake();
    const cb2 = sinon.fake();
    const q = throttle({ timeWindow: 10, maxRequests: 1 });

    q(cb1);
    assert(cb1.calledOnce);
    q(cb2);;
    assert(!cb2.called);
    clock.tick(10);
    assert(!cb2.called);
    clock.tick(11)
    assert(cb2.calledOnce);
  });
});
