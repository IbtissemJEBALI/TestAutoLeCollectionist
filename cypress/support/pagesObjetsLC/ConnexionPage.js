import { ConnexionPageConsts } from "./utilsLC/ConstantsLC";
import { getPath, checkURL} from "../functions/CommunFonctions";

class ConnexionPage{

    static isConnexionURLDisplayed(title){
        checkURL(title)
        
    }
    static FillEmail(Email){
        getPath(ConnexionPageConsts.EMAIL_FIELD).type(Email)
    }
    static ClickOnNextBTN(){
        getPath(ConnexionPageConsts.NEXT_BTN).click()
    }
    static FillPasword(Passsword){
        cy.wait(1000)
        getPath(ConnexionPageConsts.PASSWORD_FIELD).type(Passsword)
    }
    static ClickOnConnecxinBTN(){
        getPath(ConnexionPageConsts.CONNEXION_BTN).click()
    }
}
export default ConnexionPage;