/// <reference types="cypress"/>

describe('Navbar Test',() => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });
    it('Should display online banking content', () => {
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include','online-banking.html')
        cy.get('h1').should('be.visible')
    });

    it('Should display feedback content', () => {
        cy.get('#feedback').click()
        cy.url().should('include','feedback.html')
        
    });

    it('Should display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include','index.html')
    });

    it('Click the button more service in online banking features ', () => {
        cy.get('#online-banking').click()
        cy.url().should('include','online-banking.html')
    });

    it('Click checking account activity features', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include','index.html')
        cy.get('#account_activity_link').click()
        cy.url().should('include','login.html') 
    });

    it('Click transfer funds features in the homepage', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include','index.html')
        cy.get('#transfer_funds_link').click()
        cy.url().should('include','login.html') 
    });

    it('Click My Money Map features in the homepage', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include','index.html')
        cy.get('#money_map_link').click()
        cy.url().should('include','login.html')  
    });

});
