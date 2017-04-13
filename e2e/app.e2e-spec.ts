import { NgHomeworkSxdPage } from './app.po';

describe('ng-homework-sxd App', () => {
  let page: NgHomeworkSxdPage;

  beforeEach(() => {
    page = new NgHomeworkSxdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
