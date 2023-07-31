///<reference types="Cypress"/>

describe('The Account Activity Feature',() => {

    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
        cy.fixture("user").then(user => {
          const username = user.username
          const password = user.password
          cy.get('#user_login').clear()
          cy.get('#user_login').type(username)
          cy.get('#user_password').clear()
          cy.get('#user_password').type(password)
          cy.get('input[name="submit"]').click()
          cy.get('h2').should('contain.text', 'Cash Accounts')
        });
      });
    
    it('The actions on the account activity feature', () => {
        cy.get('#account_activity_tab').click()
        cy.url().should('include', 'account-activity.html')
        cy.get('h2', { timeout: 3000 }).should('contain.text', 'Show Transactions')
        cy.get('a').contains('Find Transactions').click()
        cy.get('h2').should('contain.text','Find Transactions')
        cy.get('#aa_description').type('ONLINE TRANSFER REF')
        cy.get('.btn-primary').click()
        cy.get('.table-hover').should('be.visible')
      });
})