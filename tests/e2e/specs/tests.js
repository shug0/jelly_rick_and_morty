describe("The application is correctly running", () => {
  it("The app should launch", () => {
    cy.visit("http://localhost:8080");
    cy.contains("h1", "Rick & Morty Characters");
  });

  it("The page 1 should be loaded", () => {
    cy.get(".Pagination_info").contains("Page 1");
  });

  it("Should display a list of characters", () => {
    cy.get(".Character")
      .should("have.length", 20)
      .first()
      .contains("Rick Sanchez");
  });

  it("I can change the page by clicking on next button", () => {
    cy.get(".Pagination_next").click();
    cy.wait(200);
    cy.get(".Character")
      .should("have.length", 20)
      .first()
      .contains("Aqua Morty");
  });

  it("When I click on character it should load detail page", () => {
    cy.get(".Character").first().click();
    cy.contains("h3", "Present in 2 episode.s.");
  });

  it("If I visit the detail page it should load character and display infos", () => {
    cy.visit("http://localhost:8080/#/characters/2");
    cy.contains("h1", "Morty Smith");
  });

  it("I can search characters by their Name", () => {
    cy.visit("http://localhost:8080");
    cy.get(".SearchInput_input").focus().type("Summer{enter}");
    cy.wait(200);
    cy.get(".Character").should("have.length", 7);
  });

  it("And I can filter the name search by status", () => {
    cy.contains("Dead").click();
    cy.wait(200);
    cy.get(".Character").should("have.length", 1);
  });
});
