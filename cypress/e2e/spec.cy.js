//JUAN JOSE RAMIREZ MEJIA

/* describe('spec.cy.js', () => {
  it('should visit', () =>{
    cy.visit('www.gooogle.com')
  })
}) */

/* describe('test by Juanjo', () =>{
  it('Does not do much!', () =>{
    expect(true).to.equal(true)
  })
}) */

/* describe('test by juanjo', () => {
  it('does not do much', () => {
    expect(true).to.equal(false)
  })
}) */

/* describe('test by juanjo', () => {
  it('visits the kitchen sink', () =>{
    cy.visit('www.youtube.com')
  })
}) */

/* describe('test by juanjo', () =>{
  it('finish the content "type"', () =>{
    cy.visit('www.youtube.com')
    cy.contains('type')
    cy.contains('submit')
  })
}) */

describe('test by juanjose', () =>{
  it('click the link "type"', () =>{
    cy.visit('www.twitter.com')
    cy.contains('type').click()
  })
})