describe('empty spec', () => {
  it('it fails', () => {
    cy.visit('http://localhost:3000/signup');
    cy.url().should('include', '/signup');
    cy.get('#email').type('guilhermenatal47@gmail.com');
    cy.get('#password').type('saopaulo');
    cy.get('#confirm_password').type('saopaulo1');
    cy.get('#submit').click();
  });
});
