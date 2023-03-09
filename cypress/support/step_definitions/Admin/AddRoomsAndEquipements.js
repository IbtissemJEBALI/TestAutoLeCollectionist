import HousePage from "../../pagesObjectsAT/HousePage";
import InfoPage from "../../pagesObjectsAT/InfoPage";
import PiecesAndEquipementPage from "../../pagesObjectsAT/PiecesAndEquipementPage";

//SC1 : "Maison principale : Ajout d'une pièce et des équipements"
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
    PiecesAndEquipementPage.SearchRoom(room)
}) 
And ('Je clique sur créer',()=>{
    PiecesAndEquipementPage.ClickOnCreateBTN()
})  
Then ('Je dois vérifier que je suis redirigé vers la page intitulée {string}',(title)=>{
    PiecesAndEquipementPage.isEquipementsPageURLDisplayed(title)
})  
When ('Je clique ajouter un èquipement',()=>{
    PiecesAndEquipementPage.ClickOnAddEquipementBTN()

})   
Then ('Je dois vérifier qu\'un champ équipements est affiché',()=>{
    PiecesAndEquipementPage.isEquipementBoxDispalyed()
})  
When ('Je sélectionne un équipement de type {string}',(equipement1)=>{
    PiecesAndEquipementPage.SearchEquipement(equipement1)
})  
And ('Je clique sur enregistrer',()=>{
    PiecesAndEquipementPage.ClickOnSaveBTN()
})  
Then ('Je dois vérifier que la pièce {string} ainsi la {string} s\'affichent dans la page pièces et équipements',(room,equipement1)=>{
    PiecesAndEquipementPage.isRoomVisible(room);
    PiecesAndEquipementPage.isEquipementVisible(equipement1)
})  
When ('Je clique sur édite',()=>{
    PiecesAndEquipementPage.ClickOnEditeBTN()
}) 
When ('Je clique sur le champ équipement',()=>{
    PiecesAndEquipementPage.ClickOnAddEquipementField()
})
And ('Je clique sur enregistrer les modifications',()=>{
    PiecesAndEquipementPage.ClickOnSaveModificationBTN()
    })
And ('Je clique sur enregistrer',()=>{
    PiecesAndEquipementPage.ClickOnSaveBTN()
})
Then ('Je dois vérifier que la pièce {string} ainsi la {string} et l\'{string} s\'affichent dans la page pièces et équipements',(room,equipement1,equipement2)=>{
    PiecesAndEquipementPage.isRoomVisible(room);
    PiecesAndEquipementPage.isEquipementVisible(equipement1)
    PiecesAndEquipementPage.isEquipementVisible(equipement2)
})
When ('Je clique sur supprimer',()=>{
    PiecesAndEquipementPage.ClickOnDeletePiece()
})
Then ('Je dois vérifier un message {string} qui s\'affiche dans la section mise en avant',(message)=>{
    PiecesAndEquipementPage.isEmptyRoomMsgVisible(message)
    
})


//SC2 : "Espace exterieur : Ajout d'un espace et des équipements"
When ('Je clique sur créer un espace',()=>{
    PiecesAndEquipementPage.ClickOnCreateSpaceBTN()
} ) 
When ('Je sélectionne un espace de type {string}',(space)=>{
    PiecesAndEquipementPage.SearchSpace(space)
} ) 
When ('Je clique sur le champ type d\'espace',()=>{
    PiecesAndEquipementPage.ClickOnRoomsTypeBTN()
} ) 
Then ('Je dois vérifier que l\'espace {string} ainsi le {string} s\'affichent dans la page pièces et équipements',(space,equipement1)=>{
    PiecesAndEquipementPage.isSpaceVisible(space);
    PiecesAndEquipementPage.isEquipementVisible(equipement1)
    
})
When ('J\'ajouter le nombre de l\'équipement',()=>{
    PiecesAndEquipementPage.AddEquipementNumber()
})
Then ('Je dois vérifier un message {string} qui s\'affiche dans la section extérieur',(message)=>{
    PiecesAndEquipementPage.isEmptySpaceMsgVisible(message)
    
})

//SC3 : "Nouveau groupe : Ajout d'un nouveau group et des équipements"
When ('Je clique sur créer un groupe',()=>{
    PiecesAndEquipementPage.ClickOnCreateNewGRoupBTN()
})
Then ('Je dois vérifier qu\'un champ {string} qui s\'affichent',(field)=>{
    PiecesAndEquipementPage.isCreateGroupFieldVisible(field)
}) 
When ('Je renseigne {string} le nom du groupe en français',(fr_name)=>{
    PiecesAndEquipementPage.AddFrNameGroup(fr_name)
}) 
And ('Je renseigne {string} le nom du groupe en anglais',(En_name)=>{
    PiecesAndEquipementPage.AddEnNameGroup(En_name)
    PiecesAndEquipementPage.ClickOnSaveGroup()
}) 
Then ('Je dois vérifier qu\'une nouvelle section s\'affiche',()=>{
    PiecesAndEquipementPage.isNewGroupSectionDispalyed()
}) 
When ('Je clique sur ajouter une pièce pour le nouveau groupe',()=>{
     PiecesAndEquipementPage.ClickOnAddPieceGroup()
    
})
When ('Je clique sur supprimer le groupe',()=>{
   PiecesAndEquipementPage.ClickOnEditGroupBTN()
   PiecesAndEquipementPage.ClickOnDeleteGroup()
   PiecesAndEquipementPage.ClickOnConfirmationDeleteGroup()  
})
Then ('Je dois vérifier un bouton créer un groupe s\'affiche',()=>{
    PiecesAndEquipementPage.isCreateGroupBTNDispalyed()
})