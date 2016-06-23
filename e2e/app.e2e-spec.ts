import { BadhanWeb2Page } from './app.po';

describe('badhan-web-2 App', function() {
  let page: BadhanWeb2Page;

  beforeEach(() => {
    page = new BadhanWeb2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
