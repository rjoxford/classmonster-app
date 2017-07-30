import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('scores/objective-average-score', 'Integration | Component | scores/objective average score', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{scores/objective-average-score}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#scores/objective-average-score}}
      template block text
    {{/scores/objective-average-score}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
