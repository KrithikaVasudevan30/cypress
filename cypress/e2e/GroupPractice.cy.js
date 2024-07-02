describe("Check Commerce demo store Website",()=>{
    it('Check Commerce demo store Website',()=>{
        cy.visit("https://commercejs-demo-store.netlify.app/");
        cy.get('.swiper-slide-active > .hero-slide > .d-flex').click()
        cy.get(':nth-child(2) > .row > :nth-child(1) > .mb-5 > .mb-3').click()
        cy.get('.py-4 > .h-56').click()
    })
})