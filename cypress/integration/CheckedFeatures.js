/// <reference types="Cypress"/>

describe('Checking the Website Features', () => {
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

      it('Should display the account activity feature', () => {
        cy.get('#account_activity_tab', { timeout: 10000 }).click()
        cy.url().should('include', 'account-activity.html')
        cy.get('h2', { timeout: 10000 }).should('contain.text', 'Show Transactions')
      
      });

      it('Should display the transfer funds feature', () => {
        cy.get('#transfer_funds_tab', { timeout: 10000 }).click()
        cy.url().should('include', 'transfer-funds.html');
        cy.get('h2').should('contain.text', 'Transfer Money & Make Payments')
      });

      it('Should display the pay bills feature', () => {
        cy.get('#pay_bills_tab').click()
        cy.url().should('include', 'pay-bills.html')
        cy.get('h2').should('contain.text', 'Make payments to your saved payees')
      });

      it('Should display the my money map feature', () => {
        cy.get('#money_map_tab').click()
        cy.url().should('include', 'money-map.html')
        cy.get('#container').should('be.visible')
      });

      it('Should display the online statements feature', () => {
        cy.get('#online_statements_tab', { timeout: 10000 }).click()
        cy.url().should('include', 'online-statements.html')
        cy.get('h2').should('contain.text', 'Statements & Documents')
      });

});