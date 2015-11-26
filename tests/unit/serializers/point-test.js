import { moduleForModel, test } from 'ember-qunit';

moduleForModel('point', 'Unit | Serializer | point', {
  // Specify the other units that are required for this test.
  needs: ['serializer:point']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  var record = this.subject();

  var serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
