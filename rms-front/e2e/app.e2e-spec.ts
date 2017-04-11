import { RmsFrontPage } from './app.po';

describe('rms-front App', () => {
  let page: RmsFrontPage;

  beforeEach(() => {
    page = new RmsFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rms works!');
  });
});
