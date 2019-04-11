import { client } from 'nightwatch-api';
import { Given, When, Then } from 'cucumber';

Given(/^I open POPS`s Landing Page$/, async () => {
  await client.url('http://ppnm7webp1/pops');
});

Then(/^the title is "(.*?)"$/, async text => {
  await client.assert.title(text);
});

Given('I am a register user', (user) => {
  // Write code here that turns the phrase above into concrete actions

});

When('{string} menu is higlight', (menuname) => {
  // Write code here that turns the phrase above into concrete actions

});
         
When('Register user name is shown in {string} list', (workflowuser) => {
  // Write code here that turns the phrase above into concrete actions

});

Then('I login system successfully', () => {
  // Write code here that turns the phrase above into concrete actions

});

When('Workflow User list is null', () => {
  // Write code here that turns the phrase above into concrete actions

});

Then('I login system failed', () => {
  // Write code here that turns the phrase above into concrete actions

});