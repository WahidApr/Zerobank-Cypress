describe('The Settings Feature', () => {
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

    it("Should display the help topics", () => {
        cy.get('.icon-cog').click()
        cy.get('#help_link').click()
        cy.url().should('include','/help.html')
        cy.get('h3').should('be.visible') 
    });

});

