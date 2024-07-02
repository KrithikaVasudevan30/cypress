describe ("Data driven test",()=>{
    let cred;
    before (()=>{
cy.viewport(1024,1366)
cy.fixture ('login').then ((testdata)=>{
    cred=testdata
})
it('verify login with given positive and negative cases',()=>{
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    cy.get('input[name="username"]').type(cred.username)
    cy.get('password').eq(0).type(cred.password)
    cy.get('.btn').click()
})
    })
})