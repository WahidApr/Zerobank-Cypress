describe('The Online Statements Feature', () => {
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

    it('The actions on the online statements feature', () => {
      cy.get('#online_statements_tab', { timeout: 10000 }).click()
      cy.url().should('include', 'online-statements.html')
      cy.get('h2').should('contain.text', 'Statements & Documents')
      
      cy.get('a[href="#os_2011"]').click()
      cy.get('a[href="#os_2010"]').click()
      cy.get('a[href="#os_2009"]').click()
     
  });

  
  
});