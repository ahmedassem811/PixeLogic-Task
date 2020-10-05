class logUser {

    navigateToLogin(){
        cy.get(':nth-child(3) > .dropdown > #dropdownCurrency').click()
        cy.get(".dropdown-menu > div > .active").click()}

    assertionOnNavigationToLoginForm(){
        cy.contains('.d-flex > h3','Login')}

    addEmail(ValidEmail){
        cy.get(':nth-child(1) > .pure-material-textfield-outlined > span').type(ValidEmail)} 

    addPassword(ValidPassword){
        cy.get(':nth-child(2) > .pure-material-textfield-outlined > span').type(ValidPassword)}

    clickLogin(){
        cy.get('#loginfrm > .btn-primary').click()}

    AssertionSuccesfulLogin(FirstName,LastName){
       cy.get('.text-align-left').invoke('text').should('contain',"Hi, "+FirstName+" "+ LastName)
       cy.get(':nth-child(1) > .nav-link').invoke('text').should('contain',"Bookings")}
    }
    
export default logUser