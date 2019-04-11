Feature: Landing Page

Scenario: Visit Landing Page

  Given I open POPS`s Landing Page
  Then the title is "POPS"

Scenario: Login Success
  Given I am a register user
  | User Name | Role |
  | Allan Chen | Administrator |
  And I open POPS`s Landing Page
  When "My Active Work" menu is higlight
  And Register user name is shown in "Workflow User" list
  Then I login system successfully
   
Scenario: Login Failed
  Given I am a register user
  | User Name | Role |
  | Allan Chen | Administrator |
  And I open POPS`s Landing Page
  When Workflow User list is null
  Then I login system failed

