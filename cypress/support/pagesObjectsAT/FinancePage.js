import { FinancePageConsts } from "./utilsAT/ConstantsAT";
import { getPath, checkURL} from "../functions/CommunFonctions";
class FinancePage{

    static isFinanceURLDisplayed(title){
        checkURL(title)
    }
    static ClickOnSalesBTN(){
        getPath(FinancePageConsts.SALES_BTN).click()
    }
}
export default FinancePage;