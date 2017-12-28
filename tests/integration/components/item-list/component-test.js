import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import page from 'page-object-dummy/tests/pages/item';
// import wait from 'ember-test-helpers/wait';
moduleForComponent('items-list', 'Integration | Component | items-list', {
  integration: true,
  // beforeEach() {
  //   this.server = startMirage();
  //   page.setContext(this);
  //   window.wait = wait;
  // },
  // afterEach() {
  //   this.server.shutdown();
  // },
});
test('it fills input', function(assert) {
  assert.expect(1);
  this.render(hbs`{{item-list}}`);
  page.name('Hello');
  assert.equal(page.name().value, 'Hello', 'it displays');
});
