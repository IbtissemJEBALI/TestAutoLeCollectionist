import ConnexionPage from "../../pagesObjectsAT/ConnexionPage";

/*
Step connexion
*/
Given ('Je suis sur la page de connexion de l’admin Tool',()=>{
    let baseURL=Cypress.config().baseUrl
    cy.visit(baseURL)
}) 
When ('Je renseigne les identifiants de connexion',()=>{
    ConnexionPage.FillEmail(Cypress.env().userEmail)
    ConnexionPage.FillPassword(Cypress.env().userPassword)
} )
And ('Je clique sur se connecter',()=>{
    ConnexionPage.ClickOnConnexionBTN()
}) 

/*
Step search villa 
*/ 
