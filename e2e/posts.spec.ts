describe('Posts page', () => {
  it('should display main title', () => {
    cy.visit('/posts');
    cy.contains('h1', 'Les différents posts');
  })
});