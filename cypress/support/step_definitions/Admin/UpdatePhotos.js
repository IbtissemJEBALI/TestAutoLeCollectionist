import HousePage from "../../pagesObjectsAT/HousePage";
import ConnexionPage from "../../pagesObjectsAT/ConnexionPage";
import InfoPage from "../../pagesObjectsAT/InfoPage";
import RessourcesPage from "../../pagesObjectsAT/RessourcesPages";


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
 When ('Je clique sur l\'onglet ressources',()=>{
    InfoPage.clickOnRessourcesOnglet()
 })
 Then ('Je dois vérifier que je suis redirigé vers la page intitulée {string} ',(title)=>{
    RessourcesPage.isRessourcesPageURLDisplayed(title)
 })
 
When ('J\'ajoute des photos' ,()=>{
    RessourcesPage.ClickOnSelectFile()
   
})
Then ('Je dois vérifier que les photos ajoutées sont affichés au-dessous',()=>{
   
}) 
When ('Je supprime des photos',()=>{
   //RessourcesPage.DeletePhotos()
}) 
Then ('Je dois vérifier que les photos ne sont plus visibles sur la page',()=>{
   
})  
When ('Je masque une photo',()=>{
   //RessourcesPage.ClickOnHidePhoto()
})  
Then ('Je dois vérifier que la photo est masquée',()=>{
   
})  
When ('Je publie une photo',()=>{
   //RessourcesPage.ClickOnPublishPhoto()
})  
Then ('Je dois vérifier que la photo est publiée',()=>{
   
})  
When ('Je déplace des photos',()=>{
   
}) 
Then ('Je dois vérifier que les photos sont dans l\'ordre',()=>{
   
}) 
When ('Je déplace une photo en première position et je rafraichis la page',()=>{
   
})
Then ('Je dois vérifier que la photo est affiché comme une photo de couverture',()=>{
   
})
