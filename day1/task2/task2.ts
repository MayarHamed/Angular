class Account {
    public acc_no: string;
    public balance: number;
    public debitAmount() {

    }
    public creditAmount() {

    }
    public getBalance() {

    }
}
interface IAccount {
    date_of_opening: Date;
    addCustomer();
    removeCustomer();
}
class saving_account extends Account implements IAccount {
    public date_of_opening: Date;
    public min_balance:number;

    addCustomer() { }
    removeCustomer() { }
}
class current_account extends Account implements IAccount {
    public date_of_opening: Date;
    public interest_rate:number;

    addCustomer() { }
    removeCustomer() { }
}
