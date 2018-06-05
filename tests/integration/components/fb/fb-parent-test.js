import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fb/fb-parent', 'Integration | Component | fb/fb parent', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fb/fb-parent}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fb/fb-parent}}
      template block text
    {{/fb/fb-parent}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
