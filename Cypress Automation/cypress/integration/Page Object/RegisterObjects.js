

class regUser {

    navigateToSignUp(){
        cy.get(':nth-child(3) > .dropdown > #dropdownCurrency').click()
        cy.get('[href="https://www.phptravels.net/register"]').click()}
    
    assertionOnNavigationToSignUpForm(){
        cy.contains('.d-flex > h3','Sign Up')}

    addName(FirstName,LastName){
        cy.get('.row > :nth-child(1) > .form-group > .pure-material-textfield-outlined > span').type(FirstName)
        cy.get(':nth-child(2) > .form-group > .pure-material-textfield-outlined > span').type(LastName)}
    
    addMobile(ValidMobile){
        cy.get(':nth-child(4) > .pure-material-textfield-outlined > span').type(ValidMobile)}

    addEmail(ValidEmail){
        cy.get(':nth-child(5) > .pure-material-textfield-outlined > span').type(ValidEmail)} 

    addPassword(ValidPassword){
        cy.get(':nth-child(6) > .pure-material-textfield-outlined > span').type(ValidPassword)}

    confirmPassword(ValidPassword){
        cy.get(':nth-child(7) > .pure-material-textfield-outlined > span').type(ValidPassword)}

    SubmiteSignUp(){
        cy.get('.signupbtn').click()}
    
    AssertionSuccesfulSignUp(FirstName,LastName){
       cy.get('.text-align-left').invoke('text').should('contain',"Hi, "+FirstName+" "+ LastName)
       cy.get(':nth-child(1) > .nav-link').invoke('text').should('contain',"Bookings")}

    }
    
export default regUser