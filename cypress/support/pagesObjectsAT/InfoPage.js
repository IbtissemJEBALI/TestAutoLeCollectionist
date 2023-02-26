import { getPath, checkURL} from "../functions/CommunFonctions";
import { InfoPageConst } from "./utilsAT/ConstantsAT";
class InfoPage{

    static isInfoPageURLDisplayed(title){
        checkURL(title)
    }
    static clickOnRessourcesOnglet(){
        getPath(InfoPageConst.RESSOURCES_ONGLET).click()
    }
    static clickOnPiecesAndEquipementOnglet(){
        
        getPath(InfoPageConst.PIECES_AND_EQUIPEMENT_ONGLET).click()
    }
}
export default InfoPage;