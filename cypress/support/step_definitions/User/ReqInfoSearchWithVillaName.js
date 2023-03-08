import DetailsVillaPage from "../../pagesObjetsLC/DetailsVillaPage";
import HomePage from "../../pagesObjetsLC/HomePage";

Given ('Je suis sur la page d\'acceuil',()=>{
    let baseURL=Cypress.config().baseUrl
    cy.visit(baseURL, {
        auth: {
            username: Cypress.env().username,
            password: Cypress.env().password,
        }
    });

}) 
When('Je cherche une villa {string}',(villa)=>{
   HomePage.typeVillaName(villa)
   HomePage.clickOnSearchBTN()

}) 
Then ('Je dois vérifier que je suis rederigé vers la page intitulée {string}',(title)=>{
  DetailsVillaPage.isVillaPageURLDisplayed(title)
}) 
When ('Je fait une recherche pour le mois d\'{string}, avec une date de départ du {string} au {string}',(month,arrivalDate,departureDate)=>{
   DetailsVillaPage.ClickOnVillaDateField()
   DetailsVillaPage.SetVillaDate(month,arrivalDate,departureDate)

}) 
And ('Je clique sur demande de renseignements',()=>{
   DetailsVillaPage.clickOnInformationRequestBTN()
}) 
And ('Je renseigne l\'ensemble des informations le {string} le {string}l\'{string} et le {string}',(nom,prenom,email,numero)=>{
    DetailsVillaPage.FillFirstName(prenom)
    DetailsVillaPage.FillLastName(nom)
    DetailsVillaPage.FillEmail(email)
    DetailsVillaPage.FillPhone(numero)
   
}) 
And ('Je clique sur envoyer ma demande',()=>{
    DetailsVillaPage.clickOnSendRequestBTN()
}) 
Then ('Je dois vérifier l\'affichage d\'un message indiquant que la demande a été envoyé',()=>{
    DetailsVillaPage.isRequestSentispalyed()
    DetailsVillaPage.isRequestSentMsgispalyed()
}) 
