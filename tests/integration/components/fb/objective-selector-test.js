import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fb/objective-selector', 'Integration | Component | fb/objective selector', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fb/objective-selector}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fb/objective-selector}}
      template block text
    {{/fb/objective-selector}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
