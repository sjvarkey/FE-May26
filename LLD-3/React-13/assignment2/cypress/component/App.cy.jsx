import React from "react";
import App from "../../src/App";

describe("Currency Converter Tests", () => {
  it("converts USD to EUR correctly", () => {
    cy.mount(<App />);
    cy.get('input[placeholder="Enter USD amount"]').type("100");
    cy.contains("Converted to EUR: 93").should("be.visible");
  });

  it("converts EUR to USD correctly", () => {
    cy.mount(<App />);
    cy.get('input[placeholder="Enter EUR amount"]').type("50");
    cy.contains("Converted to USD: 53.5").should("be.visible");
  });

  it("converts GBP to USD correctly", () => {
    cy.mount(<App />);
    cy.get('input[placeholder="Enter GBP amount"]').type("10");
    cy.contains("Converted to USD: 12.1").should("be.visible");
  });

  it("handles unsupported conversions by showing no result", () => {
    cy.mount(<App />);
    cy.get('input[placeholder="Enter USD amount"]').type("30");
    cy.contains("Converted to GBP:").should("not.exist");
  });
});
