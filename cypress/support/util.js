

export const generateRandomString = function (length) {
  return Math.random().toString(20).substr(2, length)
}

export function generateRandomEmail() {
  let emailRandom = "testIsmi+" + generateRandomString(8)
  var result = emailRandom.replace(/[^a-z]/g, '') + "@uzantisi.com";
  return result;
}
export function generateRandomName() {
  let emailRandom = "testismi+" + generateRandomString(8)
  var result = emailRandom.replace(/[^a-z]/g, "");
  return result;
}
export function randomSelect_xpath(xpath) {
  cy.xpath(xpath).then(($li) => {
    const items = $li.toArray()
    return Cypress._.sample(items)
  }).then(($li) => {
    expect(Cypress.dom.isJquery($li), 'jQuery element').to.be.true
    cy.log(`you picked "${$li.text()}"`)
  }).click()
}
export function randomSelect_css(css) {
  cy.get(css).then(($li) => {
    const items = $li.toArray()
    return Cypress._.sample(items)
  }).then(($li) => {
    expect(Cypress.dom.isJquery($li), 'jQuery element').to.be.true
    cy.log(`you picked "${$li.text()}"`)
  }).click()
}


