describe('Scroll to top button should appear only when the user is not at the top of the page', () => {
    beforeEach(() => {
    cy.visit('https://majagrys.github.io/Event-Finder/');
    })

    it('Should appear only when user is not at the top of the page', () => {
        cy.get('.scroll-top').should('not.exist');
        cy.get('#search').scrollIntoView();
        cy.get('.scroll-top').should('exist');
    })

    it('On click, the window should scroll to the top of the page', () => {
        cy.get('#search').scrollIntoView();
        cy.get('.scroll-top').click();
        cy.get('#home').should('be.visible');
    })
});