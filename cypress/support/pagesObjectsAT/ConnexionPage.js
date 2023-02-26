import { ConnexionPageConsts } from "./utilsAT/ConstantsAT";
import { getPath } from "../functions/CommunFonctions";
class ConnexionPage{

    static FillEmail(Email){
        getPath(ConnexionPageConsts.EMAIL_FIELD).type(Email)
    }
    static FillPassword(Passsword){
        getPath(ConnexionPageConsts.PASSWORD_FILED).type(Passsword)
    }
    static ClickOnConnexionBTN(){
        getPath(ConnexionPageConsts.CONNEXION_BTN).click()
    }

}
export default ConnexionPage;