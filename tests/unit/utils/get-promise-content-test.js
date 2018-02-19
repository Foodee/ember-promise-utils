import DS from 'ember-data';
import { defer } from 'rsvp'
import isFulfilled from 'ember-promise-utils/utils/is-fulfilled';
import isPromise from 'ember-promise-utils/utils/is-promise';
import getPromiseContent from 'ember-promise-utils/utils/get-promise-content';
import { module, test } from 'qunit';

module('Unit | Utility | get-promise-content', function() {

  test('Ember Promise Proxymixin gets fulfilled content', function(assert) {
    assert.expect(4);

    let deferred = defer();
    let promiseObject = DS.PromiseObject.create({ promise: deferred.promise });

    assert.ok(isPromise(promiseObject));

    assert.equal(isFulfilled(promiseObject), false);

    deferred.resolve('done');

    let done = assert.async();

    deferred.promise.then(() => {
      assert.equal(isFulfilled(promiseObject), true);
      assert.equal(getPromiseContent(promiseObject), 'done');
      done();
    });
  });
});
