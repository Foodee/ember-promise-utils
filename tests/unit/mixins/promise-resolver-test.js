import EmberObject from '@ember/object';
import PromiseResolverMixin from 'ember-promise-utils/mixins/promise-resolver';
import { module, test } from 'qunit';

module('Unit | Mixin | promise-resolver', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let PromiseResolverObject = EmberObject.extend(PromiseResolverMixin);
    let subject = PromiseResolverObject.create();
    assert.ok(subject);
  });
});
