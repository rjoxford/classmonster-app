import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('assessment/assessment-question-row', 'Integration | Component | assessment/assessment question row', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{assessment/assessment-question-row}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#assessment/assessment-question-row}}
      template block text
    {{/assessment/assessment-question-row}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
