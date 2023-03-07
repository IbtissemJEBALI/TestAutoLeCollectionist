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
    //"nth-child(1) > [data-testid=base-row_desktop]"
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
    PINNED_HOUSE_BTN:"//div[@class='md:col-start-1'][3]//input[@data-testid='checkbox-toggle-input']",
    ONLINE_RESERVATION_BTN:":nth-child(4) > :nth-child(1) > [data-testid=checkbox-toggle-input-container] > .checkbox-toggle > .checkbox-toggle__slider",
    FLEXIBLE_CANCELLATION:"//div[@class='md:col-start-2'][2]//input[@data-testid='checkbox-toggle-input']",
    FLEXIBLE_CANCELLATION_TYPE_BOX:"//div[@class='md:col-start-2']//div[@class='multiselect-wrapper']",
    SCORE_BOX:"//input[@data-testid='score']",
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
    CONFIRMATION_DELETE_GROUP_BTN:"//button[@data-testid='areas-group-delete-confirm-button']"
}
export{HousePageConsts,ConnexionPageConsts,FinancePageConsts,SalesPageConsts,SalesOpenPageConsts,InfoPageConst,RessourcesPageConst,PiecesAndEquipementPageConst}