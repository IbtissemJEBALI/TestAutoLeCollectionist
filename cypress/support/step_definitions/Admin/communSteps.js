import HousePage from "../../pagesObjectsAT/HousePage";
import ConnexionPage from "../../pagesObjectsAT/ConnexionPage";
import InfoPage from "../../pagesObjectsAT/InfoPage";
import PiecesAndEquipementPage from "../../pagesObjectsAT/PiecesAndEquipementPage";

/*
Step connexion
*/
Given ('Je suis sur la page de connexion de l’admin Tool',()=>{
    let baseURL=Cypress.config().baseUrl
    cy.visit(baseURL)
}) 
When ('Je renseigne les identifiants de connexion',()=>{
    ConnexionPage.FillEmail("ibtissem.jebali@lecollectionist.com")
    ConnexionPage.FillPassword("85Kk92C$mhr!")
} )
And ('Je clique sur se connecter',()=>{
    ConnexionPage.ClickOnConnexionBTN()
}) 

/*
Step search villa 
*/ 
