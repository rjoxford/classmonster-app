import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('planner/year-gridunit', 'Integration | Component | planner/year gridunit', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{planner/year-gridunit}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#planner/year-gridunit}}
      template block text
    {{/planner/year-gridunit}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
