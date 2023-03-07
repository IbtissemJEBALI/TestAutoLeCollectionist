import HousePage from "../../pagesObjectsAT/HousePage";
import ConnexionPage from "../../pagesObjectsAT/ConnexionPage";
import FinancePage from "../../pagesObjectsAT/FinancePage";
import SalesPage from "../../pagesObjectsAT/SalesPage";
import SalesOpenPage from "../../pagesObjectsAT/SalesOpenPage";


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