Feature: Vérifier l'affichage des date de signature de contrat sur les détails de la vente 
Description Vérifier que les dates s’affichent à droite du lien pdf pour les contrats propriétaire et client 

Scenario:  Vérifier l'affichage des dates de signature de contrats
Given je suis sur la page de connexion de l’admin Tool
When je renseigne les identifiants de connexion
And je clique sur se connecter
Then je dois vérifier que je suis redirigé vers la page intitulée "houses" 
When je clique sur l'onglet finance
Then je dois vérifier que je suis redirigé vers la page intitulée "payins-to-assign"
When je clique sur le bouton ventes
Then je dois vérifier que je suis redirigé vers la page intitulée "sales-open"
When je clique sur la vente première vente
Then je dois vérifier que je suis redirigé vers la page intitulée "sales"    
And je dois vérifier l’affichage des dates de signature du contrat