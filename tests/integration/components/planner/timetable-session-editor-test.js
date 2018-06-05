import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('planner/timetable-session-editor', 'Integration | Component | planner/timetable session editor', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{planner/timetable-session-editor}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#planner/timetable-session-editor}}
      template block text
    {{/planner/timetable-session-editor}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
