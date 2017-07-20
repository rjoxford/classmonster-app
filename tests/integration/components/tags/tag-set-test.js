import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tags/tag-set', 'Integration | Component | tags/tag set', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{tags/tag-set}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#tags/tag-set}}
      template block text
    {{/tags/tag-set}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
