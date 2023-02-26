Feature: Vérifier que je peux mettre à jour les photos
Description  Vérifier que je peux ajouter, supprimer, masquer ou publier des photos sur la page ressources d'une villa sur l'admin tool 

Scenario: Vérifier que je peux mettre à jour les photos
Given Je suis sur la page de connexion de l’admin Tool
When Je renseigne les identifiants de connexion
And Je clique sur se connecter
Then Je dois vérifier que je suis redirigé vers la page intitulée "houses" 
When Je cherche une "villa" 
And Je clique sur la villa
Then Je dois vérifier que je suis rederigé vers la page intitulée "information" 
When Je clique sur l'onglet ressources  
Then Je dois vérifier que je suis redirigé vers la page intitulée "resources" 
When J'ajoute des photos 
Then Je dois vérifier que les photos ajoutées sont affichés au-dessous 
When Je supprime des photos 
Then Je dois vérifier que les photos ne sont plus visibles sur la page  
When Je masque une photo
Then Je dois vérifier que la photo est masquée
When Je publie une photo
Then Je dois vérifier que la photo est publiée
When Je déplace des photos 
Then Je dois vérifier que les photos sont dans l'ordre 
When Je déplace une photo en première position et je rafraichis la page 
Then Je dois vérifier que la photo est affiché comme une photo de couverture



