import { defer } from 'rsvp';
import isPromise from 'ember-promise-utils/utils/is-promise';
import { module, test } from 'qunit';

module('Unit | Utility | is-promise', function() {

  test('RSVP Promise mixin is detected', function(assert) {
    assert.expect(1);

    let deferred = defer();

    assert.ok(isPromise(deferred.promise));
  });

  test('Duck typed promise is detected', function(assert) {
    assert.expect(1);

    let promise = { then() {}, catch() {} };

    assert.ok(isPromise(promise));
  });
});
