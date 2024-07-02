
//negative username test
describe('Login Test Practice',()=>{
    it ('verify login with given positive and negative cases', () => {
        cy.visit( 'https://practicetestautomation.com/practice-test-login/')
        cy.get('input[name="username"]').type ("incorrectUser")
        cy.get('#password').eq(0).type("Password123")
        cy.get('.btn').click()
        cy.get('#error').eq(0).should('be.visible').and('have.text',"Your username is invalid!")
        })
    })
    