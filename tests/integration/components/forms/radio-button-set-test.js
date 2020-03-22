import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('forms/radio-button-set', 'Integration | Component | forms/radio button set', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{forms/radio-button-set}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#forms/radio-button-set}}
      template block text
    {{/forms/radio-button-set}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
