Feature: Create contacts
  As a user
  In order to stay in touch with my friends
  I would like to be able to create a contact for them in my address book


  Scenario: Create a new contact
    Given I visit the site
    Then I should see "Contacts"
    And I should see "You have no contacts in your address book"
    When I click "Add contact"
    Then I fill in "Name" with "John Doe"
    And I fill in "Email" with "john@doe.com"
    And I fill in "Phone" with "0123456789"
    And I fill in "Company" with "Craft Academy"
    And I fill in "Notes" with "A really awsome guy :-)"
    And I fill in "Twitter" with "johndoe"
    And I click "Save contact"
    Then I should have 1 contact in my address book
    And I should see "John Doe"
    And I should not see "You have no contacts in your address book"

  Scenario: User creates multiple contacts
    Given I visit the site
    Then I should see "Contacts"
    And I should see "You have no contacts in your address book"
    When I click "Add contact"
    Then I fill in "Name" with "John Doe"
    And I fill in "Email" with "john@doe.com"
    And I fill in "Phone" with "0123456789"
    And I fill in "Company" with "Craft Academy"
    And I fill in "Notes" with "A really awsome guy :-)"
    And I fill in "Twitter" with "johndoe"
    And I click "Save contact"
    When I click "Add contact"
    Then I fill in "Name" with "Jane Doe"
    And I fill in "Email" with "jane@doe.com"
    And I fill in "Phone" with "01111111111"
    And I fill in "Company" with "Craft Academy"
    And I fill in "Notes" with "A really awsome girl :-)"
    And I fill in "Twitter" with "janedoe"
    And I click "Save contact"
    Then I should have 2 contact in my address book
    And I should see "John Doe"
    And I should see "Jane Doe"
    And I should not see "You have no contacts in your address book"