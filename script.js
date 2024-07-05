//your JS code here. If required.
// Adjusted Cypress Test
describe('History of Blogs Page', () => {
    it('should display correct headings and text', () => {
        cy.visit('/path/to/history-of-blogs-page');

        // Assert the main headings
        cy.get('h1').should('have.text', 'History');
        cy.get('h2').should('have.text', 'Origins');

        // Assert specific text in paragraphs or bold elements
        cy.get('p').first().should('contain.text', 'An early example of a "diary" style blog');
        cy.get('b').should('have.text', 'Main articles:');
    });
});
