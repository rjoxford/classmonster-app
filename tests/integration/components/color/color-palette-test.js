import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('color/color-palette', 'Integration | Component | color/color palette', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{color/color-palette}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#color/color-palette}}
      template block text
    {{/color/color-palette}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
