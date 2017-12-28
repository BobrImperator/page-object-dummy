import PageObject from 'ember-cli-page-object';
const { fillable, visitable } = PageObject;
export default PageObject.create({
  visit: visitable('/'),
  name: fillable('input')
});
