describe('login spec', () => {
  const user = 'guilhermenatal47@gmail.com'
  const password = 'Saopaulo@1'
  it('It should take user to login', () => {
    cy.visit('/login')
    cy.get('input[name=email]').type(user)
    cy.get('input[name=password]').type('password')
    cy.get('button.group').click()
  })
})