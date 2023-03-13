const ConnexionPageConsts={
    EMAIL_FIELD:"[data-testid=email]",
    PASSWORD_FILED:"[data-testid=password]",
    CONNEXION_BTN:"[data-testid=baseform-button-primary]"
}
const HousePageConsts={
    FINANCE_BTN : ".w-60 > .flex-grow > .flex-col > .flex-1 > :nth-child(5) > .flex",
    SEARCH_BOX: "//input[@id=\'searchHouse\']",
    VILLA_FILED :":nth-child(1) > [data-testid=base-row_desktop] > [data-testid=base-cell_actions] > .lc-icon--primary"
    
}
const FinancePageConsts={
    SALES_BTN : "#tab-2 > a"
   }
const SalesPageConsts={
    SALE:":nth-child(1) > [data-testid=base-row_desktop] > [data-testid=base-cell_nextStep] > [data-testid=base-cell--link] > .grid > :nth-child(1) > .w-auto"
  }
const SalesOpenPageConsts={
   CONTRACT_CLIENT_DATES:"//div[@class='flex items-baseline flex-wrap gap-2']//span",
   CONTRACT_OWNER_DATES:"//div[@class='flex items-baseline flex-wrap gap-2']//span"

   }
const InfoPageConst={
    RESSOURCES_ONGLET:"//li[@id='tab-2']",
    PIECES_AND_EQUIPEMENT_ONGLET:"//li[@id='tab-1'][@data-testid='basetabsnav-item']",
    PROMOTE_EDIT_BTN:"//div[@id='promoteAccordion']//button[@class='lc-icon--primary lc-icon--xs lc-icon lc-icon--font-bold']",
    EXCLUSIVITY_BTN:":nth-child(1) > :nth-child(1) > [data-testid=checkbox-toggle-input-container] > .checkbox-toggle > .checkbox-toggle__slider",
    EXCLUSIVITY_TYPE_BOX:"//div[@class='md:col-start-1']//div[@data-testid='multiselect']",
    ONLINE_RESERVATION_BTN:":nth-child(5) > :nth-child(1) > [data-testid=checkbox-toggle-input-container] > .checkbox-toggle > .checkbox-toggle__slider",
    SCORE_BOX:"//input[@data-testid='score']",
    GREEN_CHECK_ONLINE_RESERVATION:":.md\:grid > :nth-child(5) > [data-testid=base-field-read-mode] > .base-icon",
    GREEN_CHECK_EXCLUSIVITY:":nth-child(1) > .md\:grid > :nth-child(1) > [data-testid=base-field-read-mode] > .base-icon",
    SCORE_BOX_READ_MODE:".self-center > [data-testid=base-field-read-mode] > [data-testid=base-field-read-mode-value]",
    UP_SCORE_BTN:"//button[@data-testid='inputNumber-next-button']",
    DOWN_SCORE_BTN:"//button[@data-testid='inputNumber-prev-button']",
    SAVE_BTN:"//button[@data-testid='baseform-button-primary']",
    HOUSE_INFORMATION_EDIT_BTN:"//div[@id='houseInformationAccordion']//button[@class='lc-icon--primary lc-icon--xs lc-icon lc-icon--font-bold']",
    SURFACE_VILLA_BOX:"//input[@id='surface']",
    BEDROOMS_NUMBER_BOX:"//input[@id='bedrooms']",
    BATHROOMS_NUMBER_BOX:"//input[@id='bathrooms']",
    COUNTRY_SIDE_CHECK_BOX:"//label[@class='base-checkbox-label']//input[@value='3']",
    SEA_CHECK_BOX:"//label[@class='base-checkbox-label']//input[@value='1']",
    SKI_CHECK_BOX:"//label[@class='base-checkbox-label']//input[@value='2']",
    CITY_CHECK_BOX:"//label[@class='base-checkbox-label']//input[@value='4']",
    BEDROOMS_NUMBER_BOX_READ_MODE:":nth-child(8) > [data-testid=base-field-read-mode] > [data-testid=base-field-read-mode-value]",
    BATHROOMS_NUMBER_BOX_READ_MODE:":nth-child(10) > [data-testid=base-field-read-mode] > [data-testid=base-field-read-mode-value]",
    SURFACE_VILLA_READ_MODE:":nth-child(3) > .md\:grid > :nth-child(3) > [data-testid=base-field-read-mode] > [data-testid=base-field-read-mode-value]",
    FUTHER_INFORMATION_EDIT_BTN:"//div[@id='furtherInformationAccordion']//button[@class='lc-icon--primary lc-icon--xs lc-icon lc-icon--font-bold']",
    SUITABLE_FOR_DESABLE_BTN:":nth-child(3) > :nth-child(1) > [data-testid=checkbox-toggle-input-container] > .checkbox-toggle > .checkbox-toggle__slider",
    SUITABLE_FOR_DESABLE_BOX:"//textarea[@id='suitableForPeopleWithReducedMobilityComment']",
    LIVE_IN_STAFF_BTN:":nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(1) > [data-testid=checkbox-toggle-input-container] > .checkbox-toggle > .checkbox-toggle__slider",
    LIVE_IN_STAFF_BOX:"//textarea[@id='liveInStaffComment']",
    SUITABLE_FOR_DESABLE_COMMENT:":nth-child(4) > [data-testid=base-field-read-mode] > [data-testid=base-field-read-mode-textedit]",
    LIVE_IN_STAFF_COMMENT:"#furtherInformationAccordion > [data-testid=lc-accordion-body] > .lc-accordion-body-wrapper > [data-testid=baseForm] > :nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > [data-testid=base-field-read-mode] > [data-testid=base-field-read-mode-textedit]",
    EVENTS_EDIT_BTN:"//div[@id='eventsAccordion']//button[@class='lc-icon--primary lc-icon--xs lc-icon lc-icon--font-bold']",
    SUITABLE_FOR_EVENTS_BTN:"//span[@class='checkbox-toggle__slider']",
    MAX_NUMBER_OF_PEOPLE_BOX:"//div[@data-testid='base-input-container']",
    ALL_TYPE_OF_EVENT:"//label[@class='base-checkbox-label']//input[@value='all']",
    MAX_NUMBER_OF_PEOPLE_READ_MODE:".w-full > [data-testid=base-field-read-mode] > [data-testid=base-field-read-mode-value]",
    INCLUDED_SERVICES_FILED:"#includedServices",
    INCLUDED_SERVICES_EDIT_BTN:"//div[@id='includedServicesAccordion']//button[@class='lc-icon--primary lc-icon--xs lc-icon lc-icon--font-bold']",
    CAR_WITH_DRIVER_SERVICES:"//label[@class='base-checkbox-label']//input[@value='car_with_driver']",
    GUARDIEN_STAFF:"//label[@class='base-checkbox-label']//input[@value='guardian']",
    STAFF_AT_HOME:"//label[@class='base-checkbox-label']//input[@value='staff_at_home']",
    SPORTS_COACH:"//label[@class='base-checkbox-label']//input[@value='sports_coach']",
    DINNER_PREPARATION:"//label[@class='base-checkbox-label']//input[@value='dinner_preparation']",
    BREAKFAST_PREPARATION:"//label[@class='base-checkbox-label']//input[@value='breakfast_preparation']",
    MASSAGE_SERVICE:"//label[@class='base-checkbox-label']//input[@value='massage']",
    LAUNDRY_SERVICES:"//label[@class='base-checkbox-label']//input[@value='laundry_service']",
    NESPRESSO_CAPSULES:"//label[@class='base-checkbox-label']//input[@value='nespresso_capsules']",
    ACCESS_TO_A_GOLF:"//label[@class='base-checkbox-label']//input[@value='free_access_to_a_golf_course']",
    ACCESS_TO_SHARED_TENNIS_COURT:"//label[@class='base-checkbox-label']//input[@value='free_access_to_a_shared_tennis_court']"

}
const RessourcesPageConst={
    SELECT_FILE_BTN:"//DIV[@class='fsp-select-labels']",
    DELETE_BTN:"",
    HIDE_BTN:"",
    PUBLISH_BTN:""
}
const PiecesAndEquipementPageConst={
    ADD_ROOMS_BTN:"//div[@class='mt-3.5'][1]//a[text()='Ajouter une pièce']",
    ROOMS_TYPE_BOX:"//input[@class='multiselect-search']",
    OFFICE:"#room-multiselect-option-3",
    CREATE_BTN:"//button[@class='lc-btn--secondary lc-btn--md lc-btn lc-btn--font-bold btn-primary mt-4 md:mt-0 md:ml-3']",
    ADD_EQUIPEMENT_BTN:"//button[@data-testid='add-equipment-button']",
    EQUIPEMENT_TYPE_BOX:"//*[@data-testid='multiselect']//div[text()='Choisir']",
    ITEMS_EQUIPEMENTS_LIST:"//div[@class='multiselect-dropdown']//ul//li",
    EQUIPEMENT:"#equipmentType1677424507539-multiselect-option-office_desk",
    SAVE_BTN:"//button[@data-testid='baseform-button-primary']",
    ROOM_SECTION:"//*[@data-testid='area-name']",
    EQUIPEMENT_SECTION:"//span[@data-testid='equipments-label-name']",
    EDITE_BTN:"//a[@class='lc-icon--primary lc-icon--xs lc-icon lc-icon--font-bold']",
    EQUIPEMENT_FIELD:"//a[text()='Équipements']",
    DELETE_PIECE:"//button[@class='lc-icon--red lc-icon--xs lc-icon lc-icon--font-bold']",
    DELETE:"//button[text()='Supprimer']",
    CREATE_SPACE_BTN:"//div[@class='mt-3.5'][2]//a[text()=' Créer un espace']",
    EMPTY_ROOM_MSG:"//div[text()='Aucune pièce liée au groupe. ']",
    EMPTY_SPACE_MSG:"//div[text()='Aucun espace lié au groupe. ']",
    ADD_EQUIPEMENT_NUMBER:"//button[@data-testid='inputNumber-next-button']",
    CREATE_NEW_GROUP_BTN:"//button[@class='lc-btn--has-icon lc-btn--secondary lc-btn--md lc-btn lc-btn--font-bold']",
    CREATE_GROUP_FIELD:"//h2[@data-testid='lc-modal__header--title']",
    NAME_GROUP_FR_BOX:"//input[@id='nameFr']",
    NAME_GROUP_EN_BOX:"//input[@id='nameEn']",
    SAVE_GROUP_BTN:"//button[@data-testid='baseform-button-primary']",
    ADD_GROUP_BTN:"//div[@class='mt-3.5'][3]//a[text()='Ajouter une pièce']",
    NEW_GROUP_SECTION:"//div[@id='areasGroup2Accordion']",
    EDIT_GROUP_BTN:"//button[@data-testid='areas-group-edit-button']",
    DELETE_GROUP_BTN:"//button[@data-testid='areas-group-delete-button']",
    CONFIRMATION_DELETE_GROUP_BTN:"//button[@data-testid='areas-group-delete-confirm-button']",
    SAVE_MODIFICATION_BTN:"//button[@class='lc-btn--secondary lc-btn--md lc-btn lc-btn--font-bold ml-2']"
}
export{HousePageConsts,ConnexionPageConsts,FinancePageConsts,SalesPageConsts,SalesOpenPageConsts,InfoPageConst,RessourcesPageConst,PiecesAndEquipementPageConst}