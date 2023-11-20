describe('Website should be responsive', () => {
    beforeEach(() => {
    cy.visit('https://majagrys.github.io/Event-Finder/');
    })

    it('Navigation should change on small devices', () => {
      cy.get('.mobile-nav-btn').should('not.be.visible');
      cy.viewport(500, 700);
      cy.get('.mobile-nav-btn').should('be.visible');
    })

    it('Mobile navigation should toggle on click', () => {
      cy.viewport(500, 700);
      cy.get('.mobile-nav-btn').click();
      cy.get('nav').should('have.class', 'nav-active');

      cy.get('nav > a').contains('About').click()
      cy.get('nav').should('not.have.class', 'nav-active');
    })
  })