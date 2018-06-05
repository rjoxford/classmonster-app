import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('of/objective-finder', 'Integration | Component | of/objective finder', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{of/objective-finder}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#of/objective-finder}}
      template block text
    {{/of/objective-finder}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
