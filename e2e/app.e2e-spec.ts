import { A2componentspublishPage } from './app.po';

describe('a2componentspublish App', function() {
  let page: A2componentspublishPage;

  beforeEach(() => {
    page = new A2componentspublishPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
