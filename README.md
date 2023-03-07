# Description :

This projet allow to test the leCollectionist platform web 

### link in to LeCollectionist in staging : https://admintool-staging.lecollectionist.com ###

### link in to AdminTool in staging : https://admintool-staging.lecollectionist.com ###

### link in to LeCollectionist in Prod : http://www.lecollectionist.com ###

### link in to AdminTool in prod : https://admintool.lecollectionist.com ###

### Configuration and prerequisites ###

 # Cypress #
### How to use project ###

# Step1

Install Node.js
Link to install node.js : https://nodejs.org/en/download/

How to verify if node and npm are installed

    - npm --version
    - node --version 

# Step2

Install Visual Studio Code
Link to install isual Studio Code : https://code.visualstudio.com/download

# Step3

Clone repository form in your local workspace 

    - git clone https://github.com/IbtissemJEBALI/TestAutoLeCollectionist

# Step4

Open the folder in VS Code. And open your terminal under the worksapce 

# Step5 : This step is mondatory to be able to run tests

Open VS Code terminal and run this commands  : 

    - npm init : uniquement pour un nouveau projet from scratch 
    - npm install : uniquement à faire pour un nouvau projet from scratch
    - npm install --save-dev cypress@8.7.0 : Cypress version used : 8.7.0
    - npx cypress open : ouvir cypress pour finaliser l'installation
    - npm install --save-dev cypress-cucumber-preprocessor 
    - npm install -D cypress-xpath
    - npm i -D cypress-recurse
    - npm install multiple-cucumber-html-reporter --save-dev 

# Step6 : How to run tests ?

Opening cypress without configuration : 

    - npx cypress open 

Opening cypress with configuration : 

    - Staging LC : npx cypress open --config-file Cypress/ConfigsFiles/Users/lc-staging.json
    - Staging AT : npx cypress open --config-file Cypress/ConfigsFiles/Admin/admintool-staging.json

    - Prod LC : npx cypress open --config-file Cypress/ConfigsFiles/Users/lc-prod.json
    - Prod AT : npx cypress open --config-file Cypress/ConfigsFiles/Admin/admintool-prod.json

Launching Cypress without opening it :

    - Staging LC : npx cypress run --config-file Cypress/ConfigsFiles/Users/lc-staging.json
    - Staging AT : npx cypress run --config-file Cypress/ConfigsFiles/Admin/admintool-staging.json

    - Prod LC : npx cypress run --config-file Cypress/ConfigsFiles/Users/lc-prod.json
    - Prod AT : npx cypress run --config-file Cypress/ConfigsFiles/Admin/admintool-prod.json



# Step7 : How generate report : Cucumber Report 

Run this command using the terminal under the project workspace : 

    - node .\cucumber-html-report.js