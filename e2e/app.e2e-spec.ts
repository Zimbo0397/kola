import { KolaPage } from './app.po';

describe('kola App', function() {
  let page: KolaPage;

  beforeEach(() => {
    page = new KolaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
