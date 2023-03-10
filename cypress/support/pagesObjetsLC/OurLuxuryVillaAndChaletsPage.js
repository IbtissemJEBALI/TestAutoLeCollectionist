import { getPath} from "../functions/CommunFonctions";
import { recurse } from "cypress-recurse";
import { OurLuxuryVillaAndChaletsPageConst } from "./utilsLC/ConstantsLC";

class OurLuxuryVillaAndChaletsPage {

    static GetPageTitle(title){
        cy.title().should('eq',title)
    }
    static clickOnDatesField(){
        getPath(OurLuxuryVillaAndChaletsPageConst.DATES_FIELD).click()
    }
    static SetDate(month,arrivalDate,departureDate){
        recurse(
            () =>  getPath(OurLuxuryVillaAndChaletsPageConst.MONTH_NAME).invoke("text"),
            (n) => {
                if (!n.includes(month)) {
                    getPath(OurLuxuryVillaAndChaletsPageConst.NEXT_MONTH_BTN).click();
                  return false;
                } 
                cy.get('[data-testid=day-'+arrivalDate+']', { force: true }).click({ multiple: true })                 
                cy.get('[data-testid=day-'+departureDate+']', { force: true }).click({ multiple: true })                 
                return true;
              }, 
                {
                delay: 500, // delay before next iteration, ms
                limit: 48,
              }
        );
    }
   
    static clickOnBudgetBTN(){
        getPath(OurLuxuryVillaAndChaletsPageConst.BUDGET_BTN).click()
    }
  
    static FillMaximumBudget(Budget){
        getPath(OurLuxuryVillaAndChaletsPageConst.BUDGET_BTN).click()
        getPath(OurLuxuryVillaAndChaletsPageConst.MAX_BUDGET_FIELD).type(Budget)
    }
    static FillMinimumBudget(Budget){
        getPath(OurLuxuryVillaAndChaletsPageConst.BUDGET_BTN).click()
        getPath(OurLuxuryVillaAndChaletsPageConst.MIN_BUDGET_FIELD).type(Budget)
    }
    static clickOnApplyBTN(){
        getPath(OurLuxuryVillaAndChaletsPageConst.APPLY_BTN).click()
    }
    static clickOnRecommendedBTN(){
        getPath(OurLuxuryVillaAndChaletsPageConst.RECOMMANDED_BTN).click()
    }
    static chooseFilterType(filtrageType){
        getPath(OurLuxuryVillaAndChaletsPageConst.FILTER_TYPE).click()
        if(filtrageType.includes('chambres croissant')){
            getPath(OurLuxuryVillaAndChaletsPageConst.CHAMBRES_CROISSANT_BTN).click()
        }
        if(filtrageType.includes('chambres d??croissant')){
            getPath(OurLuxuryVillaAndChaletsPageConst.CHAMBRES_DECROISSANT_BTN).click()
        }
        if(filtrageType.includes('Prix croissant')){
            getPath(OurLuxuryVillaAndChaletsPageConst.PRIX_CROISSANT_BTN).click()  
        }
        if(filtrageType.includes('Prix d??croissant')){
            getPath(OurLuxuryVillaAndChaletsPageConst.PRIX_DECROISSANT_BTN).click()  
        }
        if(filtrageType.includes('Recommand??s')){
            getPath(OurLuxuryVillaAndChaletsPageConst.RECOMMANDES_BTN).click()  
        }
    }
    static GetResults () {
        getPath(OurLuxuryVillaAndChaletsPageConst.FIELD_RESULT).invoke('text').should('contain', 'r??sultats')
    }
    static isVillaDisplayed(){
        getPath(OurLuxuryVillaAndChaletsPageConst.VILLA_LIST).should('be.visible')
    }
    static clickOnFirstVilla(){
        cy.wait(2000)
        getPath(OurLuxuryVillaAndChaletsPageConst.FIRST_VILLA).click()
    }
    static clickOnNextMonthBTN(){
        getPath(OurLuxuryVillaAndChaletsPageConst.NEXT_MONTH_BTN).click()
    }
    static selectFirstVillaOnSameTab(){
        cy.scrollTo('top');
        cy.wait(2000)
        getPath(OurLuxuryVillaAndChaletsPageConst.FIRST_VILLA).invoke('removeAttr', 'target').click()
    }
}
export default OurLuxuryVillaAndChaletsPage;