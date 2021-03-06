import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('color/rag-score-color', 'Integration | Component | color/rag score color', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{color/rag-score-color}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#color/rag-score-color}}
      template block text
    {{/color/rag-score-color}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
