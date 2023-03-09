import { ProfilPageConsts } from "./utilsLC/ConstantsLC";
import {isElementVisible,isTextVisible} from "../functions/CommunFonctions";
class ProfilPage{

    static isEmailAccountDisplayed(email){
       isTextVisible(ProfilPageConsts.EMAIL_ACCOUNT,email)
    }
    static isDisconnectBTNDisplayed(){
        isElementVisible(ProfilPageConsts.DECONNECT_BTN)
    }
    static isGreenCheckDispalyed(){
        isElementVisible(ProfilPageConsts.GEEN_CHECK_PROFIL)
    }
    
 

}
export default ProfilPage;