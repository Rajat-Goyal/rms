import { browser, element, by } from 'protractor';

export class RmsFrontPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rms-root h1')).getText();
  }
}
