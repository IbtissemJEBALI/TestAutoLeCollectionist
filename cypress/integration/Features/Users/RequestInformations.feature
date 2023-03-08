Feature: Recherche d'une villa à partir une déstination 
Faire une recherche et une demande de renseignements d'une maison à partir une déstination

Scenario Outline: Faire une recherche et une demande de renseignements d'une maison à partir une déstination
Given Je suis sur la page d'acceuil
When Je cherche la destination "<destination>"
Then Je dois vérifier que je suis rederigé vers la page intitulée "recherche"
When Je fait une recherche pour le mois d'"<mois>", avec une date de départ du "<arrivalDate>" au "<departureDate>"
And Je définie le budget maximal de "<budget>"
And J'applique le filtrage 'Nombre de chambres croissant'
Then Je dois vérifier que le nombre de résultat s'affiche
And Je sélectionne la première maison qui s'affiche
And Je clique sur demande de renseignements
And Je renseigne l'ensemble des informations le "<nom>" le "<prenom>" l'"<email>" et le "<numero>"
And Je clique sur envoyer ma demande
Then Je dois vérifier l'affichage d'un message indiquant que la demande a été envoyé


  Examples:
    | destination       | mois  | arrivalDate | departureDate | budget | nom  | prenom | email            | numero     |
    | Saint Tropez      | Août  | 2023-08-05  | 2023-08-19    | 60000  | Test | QA     | testqa@gmail.com | 0600000001 |