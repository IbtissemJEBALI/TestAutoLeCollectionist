import HousePage from "../../pagesObjectsAT/HousePage";
import ConnexionPage from "../../pagesObjectsAT/ConnexionPage";

Given('je suis sur la page de connexion de l\’admin Tool', ()=>{
    let baseURL=Cypress.config().baseUrl
    cy.visit(baseURL)
} )

When('je renseigne les identifiants de connexion',()=>{
    ConnexionPage.FillEmail("ibtissem.jebali@lecollectionist.com")
    ConnexionPage.FillPassword("85Kk92C$mhr!")
} )

And ('je clique sur se connecter',()=>{
    ConnexionPage.ClickOnConnexionBTN()
} ) 

Then ('je dois vérifier que je suis redirigé vers la page intitulée {string}',(title)=>{
    HousePage.isHouseURLDisplayed(title)
})
When('je cherche une villa ',()=>{
    HousePage.SearchVilla("Villa Cathérila")
} )
Then ('je dois vérifier que je suis rederigé vers la page intitulée {string}',()=>{

 })
 When ('je clique sur l\'onglet ressources',()=>{

 })
 Then ('je dois vérifier que je suis redirigé vers la page intitulée {string} ',()=>{

 })