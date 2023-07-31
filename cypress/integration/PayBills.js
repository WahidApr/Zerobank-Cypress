describe('Checking On The Application Feature', () => {
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

    it('Should Display And Actions To The Pay Bills Feature', () => {
        cy.get('#pay_bills_tab').click()
        cy.url().should('include','pay-bills.html')
        cy.get('h2').should('contain.text', 'Make payments to your saved payees')
        cy.get('input[name="amount"]').type('1000')
        cy.get('#sp_description').type('Pay Saved testing')
        cy.get('#sp_date').type('2023-07-26')
        cy.get('#pay_saved_payees').click()
        cy.url().should('include', 'saved-payee.html')
        cy.get('#alert_content').should('contain.text', 'The payment was successfully submitted.')
      });



});