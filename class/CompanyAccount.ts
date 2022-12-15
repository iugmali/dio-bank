import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (amount: number): void => {
    if(this.validateStatus()){
      this.setBalance(this.getBalance() + amount)
      console.log('Voce pegou empréstimo de', amount)
    }
  }

}
