import { getPath, checkURL,isElementVisible,isTextVisible,isTextContain} from "../functions/CommunFonctions";
import { PiecesAndEquipementPageConst } from "./utilsAT/ConstantsAT";
class PiecesAndEquipementPage{

    static isPiecesAndEquipementPageURLDisplayed(title){
        checkURL(title)
    }
    static ClickOnAddRoomsBTN(){
        getPath(PiecesAndEquipementPageConst.ADD_ROOMS_BTN).click()
    }
    static isRoomsPageURLDisplayed(title){
        checkURL(title)
    }
    static ClickOnRoomsTypeBTN(){
        getPath(PiecesAndEquipementPageConst.ROOMS_TYPE_BOX).click()
    }
    static SearchRoom(room){
        getPath(PiecesAndEquipementPageConst.ROOMS_TYPE_BOX).click()
        getPath('//div[contains(@class,\'multiselect-dropdown\')]//ul//li').each(($ele) => {
            cy.debug($ele.text()) 
            if($ele.text()==room){
                $ele.click()
            }
          })
    }
    static ClickOnCreateBTN(){
        getPath(PiecesAndEquipementPageConst.CREATE_BTN).click()
    }
    static isEquipementsPageURLDisplayed(title){
        checkURL(title)
    }
    static ClickOnAddEquipementBTN(){
        getPath(PiecesAndEquipementPageConst.ADD_EQUIPEMENT_BTN).click()
    }
    static isEquipementBoxDispalyed(){
        isElementVisible(PiecesAndEquipementPageConst.EQUIPEMENT_TYPE_BOX)
    }
    static SearchEquipement(equipement){
        getPath(PiecesAndEquipementPageConst.EQUIPEMENT_TYPE_BOX).click({force: true})
        getPath(PiecesAndEquipementPageConst.ITEMS_EQUIPEMENTS_LIST).each(($ele) => {
            cy.debug($ele.text()) 
            if($ele.text()==equipement){
                $ele.click()
            }
          })
    }
    static ClickOnSaveBTN(){
        getPath(PiecesAndEquipementPageConst.SAVE_BTN).click()
    }
    static isRoomVisible(room){
        isTextVisible(PiecesAndEquipementPageConst.ROOM_SECTION,room)
    }
    static isEquipementVisible(equipement){
        isTextContain(PiecesAndEquipementPageConst.EQUIPEMENT_SECTION,equipement)
    }
    static ClickOnEditeBTN(){
        getPath(PiecesAndEquipementPageConst.EDITE_BTN).click()
    }
  
    static ClickOnAddEquipementField(){
        getPath(PiecesAndEquipementPageConst.EQUIPEMENT_FIELD).click()
    }

    static ClickOnDeletePiece(){
        getPath(PiecesAndEquipementPageConst.DELETE_PIECE).click()
        getPath(PiecesAndEquipementPageConst.DELETE).click()
    }
     static ClickOnCreateSpaceBTN(){
        getPath(PiecesAndEquipementPageConst.CREATE_SPACE_BTN).click()
     }
     static SearchSpace(space){
        getPath(PiecesAndEquipementPageConst.ROOMS_TYPE_BOX).click()
        getPath(PiecesAndEquipementPageConst.ITEMS_EQUIPEMENTS_LIST).each(($ele) => {
            cy.debug($ele.text()) 
            if($ele.text()==space){
                $ele.click()
            }
          })
    }
    static isSpaceVisible(space){
        isTextVisible(PiecesAndEquipementPageConst.ROOM_SECTION,space)
    }
    static isEmptyRoomMsgVisible(message){
        isTextContain(PiecesAndEquipementPageConst.EMPTY_ROOM_MSG,message)
    }
    static isEmptySpaceMsgVisible(message){
        isTextContain(PiecesAndEquipementPageConst.EMPTY_SPACE_MSG,message)
    }
    static AddEquipementNumber(){
        getPath(PiecesAndEquipementPageConst.ADD_EQUIPEMENT_NUMBER).click()
    }
    static ClickOnCreateNewGRoupBTN(){
        getPath(PiecesAndEquipementPageConst.CREATE_NEW_GROUP_BTN).click()
    }
    static isCreateGroupFieldVisible(field){
        isTextVisible(PiecesAndEquipementPageConst.CREATE_GROUP_FIELD,field)
    }
    static AddFrNameGroup(fr_name){
        getPath(PiecesAndEquipementPageConst.NAME_GROUP_FR_BOX).type(fr_name)
    }
    static AddEnNameGroup(En_name){
        getPath(PiecesAndEquipementPageConst.NAME_GROUP_EN_BOX).type(En_name)
    }
    static ClickOnSaveGroup(){
        getPath(PiecesAndEquipementPageConst.SAVE_GROUP_BTN).click()
    }
    static isNewGroupSectionDispalyed(){
        isElementVisible(PiecesAndEquipementPageConst.NEW_GROUP_SECTION)
    }
    static ClickOnAddPieceGroup(){
        getPath(PiecesAndEquipementPageConst.ADD_GROUP_BTN).click()
    }
    static ClickOnEditGroupBTN(){
        getPath(PiecesAndEquipementPageConst.EDIT_GROUP_BTN).click()
    }
    static ClickOnDeleteGroup(){
        getPath(PiecesAndEquipementPageConst.DELETE_GROUP_BTN).click()
    }
    static ClickOnConfirmationDeleteGroup(){
        getPath(PiecesAndEquipementPageConst.CONFIRMATION_DELETE_GROUP_BTN).click()
    }
    static isCreateGroupBTNDispalyed(){
        isElementVisible(PiecesAndEquipementPageConst.CREATE_NEW_GROUP_BTN)
    }
}
export default PiecesAndEquipementPage;