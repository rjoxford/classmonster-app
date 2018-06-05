import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('timetable/timetable-gridunit', 'Integration | Component | timetable/timetable gridunit', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{timetable/timetable-gridunit}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#timetable/timetable-gridunit}}
      template block text
    {{/timetable/timetable-gridunit}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
