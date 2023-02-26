import { getPath, checkURL} from "../functions/CommunFonctions";
import { RessourcesPageConst } from "./utilsAT/ConstantsAT";
class RessourcesPage{

    static isRessourcesPageURLDisplayed(title){
        checkURL(title)
    }
    static ClickOnSelectFile(){
        getPath(RessourcesPageConst.SELECT_FILE_BTN).click()
    }
    static DeletePhotos(){
        getPath(RessourcesPageConst.DELETE_BTN)
    }
    static ClickOnHidePhoto(){
        getPath(RessourcesPageConst.HIDE_BTN).click()
    }
    static ClickOnPublishPhoto(){
        getPath(RessourcesPageConst.PUBLISH_BTN).click()
    }

}
export default RessourcesPage;