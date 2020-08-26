Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
describe('TelusShoppingInternetCart', function() 
 {
    it('addtocart', function ()
     {
       // Click on Telus Home Page
      cy.visit('https://www.telus.com/en/shop/home')
      cy.get('.sc-hzDkRC').click()

       // Select Province BC
      cy.get('[data-test=regionSwitcherContainer] > .sc-ifAKCX > :nth-child(2) > .sc-bZQynM').click()
      cy.get('.style__ButtonContainer-sc-1t16xhf-6 > [data-testid=button-addressHeader] > .Button__ButtonTextWrapper-sa7xo3-1').click()

      // Wait for page to load
      cy.wait(500)

      // Enter the given address
      cy.get('#autocomplete-form-address-google').type('2505 burian drive')
      cy.wait(500)
      
      // Click on address check
      cy.get('#autocomplete-form-submit > .Button__ButtonTextWrapper-sa7xo3-1').click()
      cy.wait(2000)

      // Page title check
      cy.title().should('eq', 'TELUS Home Services - Optik, Pik, Internet & Home Phone | TELUS')
      cy.viewport(1440, 900)

      // Select Internet service for shopping cart
      cy.get(':nth-child(1) > .style__Container-sc-15in1n8-0 > .style__BoxWrapper-sc-1hn6ah5-4 > .TDS_Box-modules__betweenBottomMargin-4___2tJ2n > .TDS_BaseButton-modules__sizing___2kf7G').click()
      cy.wait(1000)

      // Add to cart 
      cy.get('[data-testid=button-addToCart-internet-25]').click()
      cy.wait(1000)

      // Review cart
      cy.get('#review-button').click()
    })
  })