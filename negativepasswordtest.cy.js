//negative password test

describe('Login Test Practice',()=>{
    it ('verify login with given positive and negative cases', () => {
        cy.visit( 'https://practicetestautomation.com/practice-test-login/')
        cy.get ('input[name="username"]').type ("student")
        cy.get ('input[type="password"]').type ("incorrectPassword" )
        cy.get ('.btn').click()
        cy.get('#error').eq(0).should('be.visible').and('have.text',"Your password is invalid!")
    })
    })
