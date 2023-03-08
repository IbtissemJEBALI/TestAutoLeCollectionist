import { HousePageConsts } from "./utilsAT/ConstantsAT";
import { getPath, checkURL} from "../functions/CommunFonctions";
class HousePage{

    static isHouseURLDisplayed(title){
        checkURL(title)
    }
    static clickOnFinanceBTN(){
        getPath(HousePageConsts.FINANCE_BTN).click()
    }
    static SearchVilla(villa){
        getPath(HousePageConsts.SEARCH_BOX).type(villa)
        
       
    }
    static ClickOnVilla(){
        cy.wait(2000)
        getPath(HousePageConsts.VILLA_FILED).click()
    }

}
export default HousePage;