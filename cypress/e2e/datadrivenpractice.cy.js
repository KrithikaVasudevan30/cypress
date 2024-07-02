describe ('Data driven test',function (){
    it.only('login with valid username and password',()=>{
        cy.visit("https://practicetestautomation.com/practice/")
        const filepath = "C:\Users\admin\Desktop\cred.xlsx"
        cy.task('excelToJsonConverter',filePath).then(function(result)
        {
            console.log(result.sheet1[0].B)
            cy.log(result.sheet1[0].B)
            console.log(result.sheet1[1].B)
            cy.log(result.sheet1[1].B)

            cy.get('input[name="username"]').type(result.sheet1[0].B)
            cy.get('input[name="password"][type=password').type()
            cy.wait(4000)
            cy.get('.btn').click()

    })
})
})