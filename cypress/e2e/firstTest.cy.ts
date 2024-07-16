import Dashboard from "src/screens/Dashboard";

describe("Run App ", () => {
  it("Render Most Popular Articles", () => {
    cy.visit("http://localhost:3000/");

    cy.get("[data-testid=mostPopularArticle]")
      .should("exist")
      .should("have.text", "Most Popular Articles");
  });

  it("Render Articles", () => {
    cy.visit("http://localhost:3000/");
    cy.intercept({
      method: "GET",
      url: "https://api.nytimes.com/svc/mostpopular/**",
    }).as("getArticles");
    cy.wait(3000);

    cy.get('[data-testid^="articleCard-"]').should("exist");
  });

  it("render on Select", () => {
    cy.visit("http://localhost:3000/");
    cy.get("select").select("7").should("have.value", "7");
    cy.intercept({
      method: "GET",
      url: "https://api.nytimes.com/svc/mostpopular/**",
    }).as("getArticles");
    cy.wait(3000);
    cy.get('[data-testid^="articleCard-"]').should("exist");
  });

  it("Click on Select", () => {
    cy.visit("http://localhost:3000/");
    cy.intercept({
      method: "GET",
      url: "https://api.nytimes.com/svc/mostpopular/**",
    }).as("getArticles");
    //cy.wait("@getArticles");
    cy.wait(3000);
    cy.get('[data-testid^="articleCard-"]').should("exist").first().click();
  });
});
