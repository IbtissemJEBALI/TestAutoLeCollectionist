Feature: Éditer les sections de la page infos d'une maison depuis l'Admin Tool
Description   Éditer les sections de la page infos d'une maison depuis l'Admin Tool


Background:
Given Je suis sur la page de connexion de l’admin Tool
When Je renseigne les identifiants de connexion
And Je clique sur se connecter
Then Je dois vérifier que je suis redirigé vers la page intitulée "houses" 
When Je cherche une "villa" 
And Je clique sur la villa
Then Je dois vérifier que je suis rederigé vers la page intitulée "information" 

Scenario: Section 1 : Mise en avant
When Je clique sur editer dans la section mise en avant 
Then Je dois vérifier que la section s'affiche en vue éditable
When Je clique sur exclusivité
And Je clique sur reservation en ligne
And J'ajoute un score "50" à la maison 
And Je clique sur enregistrer
Then Je dois vérifier que le score "50" renseigner précédemment s'affiche dans la section mise en avant

Scenario: Section 2 : Informations maison 
When Je clique sur editer dans la section information maison 
Then Je dois vérifier que la section s'affiche en vue éditable
When Je clique sur les catégories de la maison 
And Je renseigne le nombre de chambres est "5"
And Je renseigne le nombre de salles de bains est "3"
And Je renseigne la surface est "550" mètre
And Je clique sur enregistrer 
Then Je dois vérifier que le nombre de chambres "5", le nombre de salles de bains "3" et la surface est "550" mètre renseigner précédemment s'affichent dans la section informations maison 

Scenario: Section 3 : Informations complémentaire
When Je clique sur editer dans la section information complémentaire
Then Je dois vérifier que la section s'affiche en vue éditable
When Je clique sur adapté aux personnes à mobilité réduite
And J'ajoute un commentaire "Des espaces de passages larges pour les fauteuils roulants"
And Je clique sur autre
And J'ajout un commentaire "Services d'aide aux repas et d'accompagnements"
And Je clique sur enregistrer
Then Je dois vérifier que les commentaires "Des espaces de passages larges pour les fauteuils roulants" et "Services d'aide aux repas et d'accompagnements" s'affichent dans la section mise en avant

Scenario: Section 4 : Évènements
When Je clique sur editer dans la section Évènements
Then Je dois vérifier que la section s'affiche en vue éditable
When Je clique sur adapté aux événements
And J'ajoute "20" le nombre maximal de personnes autorisées sur le lieu
And Je coche le type d'évènements
And Je clique sur enregistrer
Then Je dois vérifier que "20" le nombre maximal de personnes s'affiche dans la section Évènements

Scenario: Section 5 : Services inclus
When Je clique sur editer dans la section Services inclus
Then Je dois vérifier que la section s'affiche en vue éditable
When J'ajoute les types de transfert
And J'ajoute les types de personels
And J'ajoute les types de repas 
And J'ajoute les types de boissons
And J'ajoute les types de services à l'arrivée
And J'ajoute les types de services au quotidien
And J'ajoute les libres accées 
And Je clique sur enregistrer