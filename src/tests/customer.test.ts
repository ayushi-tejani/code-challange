import customerFunctions from '../operations/customer';

test('Should register user', () => {
    const customers = [
        {
            "name": "Raph",
            "balance": 50000
        },
        {
            "name": "Ayushi",
            "balance": 30000
        },
        {
            "name": "Yash",
            "balance": 10000
        }
    ]
    expect(customerFunctions.register('Yash', 10000)).toBe(JSON.stringify(customers));
});

test('Should throw exception user exist on registration', () => {
    expect(customerFunctions.register('Raph', 30000)).toBe("User already registered!!");
});

test('Check customer balance', () => {
    expect(customerFunctions.checkBalance('Ayushi')).toBe(30000);
});

test('Should deposit', () => {
    expect(customerFunctions.deposit('Ayushi', 10000)).toBe(40000);
});

test('Should withdraw', () => {
    expect(customerFunctions.withdraw('Ayushi', 10000)).toBe(30000);
});

test('Should throw error while withdrawing', () => {
    expect(customerFunctions.withdraw('Ayushi', 50000)).toBe("Not enough balance to withdraw");
});

test('Should transfer amount from payer to payee', () => {
    let balance = { payerBalance: 20000, payeeBalance: 60000 };
    expect(customerFunctions.transferMoney('Ayushi', 'Raph', 10000)).toBe(JSON.stringify(balance));
});

test('Should fail to transfer amount from payer to payee if existing balance is not enough', () => {
    expect(customerFunctions.transferMoney('Ayushi', 'Raph', 50000)).toBe("Not enough balance to transfer");
});