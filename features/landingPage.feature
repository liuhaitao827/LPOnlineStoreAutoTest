Feature: Visit Merchant Online Website

Scenario: Visit Home Page

  Given I enter "URL" of "merchant" online website on browser
  Then I open "merchant" online home page

Scenario: Visit Category Page

  Given I open "merchant" online home page
  When I choose category from top menu
  | top menu |
  | Creative Prints |  
  Then Navigate to category page

Scenario: Global Search

  Given I open "merchant" online home page
  When I open global search box
  And I enter keywords to search
  | keywords |
  | Christmas |  
  Then Navigate to search result page
  And I can see the number of search products
  And I can see all search products