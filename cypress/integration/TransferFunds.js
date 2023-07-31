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

    it('Actions Transfer Funds Feature', () => {
        cy.get('#transfer_funds_tab').click()
        cy.url().should('include', 'transfer-funds.html')
        cy.get('h2').should('contain.text', 'Transfer Money & Make Payments')
        cy.get('#tf_amount').type('250')
        cy.get('#tf_description').type('Transfer testing')
        cy.get('#btn_submit').click()
        cy.url().should('include', 'funds-verify.html')
        cy.get('h2').should('contain.text', 'Transfer Money & Make Payments - Verify')
        cy.get('#btn_submit').click()
        cy.get('.alert-success').should('contain.text', 'You successfully submitted your transaction.')
      });

});
  