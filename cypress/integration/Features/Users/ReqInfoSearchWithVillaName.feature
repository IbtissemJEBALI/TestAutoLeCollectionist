Feature: Recherche une villa  
Faire une recherche et une demande de renseignements d'une maison 


Scenario Outline: Faire une recherche et une demande de renseignements d'une maison
Given Je suis sur la page d'acceuil
When Je cherche une villa "<villa>"
Then Je dois vérifier que je suis rederigé vers la page intitulée "location-luxe"
When Je fait une recherche pour le mois d'"<mois>", avec une date de départ du "<arrivalDate>" au "<departureDate>"
And Je clique sur demande de renseignements
And Je renseigne l'ensemble des informations le "<nom>" le "<prenom>" l'"<email>" et le "<numero>"
And Je clique sur envoyer ma demande
Then Je dois vérifier l'affichage d'un message indiquant que la demande a été envoyé


  Examples:
    | villa           | mois  | arrivalDate | departureDate | budget | nom  | prenom | email            | numero     |
    | Villa Cathérila | Août  | 2023-08-05  | 2023-08-19    | 60000  | Test | QA     | testqa@gmail.com | 0600000001 |