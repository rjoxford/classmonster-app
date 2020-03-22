import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('color/objective-area-color', 'Integration | Component | color/objective area color', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{color/objective-area-color}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#color/objective-area-color}}
      template block text
    {{/color/objective-area-color}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
