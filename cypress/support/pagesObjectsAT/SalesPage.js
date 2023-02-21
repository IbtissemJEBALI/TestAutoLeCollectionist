import { SalesPageConsts } from "./utilsAT/ConstantsAT";
import { getPath, checkURL} from "../functions/CommunFonctions";
class SalesPage{

    static isSalesURLDisplayed(title){
        checkURL(title)
    }
    static ClickOnSale(){
        getPath(SalesPageConsts.SALE).click()
    }
}
export default SalesPage;