import { AngularDbmsPage } from './app.po';

describe('angular-dbms App', function() {
  let page: AngularDbmsPage;

  beforeEach(() => {
    page = new AngularDbmsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
