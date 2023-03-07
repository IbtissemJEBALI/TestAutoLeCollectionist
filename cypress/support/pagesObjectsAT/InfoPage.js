import { getPath, checkURL, isElementVisible, isTextVisible} from "../functions/CommunFonctions";
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
    static ClickOnPromoteEditBTN(){
        getPath(InfoPageConst.PROMOTE_EDIT_BTN).click()
    }
    static isPromoteSectionEditable(){
        isElementVisible(InfoPageConst.SAVE_BTN)
    }
    static ClickOnExclusivityBTN(){
        getPath(InfoPageConst.EXCLUSIVITY_BTN).click()

    }
    static ClickOnOnlineReservation(){
        getPath(InfoPageConst.ONLINE_RESERVATION_BTN).click()
    }
    static AddScore(score){
        getPath(InfoPageConst.EXCLUSIVITY_BTN).click()

        getPath(InfoPageConst.UP_SCORE_BTN).click()
        /*getPath(InfoPageConst.SCORE_BOX).contain


        for ( score = 0; score < 100; score++) { 
         if (score >= 50){
            getPath(InfoPageConst.UP_SCORE_BTN).click()
         }
         else { if(score <= 50){
            getPath(InfoPageConst.DOWN_SCORE_BTN).click()
                
        }}
    
        }*/

    }
    static ClickOnSavePromoteSection(){
        getPath(InfoPageConst.SAVE_BTN).click()
    }
    static isHouseScoreVisible(score){
        isTextVisible(InfoPageConst.SCORE_BOX_READ_MODE,score)
    }
    static ClickOnEditHouseInfomationBTN(){
        getPath(InfoPageConst.HOUSE_INFORMATION_EDIT_BTN).click()
    }
    static ClickOnHouseCategoriesCheckBox(){
        getPath(InfoPageConst.CITY_CHECK_BOX).click()
        getPath(InfoPageConst.COUNTRY_SIDE_CHECK_BOX).click()
        getPath(InfoPageConst.SEA_CHECK_BOX).click()
        getPath(InfoPageConst.SKI_CHECK_BOX).click()
        
    }
    static AddBedroomsNumber(bedrooms){
        getPath(InfoPageConst.BEDROOMS_NUMBER_BOX).clear()
        getPath(InfoPageConst.BEDROOMS_NUMBER_BOX).type(bedrooms)
    }
    static AddBathroomsNumber(bathrooms){
        getPath(InfoPageConst.BATHROOMS_NUMBER_BOX).clear()
        getPath(InfoPageConst.BATHROOMS_NUMBER_BOX).type(bathrooms)
    }
    static AddSurfaceNumber(surface){
        getPath(InfoPageConst.SURFACE_VILLA_BOX).clear()
        getPath(InfoPageConst.SURFACE_VILLA_BOX).type(surface)
    }
    static isBedroomsNumberVisible(bedrooms){
        isTextVisible(InfoPageConst.BEDROOMS_NUMBER_BOX_READ_MODE,bedrooms)
       
    }
    static isBathroomsNumberVisible(bathrooms){
       
        isTextVisible(InfoPageConst.BATHROOMS_NUMBER_BOX_READ_MODE,bathrooms)
        
    }
    static isSurfaceSizeVisible(surface){
        isTextVisible(InfoPageConst.SURFACE_VILLA_READ_MODE,surface)
    }
}
export default InfoPage;