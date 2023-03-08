Feature: Connexion au site Le Collectionist 
Se connecter sur le site Le Collectionist 

Scenario Outline: Se connecter sur le site Le Collectionsit avec des identifiants valides 
Given Je suis sur la page d'accueil du site Le Collectionsit
When Je clique sur le bouton profil présent sur la barre de navigation 
Then Je dois vérifier que je suis rederigé vers la page intitulée "lecollectionist.com"
When Je renseigne mon "<email>" de connexion
And Je clique sur suivant 
When Je renseigne le "<password>" de connexion
And Je clique sur connexion 
Then Je dois vérifier l'affichage de mon "<email>" dans la section mon compte 
And Je dois vérifier l'affichage d'un bouton se déconnecter en bas de la page 
And Je dois vérifier l'affichage d'une icone check verte sur le profil

Examples:
| email                               | password    |
| ibtissem.jebali@lecollectionist.com | Testvilla123|