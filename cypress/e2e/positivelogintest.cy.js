//positivelogintest
describe ('Login Test Practice',()=> {
    it ('verify Login with given positive and negative cases', ()=> {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    cy.get('input[name="username"]').type("student")
    cy.get('#password').eq(0).type ("Password123")
    cy.get('.btn').click()
    cy.url().should('include', "practicetestautomation.com/logged-in-successfully/")
    cy.get('strong').should ('have.text','Congratulations student. You successfully logged in!')
    cy.get('a[href*="https://practicetestautomation.com/practice-"]').should ('be.visible').click()
    })
})
