import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fb/feedback-sheet', 'Integration | Component | fb/feedback sheet', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fb/feedback-sheet}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fb/feedback-sheet}}
      template block text
    {{/fb/feedback-sheet}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
