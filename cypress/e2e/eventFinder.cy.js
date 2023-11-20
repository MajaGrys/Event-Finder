describe('Find events using the search options', () => {
  const eventInfo = {
      keyword: 'harry',
      city: 'London',
      datetime: '2024-12-10T12:00',
      category: 'Film',
      sort: 'date,asc'
  };

  beforeEach(() => {
    cy.visit('https://majagrys.github.io/Event-Finder/');
    cy.get('#city').type(eventInfo.city);
    cy.get('.events-search').submit();
  })

  it('Each page should contain 5 events', () => {
    cy.get('.event-item').should('have.lengthOf', 5);

    cy.get('.change-page').click();
    cy.get('.current-page').should('include.text', '2 /');
    cy.get('.event-item').should('have.lengthOf', 5);

    cy.get('.change-page').last().click();
    cy.get('.current-page').should('include.text', '3 /');
    cy.get('.event-item').should('have.lengthOf', 5);
  })

  it('Each search option should be easy to remove', () => {
    cy.get('#keyword').type(eventInfo.keyword);
    cy.get('#datetime').type(eventInfo.datetime);
    cy.get('#category').select(eventInfo.category);
    cy.get('#sort').select(eventInfo.sort);
    cy.get('.events-search').submit();

    cy.get('#search-keyword').contains(eventInfo.keyword).find('button').click()
    .should('not.exist');
    cy.get('#search-city').contains(eventInfo.city).find('button').click()
    .should('not.exist');
    cy.get('#search-datetime').contains(eventInfo.datetime.slice(0,4)).find('button').click()
    .should('not.exist');
    cy.get('#search-category').contains(eventInfo.category).find('button').click()
    .should('not.exist');
    cy.get('#search-sort').contains(eventInfo.sort.slice(1,4)).find('button').click()
    .should('not.exist');
  })

  it('An error message should be displayed when no events are found', () => {
    cy.get('#keyword').type('asdfsajdgskal');
    cy.get('.events-search').submit();
    cy.get('.alert').should('exist');
  })
})