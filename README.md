# Description :

This projet allow to test the leCollectionist platform web 

### link in to LeCollectionist in staging : https://admintool-staging.lecollectionist.com ###

### link in to AdminTool in staging : https://admintool-staging.lecollectionist.com ###

### link in to LeCollectionist in Prod : http://www.lecollectionist.com ###

### link in to AdminTool in prod : https://admintool.lecollectionist.com ###

### Configuration and prerequisites ###

 # Cypress #
### How to use project localey ###

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
    - npm install cypress-multi-reporters --save-dev : Handle multiple reporter

# Step6 : How to run tests locally 

Opening cypress without configuration : 

    - npx cypress open 

Opening cypress with configuration : 

    - Staging LC : npx cypress open --config-file Cypress/ConfigsFiles/Users/lc-staging.json
    - Staging AT : npx cypress open --config-file Cypress/ConfigsFiles/Admin/admintool-staging.json

    - Prod LC : npx cypress open --config-file Cypress/ConfigsFiles/Users/lc-prod.json
    - Prod AT : npx cypress open --config-file Cypress/ConfigsFiles/Admin/admintool-prod.json

# Step7 : How to run tests in headless mode

Launching Cypress without opening it :

    - Staging LC : npx cypress run --config-file Cypress/ConfigsFiles/Users/lc-staging.json
    - Staging AT : npx cypress run --config-file Cypress/ConfigsFiles/Admin/admintool-staging.json

    - Prod LC : npx cypress run --config-file Cypress/ConfigsFiles/Users/lc-prod.json
    - Prod AT : npx cypress run --config-file Cypress/ConfigsFiles/Admin/admintool-prod.json

# Step8 : How to run tests with record 

    - npx cypress run --browser ${{ inputs.Browsers }} --record --key 2139fbe1-f1a3-4e23-b538-6cee30937272 --config-file cypress/ConfigsFiles/${{ inputs.Plateforme }}/${{ inputs.ConfigFiles }}

### How to use GitHub actions workflows ###

# Step1 : 

- Click on Actions >> .github/workflows/main.yml

<img width="1495" alt="Capture d’écran 2023-03-10 à 10 20 46" src="https://user-images.githubusercontent.com/125995511/224276527-2eb682b4-a430-43e2-b9f1-6a63fa6667f7.png">

# Step2 : 

- Click on Run workflow 

<img width="409" alt="Capture d’écran 2023-03-10 à 10 22 32" src="https://user-images.githubusercontent.com/125995511/224277112-97c00faf-4cf8-4ac4-8ba6-a60570de081d.png">


### How generate report : Cucumber Report ###

Run this command using the terminal under the project workspace : 

    - node .\cucumber-html-report.js