import { DetailsVillaPageConsts } from "./utilsLC/ConstantsLC";
import { getPath,isElementVisible} from "../functions/CommunFonctions";
import { recurse } from "cypress-recurse";
class DetailsVillaPage {
    static clickOnInformationRequestBTN(){
        cy.scrollTo('top');
        cy.wait(2000)
        getPath(DetailsVillaPageConsts.INFO_REQ_BTN).click()
    }
    static FillFirstName(FirstName){
        getPath(DetailsVillaPageConsts.FIRSTNAME_BOX).type(FirstName)
    }
    static FillLastName(LastName){
        getPath(DetailsVillaPageConsts.LASTNAME_BOX).type(LastName)
    }
    static FillEmail(Email){
        getPath(DetailsVillaPageConsts.EMAIL_BOX).type(Email)
    }
    static FillPhone(Phone){
        getPath(DetailsVillaPageConsts.PHONE_BOX).type(Phone)
    }
    static clickOnSendRequestBTN(){
        cy.scrollTo('top');
        getPath(DetailsVillaPageConsts.SEND_REQUEST_BTN).click()
    }
    static isVillaPageURLDisplayed(title){
        checkURL(title)   
    }
    static ClickOnDateField (){
        getPath(DetailsVillaPageConsts.DATE_FIELD).click()
    }
   
    static isRequestSentispalyed(){
        isElementVisible(DetailsVillaPageConsts.REQUEST_SENT)
    }
    static isRequestSentMsgispalyed(){
        isElementVisible(DetailsVillaPageConsts.REQUEST_SENT_MESSAGE)
    }
    static ClickOnVillaDateField(){
        getPath(DetailsVillaPageConsts.DATES_FIELD_VILLA).click()
    }
    static SetVillaDate(month,arrivalDate,departureDate){
        recurse(
            () =>  getPath(DetailsVillaPageConsts.MONTH_NAME).invoke("text"),
            (n) => {
                if (!n.includes(month)) {
                    cy.debug("month found")
                    getPath(DetailsVillaPageConsts.NEXT_MONTH_BTN_VILLA).click();
                  return false;
                }             
                return true;
              }, 
                {
                delay: 500, // delay before next iteration, ms
                limit: 48,
              }
        );
        cy.get('[data-testid=day-'+arrivalDate+']', { force: true }).click({ multiple: true })                 
        cy.get('[data-testid=day-'+departureDate+']', { force: true }).click({ multiple: true })     
    }
    
}
export default DetailsVillaPage;