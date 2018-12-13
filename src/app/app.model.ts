
export class AppModel {

  constructor(
    public title?: string,
    public checked: boolean = false,
    public category?: string,
    public text?: string
    //ha kérdőjelet rakunk ki a típusmeghatározás elé, akkor paraméter nélkül is meg lehet hívni (nem kötelező használni a változót) -> undefined lesz
  ) 
  {
    /*
    if(Category.BILLING === category) {
      console.log('');
    }
    */

   Object.keys(Category);

}
}

export enum Category {
  BILLING = 'BILLING',
  HOUSE = 'HOUSE',
  SHOPPING = 'SHOPPING',
  TRAVEL = 'TRAVEL'
}


export interface AppInterface {
  title?: string;
  checked?: boolean;
  category?: string;
  text?: string;
}