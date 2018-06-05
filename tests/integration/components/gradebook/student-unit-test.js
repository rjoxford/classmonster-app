import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('gradebook/student-unit', 'Integration | Component | gradebook/student unit', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{gradebook/student-unit}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#gradebook/student-unit}}
      template block text
    {{/gradebook/student-unit}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
