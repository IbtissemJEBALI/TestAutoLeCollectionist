import { getPath, checkURL, isElementVisible, isTextVisible,scrollToElement} from "../functions/CommunFonctions";
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
    static isSectionEditable(){
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
    static ClickOnEditEventSection(){
        getPath(InfoPageConst.EVENTS_EDIT_BTN).click()
    }
    static ClickOnSuitableForEventBTN(){
        getPath(InfoPageConst.SUITABLE_FOR_EVENTS_BTN).click()
    }
    static AddMaxNumberOfPeople(max_number){
        getPath(InfoPageConst.MAX_NUMBER_OF_PEOPLE_BOX).clear()
        getPath(InfoPageConst.MAX_NUMBER_OF_PEOPLE_BOX).type(max_number)
    }
    static ClickOnTypeOfEvent(){
        getPath(InfoPageConst.ALL_TYPE_OF_EVENT).click
    }
    static isMaxNumberOfPeopleVisible(max_number){
        isTextVisible(InfoPageConst.MAX_NUMBER_OF_PEOPLE_READ_MODE,max_number)
    }
    static IngnorModification(){
        getPath(InfoPageConst.MAX_NUMBER_OF_PEOPLE_BOX).clear()
        getPath(InfoPageConst.SUITABLE_FOR_EVENTS_BTN).click()
    }
    static ClickOnEditIncludedService(){
        getPath(InfoPageConst.INCLUDED_SERVICES_EDIT_BTN).click()
    }
    static isIncludedServicesSectionEditable(){
        scrollToElement(InfoPageConst.INCLUDED_SERVICES_FILED)
        isElementVisible(InfoPageConst.SAVE_BTN)
    }
    static AddShiftsType(){
        getPath(InfoPageConst.CAR_WITH_DRIVER_SERVICES).click()
    }
    static AddStaffServices(){
        getPath(InfoPageConst.GUARDIEN_STAFF).click()
        getPath(InfoPageConst.STAFF_AT_HOME).click()
        getPath(InfoPageConst.SPORTS_COACH).click()
    }
    static AddMealServices(){
        getPath(InfoPageConst.DINNER_PREPARATION).click()
        getPath(InfoPageConst.BREAKFAST_PREPARATION).click()
    }
    static AddWelcomingPack() {
        getPath(InfoPageConst.MASSAGE_SERVICE).click()
    }
    static AddDailyServices(){
        getPath(InfoPageConst.LAUNDRY_SERVICES).click()
        getPath(InfoPageConst.NESPRESSO_CAPSULES).click()
    }
    static AddFreeAccessServices(){
        getPath(InfoPageConst.ACCESS_TO_A_GOLF).click()
        getPath(InfoPageConst.ACCESS_TO_SHARED_TENNIS_COURT).click()
    }
}
export default InfoPage;