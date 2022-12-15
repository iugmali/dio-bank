export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (amount: number): void => {
    if(this.validateStatus()){
      this.setBalance(this.getBalance() + amount)
      console.log(this.getName(),'depositou', amount)
    }
  }

  withdraw = (amount: number): void => {
    if(this.validateStatus() && this.getBalance() > amount){
      this.setBalance(this.getBalance() - amount)
      console.log(this.getName(),'sacou', amount)
    }
  }

  setBalance = (balance: number): void => {
    this.balance = balance
  }

  getBalance = (): number => {
    return this.balance
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    throw new Error('Conta inválida')
  }
}
