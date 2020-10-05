/// <reference types="cypress" />

import regUser , { RegisterObjects } from 'C:/Users/A.Assem/Cypress_Automation/cypress/integration/Page Object/RegisterObjects.js';
import logUser , { LoginObjects } from 'C:/Users/A.Assem/Cypress_Automation/cypress/integration/Page Object/LoginObjects.js';

describe ('PixeLogic Task', function(){ 
   const RegObj = new regUser()
   const LogObj = new logUser()

   beforeEach(function(){
    // runs once before all tests in the block
   // Call Fixtures file to use data for test cases
    cy.fixture('Data').then(function(data){
        this.Data = data })   

    cy.visit("https://www.phptravels.net/") //Go To Url page
        Cypress.on('uncaught:exception', (err, runnable) => {return false;});   //Remove the uncaught exception
                 
  })

//////////////////////////////////////Register Test Cases///////////////////////////////////////////////////////
//// Happy Scenario for Registeration page - Note: All fields are mendatory
///
//
     it('Registeration -Happy Scenario for Registeration fields', function () 
    {
      RegObj.navigateToSignUp()                       //Click o sign-up and navigate to sign-up page
      RegObj.assertionOnNavigationToSignUpForm()     //make sure navigate correctly
      RegObj.addName(this.Data.FirstName,this.Data.LastName)        //Fill FirstName&LastName
      RegObj.addMobile(this.Data.ValidMobile)               //Fill Mobile Field
      RegObj.addEmail(this.Data.ValidEmail)               // Fill valid mail
      RegObj.addPassword(this.Data.ValidPassword)           // Fill Password Field
      RegObj.confirmPassword(this.Data.ValidPassword)      //Confirm the password
      RegObj.SubmiteSignUp()                     //Click on sign-up button
      RegObj.AssertionSuccesfulSignUp(this.Data.FirstName,this.Data.LastName)   //Check on Successful Sign-up and navigate to profile of the user
      cy.wait(2000)
    })



//// Happy Scenario for Login page after registeration
///
//
    it('Verify that you can login after registeration', function () 
    {
      LogObj.navigateToLogin()                       //Click on Login and navigate to Login page
      LogObj.assertionOnNavigationToLoginForm()     //make sure navigate correctly
      LogObj.addEmail(this.Data.ValidEmail)               // Fill valid mail
      LogObj.addPassword(this.Data.ValidPassword)           // Fill Password Field
      LogObj.clickLogin()                     //Click on Login button
      LogObj.AssertionSuccesfulLogin(this.Data.FirstName,this.Data.LastName)   //Check on Successful Login and navigate to profile of the user
      cy.wait(2000)
    })
})