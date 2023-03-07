function getPath(path) {
    if(path.includes("//")){
        return cy.xpath(path)
    }else{
        return cy.get(path)
    }
 }

 function checkURL(URL){
    cy.url().should('include', URL)
 }
 function isElementVisible(element){
    getPath(element).should('be.visible')
 }
 function isTextVisible(element,txt){
    getPath(element).should("have.text",txt);
 }
 function isTextContain(element,txt){
   getPath(element).should("contain",txt);
}


export  {getPath,checkURL,isElementVisible,isTextVisible,isTextContain}