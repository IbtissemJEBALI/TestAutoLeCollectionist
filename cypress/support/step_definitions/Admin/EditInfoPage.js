import InfoPage from "../../pagesObjectsAT/InfoPage";

//SC1 : Section 1 : Mise en avant
When ('Je clique sur editer dans la section mise en avant',()=>{
    InfoPage.ClickOnPromoteEditBTN()
})  
Then ('Je dois vérifier que la section s\'affiche en vue éditable',()=>{
    InfoPage.isSectionEditable()
}) 
When ('Je clique sur exclusivité',()=>{
   InfoPage.ClickOnExclusivityBTN()
}) 
And ('Je clique sur reservation en ligne',()=>{
   InfoPage.ClickOnOnlineReservation()
}) 
And ('J\'ajoute un score {string} à la maison',(score)=>{
    InfoPage.AddScore(score)
}) 
And ('Je clique sur enregistrer',()=>{
    InfoPage.ClickOnSavePromoteSection()
}) 
Then ('Je dois vérifier que le score {string} renseigner précédemment s\'affiche dans la section mise en avant',(score)=>{
    InfoPage.isHouseScoreVisible(score)
}) 

//SC2 : Section 2 : Informations maison 
When ('Je clique sur editer dans la section information maison',()=>{
  InfoPage.ClickOnEditHouseInfomationBTN()
}) 
When ('Je clique sur les catégories de la maison',()=>{
  InfoPage.ClickOnHouseCategoriesCheckBox()
})  
And ('Je renseigne le nombre de chambres est {string}',(bedrooms)=>{
  InfoPage.AddBedroomsNumber(bedrooms)
}) 
And ('Je renseigne le nombre de salles de bains est {string}',(bathrooms)=>{
  InfoPage.AddBathroomsNumber(bathrooms)
}) 
And ('Je renseigne la surface est {string} mètre',(surface)=>{
  InfoPage.AddSurfaceNumber(surface)
}) 
Then ('Je dois vérifier que le nombre de chambres {string}, le nombre de salles de bains {string} et la surface est {string} mètre renseigner précédemment s\'affichent dans la section informations maison',(bedrooms,bathrooms,surface)=>{
  InfoPage.isBedroomsNumberVisible(bedrooms)
  InfoPage.isBathroomsNumberVisible(bathrooms)
  //InfoPage.isSurfaceSizeVisible(surface)
})  

//SC3 : Section 3 : information complémentaire  
When('Je clique sur editer dans la section information complémentaire',()=>{
    InfoPage.ClickOnEditFurtherInformation()
}) 
When ('Je clique sur adapté aux personnes à mobilité réduite',()=>{
    InfoPage.ClickOnSuitableForDesableBTN()
}) 
And ('J\'ajoute un commentaire {string}',(commentaire1)=>{
    InfoPage.AddSuitableForDesableComment(commentaire1)
}) 
And ('Je clique sur autre',()=>{
    InfoPage.ClickOnLiveStaffBTN()
}) 
And ('J\'ajout un commentaire {string}',(commentaire2)=>{
    InfoPage.AddLiveStaffComment(commentaire2)
}) 
Then ('Je dois vérifier que les commentaires {string} et {string} s\'affichent dans la section mise en avant',(commentaire1,commentaire2)=>{
    InfoPage.isCommentVisible(commentaire1,commentaire2)
}) 

//SC4 : Section 4 : Évènements
When ('Je clique sur editer dans la section Évènements',()=>{
    InfoPage.ClickOnEditEventSection() 
}) 
When ('Je clique sur adapté aux événements',()=>{
    InfoPage.ClickOnSuitableForEventBTN()
}) 
And ('J\'ajoute {string} le nombre maximal de personnes autorisées sur le lieu',(max_number)=>{
    InfoPage.AddMaxNumberOfPeople(max_number)
}) 
And ('Je coche le type d\'évènements',()=>{
    InfoPage.ClickOnTypeOfEvent()
}) 
Then ('Je dois vérifier que {string} le nombre maximal de personnes s\'affiche dans la section Évènements',(max_number)=>{
    InfoPage.isMaxNumberOfPeopleVisible(max_number)
}) 
And ('J\'annule les modifications',()=>{
    InfoPage.IngnorModification()

}) 

//SC5: Section 5 : Services inclus
When ('Je clique sur editer dans la section Services inclus',()=>{
    InfoPage.ClickOnEditIncludedService()
})
Then ('Je dois vérifier que la section services inclus s\'affiche en vue éditable',()=>{
    InfoPage.isIncludedServicesSectionEditable()
}) 
When ('J\'ajoute les types de transfert',()=>{
    InfoPage.AddShiftsType()
}) 
And ('J\'ajoute les types de personels',()=>{
    InfoPage.AddStaffServices()
}) 
And ('J\'ajoute les types de repas',()=>{
    InfoPage.AddMealServices()
}) 
And ('J\'ajoute les types de services à l\'arrivée',()=>{
    InfoPage.AddWelcomingPack
}) 
And ('J\'ajoute les types de services au quotidien',()=>{
    InfoPage.AddDailyServices()
}) 
And ('J\'ajoute les libres accées',()=>{
    InfoPage.AddFreeAccessServices()
    
})  