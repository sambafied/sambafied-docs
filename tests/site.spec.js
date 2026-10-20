const {test, expect} = require('@playwright/test');
const routes = [
  '/', '/products/dam-client/', '/docs/', '/docs/dam-client/overview/',
  '/docs/dam-client/getting-started/', '/docs/dam-client/folder-workflow/',
  '/docs/dam-client/multiple-instances/', '/docs/dam-client/status/',
  '/docs/dam-client/troubleshooting/', '/docs/dam-client/adobe-context/',
  '/docs/dam-client/connect-local-aem/', '/docs/dam-client/connect-cloud-aem/',
  '/docs/dam-client/find-and-open-assets/', '/docs/dam-client/edit-and-publish/',
  '/docs/dam-client/conflicts-and-recovery/', '/docs/dam-client/preferences-and-storage/',
];

test('all public routes render without errors, missing images or overflow', async ({page}, testInfo) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  for (const route of routes) {
    const response = await page.goto(route);
    expect(response.status(), route).toBe(200);
    await expect(page.locator('main h1')).toHaveCount(1);
    await expect(page.locator('main h1')).toBeVisible();
    await page.evaluate(async () => { await document.fonts.ready; await Promise.all([...document.images].map(async image => { image.loading = 'eager'; try { await image.decode(); } catch {} })); });
    const metrics = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      width: document.documentElement.scrollWidth,
      brokenImages: [...document.images].filter(i => !i.complete || i.naturalWidth === 0).map(i => i.src),
    }));
    expect(metrics.brokenImages, route).toEqual([]);
    await expect(page.locator('a[href*='+String.fromCharCode(34)+'github.com'+String.fromCharCode(34)+']')).toHaveCount(0);
    expect(metrics.width, route).toBeLessThanOrEqual(metrics.viewport + 1);
    if (['/', '/products/dam-client/', '/docs/dam-client/status/'].includes(route)) {
      const name = route === '/' ? 'home' : route.includes('status') ? 'status' : 'product';
      await page.screenshot({path: testInfo.outputPath(name + '.png'), fullPage: true});
    }
  }
  expect(errors).toEqual([]);
});

test('homepage quick paths reach useful docs and product pages', async ({page}) => {
  await page.goto('/');
  await page.getByRole('link', {name: /Explore the product/}).click();
  await expect(page).toHaveURL(/\/products\/dam-client\/$/);
  await page.goto('/');
  await page.getByRole('link', {name: /Browse the guides/}).click();
  await expect(page.getByRole('heading', {name: 'Work with Sambafied', exact: true})).toBeVisible();
  await page.goto('/');
  await page.getByRole('link', {name: /Read the development status/}).click();
  await expect(page.getByRole('heading', {name: 'Readiness and limits', exact: true})).toBeVisible();
});

test('navigation works with desktop dropdown and mobile menu', async ({page}, testInfo) => {
  await page.goto('/');
  if (testInfo.project.name === 'desktop') {
    await page.getByRole('button', {name: 'Products'}).hover();
    await page.locator('.navbar').getByRole('link', {name: 'DAM Client', exact: true}).click();
  } else {
    await page.getByRole('button', {name: 'Toggle navigation bar'}).click();
    await expect(page.locator('.navbar-sidebar')).toBeVisible();
    await page.locator('.navbar-sidebar').getByRole('button', {name: 'Products'}).click();
    await page.locator('.navbar-sidebar').getByRole('link', {name: 'DAM Client', exact: true}).click();
  }
  await expect(page).toHaveURL(/\/products\/dam-client\/$/);
});

test('readiness and comparison retain critical qualification boundaries', async ({page}) => {
  await page.goto('/docs/dam-client/status/');
  await expect(page.locator('main')).toContainText('development preview');
  await expect(page.locator('main')).toContainText('simultaneous multi-instance');
  await expect(page.locator('main')).toContainText('completed security review');
  await page.goto('/docs/dam-client/adobe-context/');
  await expect(page.locator('main')).toContainText('already supports native desktop work');
  await expect(page.locator('main')).toContainText('not affiliated with Adobe');
  await expect(page.locator('main').getByRole('link', {name: /Adobe’s getting-started guide/})).toHaveAttribute('href', 'https://experienceleague.adobe.com/en/docs/experience-manager-desktop-app/using/get-started');
});

test('keyboard users can skip navigation to main content', async ({page}) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', {name: 'Skip to main content'})).toBeFocused();
  await page.keyboard.press('Enter');
  await page.keyboard.press('Tab');
  await expect(page.locator('main a').first()).toBeFocused();
});

test('representative marketing and documentation pages pass automated accessibility checks', async ({page}) => {
  const AxeBuilder = require('@axe-core/playwright').default;
  for (const route of ['/', '/products/dam-client/', '/docs/', '/docs/dam-client/connect-cloud-aem/', '/docs/dam-client/status/']) {
    await page.goto(route);
    await page.waitForSelector('html[data-has-hydrated=true]');
    const result = await new AxeBuilder({page}).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
    expect(result.violations, route).toEqual([]);
  }
});
