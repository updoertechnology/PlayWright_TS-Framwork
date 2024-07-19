Feature: Login Functionality

    Feature Description : To run tests with playwright with view port - Mobile & Windows

    Background: 
    When User Launch a "<Web Browser>"
    Given User Navigate To HomePage


    @demo
    Scenario Outline: Verify Username and Password field with invalid credentails
    When User Click on Hello SignIn Button
    Then User Enter Email From LoginPage
    Then User Click on Continue Button
    Then User Enter Password
    Then User click on SignIn Button
    