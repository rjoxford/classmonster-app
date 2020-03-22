import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('assessment/student-assessment-row', 'Integration | Component | assessment/student assessment row', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{assessment/student-assessment-row}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#assessment/student-assessment-row}}
      template block text
    {{/assessment/student-assessment-row}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
