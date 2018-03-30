import { ByhirasTestPage } from './app.po';

describe('byhiras-test App', () => {
  let page: ByhirasTestPage;

  beforeEach(() => {
    page = new ByhirasTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
