import { getPath, checkURL,isElementVisible,isTextVisible} from "../functions/CommunFonctions";
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
    static SearchOfficeRoom(room){
        getPath(PiecesAndEquipementPageConst.ROOMS_TYPE_BOX).type(room)
        getPath(PiecesAndEquipementPageConst.OFFICE).click()
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
        //getPath(PiecesAndEquipementPageConst.EQUIPEMENT_TYPE_BOX).type(equipement)
        //getPath(PiecesAndEquipementPageConst.EQUIPEMENT).click()
        getPath(PiecesAndEquipementPageConst.EQUIPEMENT_TYPE_BOX).click()
        getPath('//div[contains(@class,\'multiselect-dropdown\')]//ul//li').each(($ele) => {
            cy.debug($ele.text()) //prints Home Page Hello Hi
            if($ele.text()=='Table de Bureau'){
                $ele.click()
            }
          })
    }
    static ClickOnSaveBTN(){
        getPath(PiecesAndEquipementPageConst.SAVE_BTN).click()
    }
    static isRoomAndEquipementVisible(room,equipement){
        isTextVisible(PiecesAndEquipementPageConst.ROOM_SECTION,room)
        isTextVisible(PiecesAndEquipementPageConst.EQUIPEMENT_SECTION,equipement)
    }
    static ClickOnDeletePiece(){
        getPath(PiecesAndEquipementPageConst.DELETE_PIECE).click()
        getPath(PiecesAndEquipementPageConst.DELETE).click()
    }
     
}
export default PiecesAndEquipementPage;