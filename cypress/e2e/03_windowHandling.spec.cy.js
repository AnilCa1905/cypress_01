
import { switchToWindow } from '../support/commands.js'

describe('template spec', () =>  {
  it('Launch Url', async()=>{
    await cy.visit('https://demoqa.com/');
    await cy.contains('Alerts, Frame & Windows').click();
    await cy.contains(`Browser Windows`).click();
    await cy.contains(`New Tab`).click();
    await  cy.url().should('include', '/sample')
  })
  
  xit('Click on New Tab', async()=> {
    switchToWindow('https://demoqa.com/browser-windows')
     
    await cy.get(`#windowButtonWrapper`).click();
  })
})