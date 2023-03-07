import HousePage from "../../pagesObjectsAT/HousePage";
import InfoPage from "../../pagesObjectsAT/InfoPage";

//SC1 : Section 1 : Mise en avant
When ('Je clique sur editer dans la section mise en avant',()=>{
    InfoPage.ClickOnPromoteEditBTN()
})  
Then ('Je dois vérifier que la section s\'affiche en vue éditable',()=>{
    InfoPage.isPromoteSectionEditable()
}) 
When ('Je clique sur exclusivité',()=>{
   InfoPage.ClickOnExclusivityBTN()
}) 
And ('Je clique sur reservation en ligne',()=>{
   InfoPage.ClickOnOnlineReservation()
}) 
And ('J\'ajoute un score {string} à la maison',(score)=>{
    InfoPage.AddScore()
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
Then ('Je dois vérifier que le nombre de chambres {string}, le nombre de salles de bains {string} et la surface est {string} mètre renseigner précédemment s\'affiche dans la section informations maison',(bedrooms,bathrooms,surface)=>{
  InfoPage.isBedroomsNumberVisible(bedrooms)
  InfoPage.isBathroomsNumberVisible(bathrooms)
  //InfoPage.isSurfaceSizeVisible(surface)
})  
