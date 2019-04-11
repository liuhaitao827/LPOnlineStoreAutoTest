import { client } from 'nightwatch-api';
import { Given, Then } from 'cucumber';

Given(/^I open POPS`s Landing Page$/, async () => {
  await client.url('http://ppnm7webp1/pops');
});

Then(/^the title is "(.*?)"$/, async text => {
  await client.assert.title(text);
});