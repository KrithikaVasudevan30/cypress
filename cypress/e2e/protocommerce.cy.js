describe ('Protocommerce',()=>{
    let file;
    before (()=>{
cy.fixture ('login').then ((testdata)=>{
    file =testdata
})
    })
it('Check protocommerce website by data driven method',()=>{
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    cy.get ('input[name= "name"]').eq(0).type(file.Name)
    cy.get ('input[name= "email"]').eq(0).type(file.Email)
    cy.get ('#exampleInputPassword1').eq(0).type(file.Password)
    cy.get('#exampleCheck1').click ()
    cy.get('#inlineRadio2').click()
    cy.get('input[type="date"]'). type(file.Date_of_Birth)
    cy.get ('.btn')

})
    })
