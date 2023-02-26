import { HomePageConsts } from "./utilsLC/ConstantsLC";
import { getPath} from "../functions/CommunFonctions";
class HomePage{

    static ClickOnProfilBTN(){
        getPath(HomePageConsts.PROFIL_BTN).click()
    }
    static typeDestination(destination){
        getPath(HomePageConsts.SEARCH_DESTINATION_BOX).type(destination)
    }
    static clickOnSearchBTN(){
        getPath(HomePageConsts.BTN_SEARCH).click()
    }
    static typeVillaName(villa){
        getPath(HomePageConsts.SEARCH_DESTINATION_BOX).type(villa)
    }
    

}
export default HomePage;