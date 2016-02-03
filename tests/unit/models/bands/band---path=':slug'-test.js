import { moduleForModel, test } from 'ember-qunit';

moduleForModel('bands/band---path=':slug'', 'Unit | Model | bands/band   path=':slug'', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
