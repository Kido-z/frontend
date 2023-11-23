import { test, expect } from '@playwright/experimental-ct-react';
const { chromium } = require('playwright');

test('Login Test', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
  });

  afterEach(async () => {
    await page.close();
  });

  it('should successfully log in', async () => {
    // Navigate to the React login page
    await page.goto('https://oslabs-beta.github.io/react-login/');

    // Fill in the login form
    await page.type('#username', 'testuser');
    await page.type('#password', 'testpassword');

    // Submit the form
    await page.click('[type="submit"]');

    // Wait for the login to complete and navigate to the next page or perform necessary assertions
    await page.waitForNavigation();

    // Perform assertions for successful login
    const welcomeMessageSelector = '.success-message';
    const welcomeMessage = await page.waitForSelector(welcomeMessageSelector);

    expect(welcomeMessage).toBeTruthy();
    expect(await welcomeMessage.textContent()).toContain('Welcome, testuser!');
  });

  it('should display an error for invalid login credentials', async () => {
    // Navigate to the React login page
    await page.goto('https://oslabs-beta.github.io/react-login/');

    // Fill in the login form with invalid credentials
    await page.type('#username', 'invaliduser');
    await page.type('#password', 'invalidpassword');

    // Submit the form
    await page.click('[type="submit"]');

    // Wait for the error message to be displayed
    const errorMessageSelector = '.error-message';
    const errorMessage = await page.waitForSelector(errorMessageSelector);

    // Perform assertions for the error message
    expect(errorMessage).toBeTruthy();
    expect(await errorMessage.textContent()).toContain('Invalid credentials. Please try again.');
  });
});
