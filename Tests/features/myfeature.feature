Feature: Calculation Angular usage
 
  Scenario: Calculation Angular
    Given I am on calculator page
	When I type "1" as a first argument
	And I type "2" as a second argument
	And I click operation button
	Then I should see "3" calculation result