describe("Amazon website handling ",()=> {
    it('Added to cart validate and test',()=>{
        cy.visit("https://www.amazon.in/");
        cy.get('#twotabsearchtextbox').type ('iphone');
        cy.get('#nav-search-submit-button').click()
        cy.wait (4000)
        cy.get('a[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]').eq(0).invoke('removeAttr','target').click()
        cy.get('input[name="submit.add-to-cart"]').eq(1).click();
        
    })
})  
        