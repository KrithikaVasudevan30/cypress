describe("Basic UI elements handling",()=> {
    it('UI elements validate and test',()=>{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('[value="radio2"]').check ().should ('be.checked');
    cy.get('#checkBoxoption2').check().should ('be.checked');
    cy.wait(5000)
    cy.get('#checkBoxoption2').uncheck().should('not.be.checked')
    cy.get('label input[type="checkbox"]'). check(["option1","option3"]).should('be.checked')
    cy.get('select').select('option2').should('have.value','option2')
    cy.get('[placeholder="Type to select countries"]').type('in');
    cy.get('.ui-menu-item div').each(($options) => { 
        if($options.text().includes('India')){
        cy.wrap($options).click({force:true})
        } 
    })
    cy.get('[placeholder="Type to select countries"]').should('have.value','India')
    })
})