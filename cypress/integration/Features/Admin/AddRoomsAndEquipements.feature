Feature: Vérifier l'ajout des pièces et des équipements dans une maison 

En tant que gestionnaire, je dois pouvoir ajouter une pièce et lui associer des équipements.
En tant que gestionnaire, je dois pourvoir ajouter un espace exterieur et lui associer des équipements
En tant que gestionnaire, je dois pouvoir créer un nouveau groupe et lui associer des équipements 

Background:
Given Je suis sur la page de connexion de l’admin Tool
When Je renseigne les identifiants de connexion
And Je clique sur se connecter
Then Je dois vérifier que je suis redirigé vers la page intitulée "houses" 
When Je cherche une "villa" 
And Je clique sur la villa
Then Je dois vérifier que je suis rederigé vers la page intitulée "information" 
When Je clique sur l'onglet pièces et équipemnets  
Then Je dois vérifier que je suis redirigé vers la page intitulée "rooms" 


Scenario: Maison principale : Ajout d'une pièce et des équipements
When Je clique sur ajouter une pièce 
Then Je dois vérifier que je suis rederigé vers la page intitulée "area"
When Je clique sur le champ type pièces 
And Je sélectionne une pièce de type "Bureau"
And Je clique sur créer
Then Je dois vérifier que je suis redirigé vers la page intitulée "equipments" 
When Je clique ajouter un èquipement 
Then Je dois vérifier qu'un champ équipements est affiché 
When Je sélectionne un équipement de type "Table de Bureau"
And Je clique sur enregistrer
Then Je dois vérifier que la pièce "Bureau" ainsi la "Table de Bureau" s'affichent dans la page pièces et équipements
When Je clique sur édite 
Then Je dois vérifier que je suis rederigé vers la page intitulée "area"
When Je clique sur le champ équipement 
And Je clique sur enregistrer les modifications
Then Je dois vérifier que je suis redirigé vers la page intitulée "equipments" 
When Je clique ajouter un èquipement 
Then Je dois vérifier qu'un champ équipements est affiché 
When Je sélectionne un équipement de type "Imprimante"
And Je clique sur enregistrer
Then Je dois vérifier que la pièce "Bureau" ainsi la "Table de Bureau" et l'"Imprimante" s'affichent dans la page pièces et équipements
When Je clique sur supprimer
Then Je dois vérifier un message "Aucune pièce liée au groupe. " qui s'affiche dans la section mise en avant

Scenario: Espace exterieur : Ajout d'un espace et des équipements
When Je clique sur créer un espace
Then Je dois vérifier que je suis rederigé vers la page intitulée "area"
When Je sélectionne un espace de type "Cuisine professionnelle"
And Je clique sur créer
Then Je dois vérifier que je suis redirigé vers la page intitulée "equipments" 
When Je clique ajouter un èquipement 
Then Je dois vérifier qu'un champ équipements est affiché 
When Je sélectionne un équipement de type "Barbecue"
And Je clique sur enregistrer
Then Je dois vérifier que l'espace "Cuisine professionnelle" ainsi le "Barbecue" s'affichent dans la page pièces et équipements
When Je clique sur édite 
Then Je dois vérifier que je suis rederigé vers la page intitulée "area"
When Je clique sur le champ équipement 
And Je clique sur enregistrer les modifications
Then Je dois vérifier que je suis redirigé vers la page intitulée "equipments" 
When J'ajouter le nombre de l'équipement 
And Je clique sur enregistrer
Then Je dois vérifier que l'espace "Cuisine professionnelle" ainsi le "Barbecue" s'affichent dans la page pièces et équipements
When Je clique sur supprimer
Then Je dois vérifier un message "Aucun espace lié au groupe. " qui s'affiche dans la section extérieur 

Scenario: Groupe : Créer un nouveau groupe et ajouter des équipements 
When Je clique sur créer un groupe
Then Je dois vérifier qu'un champ "Créer un groupe" qui s'affichent 
When Je renseigne "Parking" le nom du groupe en français 
And Je renseigne "Car parc" le nom du groupe en anglais 
Then Je dois vérifier qu'une nouvelle section s'affiche 
When Je clique sur ajouter une pièce pour le nouveau groupe
Then Je dois vérifier que je suis rederigé vers la page intitulée "area"
When Je clique sur le champ type pièces 
And Je sélectionne une pièce de type "Dortoir"
And Je clique sur créer
Then Je dois vérifier que je suis redirigé vers la page intitulée "equipments" 
When Je clique ajouter un èquipement 
Then Je dois vérifier qu'un champ équipements est affiché 
When Je sélectionne un équipement de type "Chaise"
And Je clique sur enregistrer
Then Je dois vérifier que la pièce "Dortoir" ainsi la "Chaise" s'affichent dans la page pièces et équipements
When Je clique sur supprimer le groupe
Then Je dois vérifier un bouton créer un groupe s'affiche