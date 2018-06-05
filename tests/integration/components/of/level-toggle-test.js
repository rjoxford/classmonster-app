import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('of/level-toggle', 'Integration | Component | of/level toggle', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{of/level-toggle}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#of/level-toggle}}
      template block text
    {{/of/level-toggle}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
