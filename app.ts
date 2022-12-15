import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import {PlusAccount} from "./class/PlusAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(123, 'Guilherme', 1)
peopleAccount.deposit(100)
peopleAccount.withdraw(50)
console.log('O saldo da conta de', peopleAccount.getName(), 'é de', peopleAccount.getBalance())

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 11)
companyAccount.deposit(1000)
companyAccount.withdraw(300)
console.log('O saldo da conta de', companyAccount.getName(), 'é de', companyAccount.getBalance())

const plusAccount: PlusAccount = new PlusAccount('Plus', 111)
plusAccount.deposit(100)
plusAccount.withdraw(50)
console.log('O saldo da conta de', plusAccount.getName(), 'é de', plusAccount.getBalance())