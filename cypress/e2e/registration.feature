Feature: Registartion page of Ecommerce website "https://naveenautomationlabs.com/opencart/index.php?route=account/register"

    Scenario: Registration of Ecommerce Website
    Given User is on Ecommerce Landing page
    When User registers into application
    |FirstName|LastName|Email|Telephone|Password|
    |Madhuri|Rajput|m2@r.com|78787878|Abcd1234|
    And Accepting Privacy policy and hitting continue button
    Then User is registered with successful message "Your Account Has Been Created!"