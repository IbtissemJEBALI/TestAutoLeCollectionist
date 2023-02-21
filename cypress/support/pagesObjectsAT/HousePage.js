import { HousePageConsts } from "./utilsAT/ConstantsAT";
import { getPath, checkURL} from "../functions/CommunFonctions";
class HousePage{

    static isHouseURLDisplayed(title){
        checkURL(title)
    }
    static clickOnFinanceBTN(){
        getPath(HousePageConsts.FINANCE_BTN).click()
    }
    static SearchVilla(){
        getPath(HousePageConsts.SEARCH_BOX).type()
    }

}
export default HousePage;