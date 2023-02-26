import HomePage from "../../pagesObjetsLC/HomePage";
import OurLuxuryVillaAndChaletsPage from "../../pagesObjetsLC/OurLuxuryVillaAndChaletsPage";
import DetailsVillaPage from "../../pagesObjetsLC/DetailsVillaPage";

Given('Je suis sur la page d\'acceuil', ()=>{
    let baseURL=Cypress.config().baseUrl
   //cy.visit(baseURL)
    cy.visit(baseURL, {
        auth: {
            username: 'lecollectionist',
            password: 'lecollectionis-t',
        }
    });
} )
When('Je cherche la destination {string}', (destination)=>{
    HomePage.typeDestination(destination)
    HomePage.clickOnSearchBTN()
} )
Then('Je dois vérifier que je suis rederigé vers la page intitulée {string}', (title)=>{
    OurLuxuryVillaAndChaletsPage.GetPageTitle(title)
} )
When('Je fait une recherche pour le mois d\'{string}, avec une date de départ du {string} au {string}', (month,arrivalDate,departureDate)=>{
    OurLuxuryVillaAndChaletsPage.clickOnDatesField()
    OurLuxuryVillaAndChaletsPage.SetDate(month,arrivalDate,departureDate)
} )
And('Je définie le budget maximal de {string}', (budget)=>{
    OurLuxuryVillaAndChaletsPage.FillMaximumBudget(budget)
    OurLuxuryVillaAndChaletsPage.clickOnApplyBTN()
} )
And('J\'applique le filtrage {string}', (filtrageType)=>{
    OurLuxuryVillaAndChaletsPage.chooseFilterType(filtrageType)
} )
Then('Je dois vérifier que le nombre de résultat s\'affiche', ()=>{
    OurLuxuryVillaAndChaletsPage.isVillaDisplayed()
} )
And('Je sélectionne la première maison qui s\'affiche', ()=>{
   OurLuxuryVillaAndChaletsPage.selectFirstVillaOnSameTab()

} )
And('Je clique sur demande de renseignements', ()=>{
    DetailsVillaPage.clickOnInformationRequestBTN()
} )
And('Je renseigne l\'ensemble des informations le {string} le {string} l\'{string} et le {string}', (nom,prenom,email,numero)=>{
    DetailsVillaPage.FillFirstName(prenom)
    DetailsVillaPage.FillLastName(nom)
    DetailsVillaPage.FillEmail(email)
    DetailsVillaPage.FillPhone(numero)
} )
And('Je clique sur envoyer ma demande', ()=>{
    DetailsVillaPage.clickOnSendRequestBTN()
} )
Then('Je dois vérifier l\'affichage d\'un message indiquant que la demande a été envoyé', ()=>{
    DetailsVillaPage.isRequestSentispalyed()
    DetailsVillaPage.isRequestSentMsgispalyed()
   
} )