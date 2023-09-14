import customers from '../data/customer.json'

const register = (name: string, iDeposit: number) => {
    if (findCustomerIndex(name) >= 0) {
        return 'User already registered!!';
    } else {
        customers.push({
            name,
            balance: iDeposit
        });
        return JSON.stringify(customers);
    }
}

const checkBalance = (name: string) => {
    let customerIndex = findCustomerIndex(name);
    if (customerIndex < 0) {
        return "Customer not found to check balance";
    }
    return customers[customerIndex].balance;
}

const deposit = (name: string, dAmount: number) => {
    let customerIndex = findCustomerIndex(name);
    if (customerIndex >= 0) {
        customers[customerIndex].balance += dAmount;
        return customers[customerIndex].balance;
    } else {
        return "Customer not found to deposit balance";
    }
}

const withdraw = (name: string, wAmount: number) => {
    let customerIndex = findCustomerIndex(name);
    if (customerIndex < 0) {
        return "Customer Not found to withdraw";
    } else if (customers[customerIndex].balance < wAmount) {
        return "Not enough balance to withdraw";
    } else {
        customers[customerIndex].balance -= wAmount;
        return customers[customerIndex].balance;
    }
}

const transferMoney = (payerName: string, payeeName: string, payingAmount: number) => {
    let payerIndex = findCustomerIndex(payerName);
    if (payerIndex < 0) {
        return "Payer not found to transfer amount";
    } else if (customers[payerIndex].balance < payingAmount) {
        return "Not enough balance to transfer";
    } else {
        customers[payerIndex].balance -= payingAmount;
        let payeeIndex = findCustomerIndex(payeeName);
        customers[payeeIndex].balance += payingAmount;
        return JSON.stringify({ payerBalance: customers[payerIndex].balance, payeeBalance: customers[payeeIndex].balance })
    }
}

const findCustomerIndex = (name: string) => {
    return customers.findIndex(customer => customer.name === name)
}

export default { register, checkBalance, deposit, withdraw, transferMoney }