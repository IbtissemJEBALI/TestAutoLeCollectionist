import { SalesOpenPageConsts } from "./utilsAT/ConstantsAT";
import { getPath, checkURL} from "../functions/CommunFonctions";
class SalesOpenPage{

    static isSalesOpenURLDisplayed(title){
        checkURL(title)
    }
    static IsContractDatesVisible(){
        getPath(SalesOpenPageConsts.CONTRACT_CLIENT_DATES).should('be.visible')
        getPath(SalesOpenPageConsts.CONTRACT_OWNER_DATES).should('be.visible')
    }
}
export default SalesOpenPage;