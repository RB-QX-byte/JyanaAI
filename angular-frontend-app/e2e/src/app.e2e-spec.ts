import { browser, by, element } from 'protractor';

describe('Angular Frontend App E2E Tests', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('should display the app title', () => {
    expect(element(by.css('app-root h1')).getText()).toEqual('Welcome to Angular Frontend App!');
  });

  it('should navigate to the sample component', () => {
    element(by.css('a.sample-link')).click();
    expect(browser.getCurrentUrl()).toContain('/sample');
  });

  // Add more tests as needed
});