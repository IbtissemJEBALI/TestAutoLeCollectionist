import HousePage from "../../pagesObjectsAT/HousePage";
import ConnexionPage from "../../pagesObjectsAT/ConnexionPage";
import InfoPage from "../../pagesObjectsAT/InfoPage";
import PiecesAndEquipementPage from "../../pagesObjectsAT/PiecesAndEquipementPage";

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
When('Je cherche une {string}',(villa)=>{
    HousePage.SearchVilla("Villa Cathérila")
} )
And ('Je clique sur la villa',()=>{
    HousePage.ClickOnVilla()
    
})
Then ('Je dois vérifier que je suis rederigé vers la page intitulée {string}',(title)=>{
    InfoPage.isInfoPageURLDisplayed(title)
 })

When ('Je clique sur l\'onglet pièces et équipemnets',()=>{
    InfoPage.clickOnPiecesAndEquipementOnglet()

})  
Then ('Je dois vérifier que je suis redirigé vers la page intitulée {string}',()=>{
    PiecesAndEquipementPage.isPiecesAndEquipementPageURLDisplayed()

})
When ('Je clique sur ajouter une pièce',()=>{
    PiecesAndEquipementPage.ClickOnAddRoomsBTN()
}) 
Then ('Je dois vérifier que je suis rederigé vers la page intitulée {string}',(title)=>{
    PiecesAndEquipementPage.isRoomsPageURLDisplayed(title)
}) 
When ('Je clique sur le champ type pièces',()=>{
    PiecesAndEquipementPage.ClickOnRoomsTypeBTN()

})  
And ('Je sélectionne une pièce de type {string}',(room)=>{
    PiecesAndEquipementPage.SearchOfficeRoom(room)
}) 
And ('Je clique sur créer',()=>{
    PiecesAndEquipementPage.ClickOnCreateBTN()
})  
Then ('Je dois vérifier que je suis redirigé vers la page intitulée {string}',(title)=>{
    PiecesAndEquipementPage.isEquipementsPageURLDisplayed(title)
})  
When ('Je Clique ajouter un èquipement',()=>{
    PiecesAndEquipementPage.ClickOnAddEquipementBTN()

})   
Then ('Je dois vérifier qu\'un champ équipements est affiché',()=>{
    PiecesAndEquipementPage.isEquipementBoxDispalyed()
})  
When ('Je sélectionne un équipement de type {string}',(equipement)=>{
    PiecesAndEquipementPage.SearchEquipement(equipement)

})  
And ('Je clique sur enregistrer',()=>{
    PiecesAndEquipementPage.ClickOnSaveBTN()
})  
Then ('Je dois vérifier que la pièce {string} ainsi la {string} s\'affichent dans la page pièces et équipements',(room,equipement)=>{
    PiecesAndEquipementPage.isRoomAndEquipementVisible(room,equipement)
})  
And ('Je supprime la pièce ajoutée',()=>{
    PiecesAndEquipementPage.ClickOnDeletePiece()
})  


