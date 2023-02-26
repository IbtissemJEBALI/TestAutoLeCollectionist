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
    PIECES_AND_EQUIPEMENT_ONGLET:"//li[@id='tab-1'][@data-testid='basetabsnav-item']"
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
    EQUIPEMENT_TYPE_BOX:"//*[@data-testid='multiselect']",
    EQUIPEMENT:"#equipmentType1677424507539-multiselect-option-office_desk",
    SAVE_BTN:"//button[@data-testid='baseform-button-primary']",
    ROOM_SECTION:"//*[@data-testid='area-name']",
    EQUIPEMENT_SECTION:"//span[@data-testid='equipments-label-name']",
    DELETE_PIECE:"//button[@class='lc-icon--red lc-icon--xs lc-icon lc-icon--font-bold']",
    DELETE:"//button[text()='Supprimer']"
   

}
export{HousePageConsts,ConnexionPageConsts,FinancePageConsts,SalesPageConsts,SalesOpenPageConsts,InfoPageConst,RessourcesPageConst,PiecesAndEquipementPageConst}