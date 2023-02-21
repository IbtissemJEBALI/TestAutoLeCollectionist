Feature: Vérifier que je peux mettre à jour les photos
Description  Vérifier que je peux ajouter, supprimer, masquer ou publier des photos sur la page ressources d'une villa sur l'admin tool 

Scenario: Vérifier que je peux mettre à jour les photos
Given je suis sur la page de connexion de l’admin Tool
When je renseigne les identifiants de connexion
And je clique sur se connecter
Then je dois vérifier que je suis redirigé vers la page intitulée "houses" 
When je cherche une villa 
Then je dois vérifier que je suis rederigé vers la page intitulée "information" 
When je clique sur l'onglet ressources  
Then je dois vérifier que je suis redirigé vers la page intitulée "resources" 

