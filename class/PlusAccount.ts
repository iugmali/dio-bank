import { DioAccount } from "./DioAccount"

export class PlusAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    deposit = (amount: number): void => {
        if(this.validateStatus()){
            this.setBalance(this.getBalance() + amount + 10)
            console.log(this.getName(),'depositou', amount, 'e ganhou mais 10')
        }
    }

}