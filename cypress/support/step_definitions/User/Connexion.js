import ConnexionPage from "../../pagesObjetsLC/ConnexionPage";
import HomePage from "../../pagesObjetsLC/HomePage";
import ProfilPage from "../../pagesObjetsLC/ProfilPage";

Given ('Je suis sur la page d\'accueil du site Le Collectionsit',()=>{
    let baseURL=Cypress.config().baseUrl
    //cy.visit(baseURL)
    cy.visit(baseURL, {
    auth: {
        username: 'lecollectionist',
        password: 'lecollectionis-t',
    }
});
} )
When ('Je clique sur le bouton profil présent sur la barre de navigation' ,()=>{
    HomePage.ClickOnProfilBTN()
} )
Then ('Je dois vérifier que je suis rederigé vers la page intitulée {string}',(title)=>{
   // ConnexionPage.isConnexionURLDisplayed(title)
} )
When ('Je renseigne mon {string} de connexion',(email)=>{
   ConnexionPage.FillEmail(email)
} )
And ('Je clique sur suivant' ,()=>{
    ConnexionPage.ClickOnNextBTN()
} )
When ('Je renseigne le {string} de connexion',(password)=>{
    ConnexionPage.FillPasword(password)
} )
And ('Je clique sur connexion',()=>{
   ConnexionPage.ClickOnConnecxinBTN()
} )
Then ('Je dois vérifier l\'affichage de mon {string} dans la section mon compte',(email)=>{
    ProfilPage.isEmailAccountDisplayed(email)
   
} )
And ('Je dois vérifier l\'affichage d\'un bouton se déconnecter en bas de la page' ,()=>{
    ProfilPage.isDisconnectBTNDisplayed();
})
And ('Je dois vérifier l\'affichage d\'une icone check verte sur le profil' ,()=>{
    ProfilPage.isGreenCheckDispalyed()
})


