Feature: Vérifier l'affichage des date de signature de contrat sur les détails de la vente 
Description Vérifier que les dates s’affichent à droite du lien pdf pour les contrats propriétaire et client 

Scenario:  Vérifier l'affichage des dates de signature de contrats
Given Je suis sur la page de connexion de l’admin Tool
When Je renseigne les identifiants de connexion
And Je clique sur se connecter
Then Je dois vérifier que je suis redirigé vers la page intitulée "houses" 
When Je clique sur l'onglet finance
Then Je dois vérifier que je suis redirigé vers la page intitulée "payins-to-assign"
When Je clique sur le bouton ventes
Then Je dois vérifier que je suis redirigé vers la page intitulée "sales-open"
When Je clique sur la vente première vente
Then Je dois vérifier que je suis redirigé vers la page intitulée "sales"    
And Je dois vérifier l’affichage des dates de signature du contrat