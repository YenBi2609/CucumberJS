Feature: Search
   Scenario: Search gg
   Given I visit homepage
   When I search for
   Then I should see
Scenario: A user signing in with invalid email should get an error message indicating that email cannot be found
    Given A user visits mail.google.com