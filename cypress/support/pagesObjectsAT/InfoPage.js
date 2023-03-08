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
        getPath(InfoPageConst.SCORE_BOX).clear()
        getPath(InfoPageConst.SCORE_BOX).type(score)
    }
    static ClickOnSavePromoteSection(){
        getPath(InfoPageConst.SAVE_BTN).click()
    }
    static isHouseScoreVisible(score){
        isTextVisible(InfoPageConst.SCORE_BOX_READ_MODE,score)
    }
    static isGreenCheckVisible(){
        //isElementVisible(InfoPageConst.GREEN_CHECK_EXCLUSIVITY)
        //isElementVisible(InfoPageConst.GREEN_CHECK_ONLINE_RESERVATION)
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
    static ClickOnEditFurtherInformation(){
        getPath(InfoPageConst.FUTHER_INFORMATION_EDIT_BTN).click()
    }
    static ClickOnSuitableForDesableBTN(){
        getPath(InfoPageConst.SUITABLE_FOR_DESABLE_BTN).click()
    }
    static AddSuitableForDesableComment(commentaire1){
        getPath(InfoPageConst.SUITABLE_FOR_DESABLE_BOX).clear()
        getPath(InfoPageConst.SUITABLE_FOR_DESABLE_BOX).type(commentaire1)
    }
    static ClickOnLiveStaffBTN(){
        getPath(InfoPageConst.LIVE_IN_STAFF_BTN).click()
    }
    static AddLiveStaffComment(commentaire2){
        getPath(InfoPageConst.LIVE_IN_STAFF_BOX).clear()
        getPath(InfoPageConst.LIVE_IN_STAFF_BOX).type(commentaire2)
    }
    static isCommentVisible(commentaire1,commentaire2){
        isTextVisible(InfoPageConst.SUITABLE_FOR_DESABLE_COMMENT,commentaire1)
        isTextVisible(InfoPageConst.LIVE_IN_STAFF_COMMENT,commentaire2)
    }
}
export default InfoPage;