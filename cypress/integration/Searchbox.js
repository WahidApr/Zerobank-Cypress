/// <reference types="Cypress"/>

describe('Searchbox Test', () => {

    it('Should type into searchbox and submit ', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include','index.html')
        cy.get('#searchTerm').type('Nothing Much {enter}')
    });

    it('Should show search result page', () => {
        cy.visit('http://zero.webappsecurity.com/search.html?searchTerm=Nothing+much')
        cy.get('h2').should('contain.text','Search Results:')
    });

})