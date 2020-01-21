import { newE2EPage } from '@stencil/core/testing';

describe('app-tinder-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-tinder-card></app-tinder-card>');

    const element = await page.find('app-tinder-card');
    expect(element).toHaveClass('hydrated');
  });
});
