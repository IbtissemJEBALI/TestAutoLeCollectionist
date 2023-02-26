import HousePage from "../../pagesObjectsAT/HousePage";
import ConnexionPage from "../../pagesObjectsAT/ConnexionPage";
import FinancePage from "../../pagesObjectsAT/FinancePage";
import SalesPage from "../../pagesObjectsAT/SalesPage";
import SalesOpenPage from "../../pagesObjectsAT/SalesOpenPage";
Given('Je suis sur la page de connexion de l\’admin Tool', ()=>{
    let baseURL=Cypress.config().baseUrl
    cy.visit(baseURL)
} )

When('Je renseigne les identifiants de connexion',()=>{
    ConnexionPage.FillEmail("ibtissem.jebali@lecollectionist.com")
    ConnexionPage.FillPassword("85Kk92C$mhr!")
} )

And ('Je clique sur se connecter',()=>{
    ConnexionPage.ClickOnConnexionBTN()
} ) 

Then ('Je dois vérifier que je suis redirigé vers la page intitulée {string}',(title)=>{
    HousePage.isHouseURLDisplayed(title)
})

When('Je clique sur l\'onglet finance',()=>{
    HousePage.clickOnFinanceBTN()
} )

Then ('Je dois vérifier que je suis redirigé vers la page intitulée {string}',(title)=>{
    FinancePage.isFinanceURLDisplayed(title)
})
When ('Je clique sur le bouton ventes',()=>{
    FinancePage.ClickOnSalesBTN()
})
Then ('Je dois vérifier que je suis redirigé vers la page intitulée {string}',(title)=>{
    SalesPage.isSalesURLDisplayed(title)

})
When ('Je clique sur la vente première vente',()=>{
    SalesPage.ClickOnSale()
})
Then ('Je dois vérifier que je suis redirigé vers la page intitulée {string}',(title)=>{
    SalesOpenPage.isSalesOpenURLDisplayed(title)
} ) 
And ('Je dois vérifier l’affichage des dates de signature du contrat',()=>{
    SalesOpenPage.IsContractDatesVisible()
} ) 