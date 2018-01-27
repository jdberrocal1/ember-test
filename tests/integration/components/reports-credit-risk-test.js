import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('reports-credit-risk', 'Integration | Component | reports credit risk', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{reports-credit-risk}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#reports-credit-risk}}
      template block text
    {{/reports-credit-risk}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
