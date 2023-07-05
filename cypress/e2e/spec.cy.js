require('cypress-xpath')
describe('template spec', () => {
  it('Launch Url', ()=>{
    cy.visit('https://www.google.com');
  });
  it('search Testing Mavens', ()=> {
    cy.xpath('//textarea[@name="q"]').type('Testing Mavnes');
    cy.xpath('//textarea[@name="q"]').type("{enter}");
   // cy.contains('Home - Testing Mavens - Software Testing Redefined').click()
  });
  it('select testingmavens.com from the results', () => {
     cy.url().should('contains', 'search')
     cy.contains('Home - Testing Mavens - Software Testing Redefined').click()
  });
})

