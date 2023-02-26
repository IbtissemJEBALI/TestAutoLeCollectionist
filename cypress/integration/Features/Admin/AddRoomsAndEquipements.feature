Feature: Vérifier l'ajout des pièces et des équipements dans une maison
Description  Vérifier que je peux ajouter des pièces ainsi leurs équipements dans une maison depuis l'Admin Tool 

Scenario: Vérifier l'ajout des pièces et des équipements 
Given Je suis sur la page de connexion de l’admin Tool
When Je renseigne les identifiants de connexion
And Je clique sur se connecter
Then Je dois vérifier que je suis redirigé vers la page intitulée "houses" 
When Je cherche une "villa" 
And Je clique sur la villa
Then Je dois vérifier que je suis rederigé vers la page intitulée "information" 
When Je clique sur l'onglet pièces et équipemnets  
Then Je dois vérifier que je suis redirigé vers la page intitulée "rooms" 
When Je clique sur ajouter une pièce 
Then Je dois vérifier que je suis rederigé vers la page intitulée "area"
When Je clique sur le champ type pièces 
And Je sélectionne une pièce de type "Bureau"
And Je clique sur créer
Then Je dois vérifier que je suis redirigé vers la page intitulée "equipments" 
When Je Clique ajouter un èquipement 
Then Je dois vérifier qu'un champ équipements est affiché 
When Je sélectionne un équipement de type "Table de Bureau"
And Je clique sur enregistrer
Then Je dois vérifier que la pièce "Bureau" ainsi la "Table de Bureau" s'affichent dans la page pièces et équipements
And Je supprime la pièce ajoutée
