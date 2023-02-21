const ConnexionPageConsts={
    EMAIL_FIELD:"[data-testid=email]",
    PASSWORD_FILED:"[data-testid=password]",
    CONNEXION_BTN:"[data-testid=baseform-button-primary]"
}
const HousePageConsts={
    FINANCE_BTN : ".w-60 > .flex-grow > .flex-col > .flex-1 > :nth-child(5) > .flex",
    SEARCH_BOX: "[data-testid=input-search]",
    VILLA_FILED :":nth-child(1) > [data-testid=base-row_desktop]"
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
export{HousePageConsts,ConnexionPageConsts,FinancePageConsts,SalesPageConsts,SalesOpenPageConsts}